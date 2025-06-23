import { tryCatch } from '@repo/utils'
import { BlobNotFoundError, head, put } from '@vercel/blob'

const VERCEL_BLOB_BASE = 'public.blob.vercel-storage.com'

// Types
type BlobPath = `/${string}.json`
type ID = `store_${string}`

export class BlobStorage {
  private readonly id: ID

  constructor(id: ID) {
    this.id = id
  }

  private get baseUrl(): string {
    return `https://${this.id}.${VERCEL_BLOB_BASE}`
  }

  /**
   * Fetches JSON data from a Vercel Blob storage
   * @param path - The path to the blob file (must start with / and end with .json)
   * @param reviver - Optional function to transform the parsed JSON data
   * @returns The parsed JSON data
   * @throws Error if the blob doesn't exist or if there's an error parsing the data
   */
  async getJson<T>(path: BlobPath, reviver?: (key: string, value: unknown) => unknown): Promise<T> {
    const filePath = `${this.baseUrl}${path}`

    // Check if blob exists
    const { error: headError } = await tryCatch(head(filePath))
    if (headError) {
      if (headError instanceof BlobNotFoundError) {
        throw new Error(`Blob not found: ${path}`)
      }
      throw headError
    }

    // Fetch the blob content
    const { data: response, error: fetchError } = await tryCatch(fetch(filePath))
    if (fetchError) {
      throw new Error(`Failed to fetch blob: ${fetchError.message}`)
    }

    if (!response.ok) {
      throw new Error(`Blob fetch failed with status ${response.status}`)
    }

    // Parse the JSON content
    const { data: jsonData, error: parseError } = await tryCatch<T>(
      response.text().then(text => JSON.parse(text, reviver))
    )

    if (parseError) {
      throw new Error(`Failed to parse blob data: ${parseError.message}`)
    }

    return jsonData
  }

  /**
   * Uploads JSON data to Vercel Blob storage
   * @param path - The path where the blob should be stored (must start with / and end with .json)
   * @param data - The data to store
   * @param replacer - Optional function to transform the data before stringification
   * @throws Error if the upload fails
   */
  async putJson<T>(
    path: BlobPath,
    data: T,
    replacer?: (key: string, value: unknown) => unknown
  ): Promise<void> {
    const jsonString = JSON.stringify(data, replacer)
    const blob = new Blob([jsonString], { type: 'application/json' })

    const { error: putError } = await tryCatch(
      put(path, blob, {
        access: 'public',
        addRandomSuffix: false,
        allowOverwrite: true,
      })
    )

    if (putError) {
      throw new Error(`Failed to upload blob: ${putError.message}`)
    }
  }

  /**
   * Checks if a blob exists
   * @param path - The path to check (must start with / and end with .json)
   * @returns true if the blob exists, false otherwise
   */
  async exists(path: BlobPath): Promise<boolean> {
    const filePath = `${this.baseUrl}${path}`
    const { error } = await tryCatch(head(filePath))
    return !error
  }
}
