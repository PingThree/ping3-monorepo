import { ZonedDateTime } from '@internationalized/date'
import { millisecondsToSeconds, sub } from 'date-fns'

export const oneSecondInMs = 1000
export const oneMinInMs = 60 * oneSecondInMs
export const oneHourInMs = 60 * oneMinInMs
export const oneDayInMs = 24 * oneHourInMs
export const oneWeekInMs = 7 * oneDayInMs

export const oneSecond = 1
export const oneMinInSecs = 60 * oneSecond
export const oneHourInSecs = 60 * oneMinInSecs

export const twentyFourHoursInMs = 24 * oneHourInMs
export const twentyFourHoursInSecs = twentyFourHoursInMs / oneSecondInMs

export const oneYearInSecs = twentyFourHoursInSecs * 365
export const oneWeekInSecs = twentyFourHoursInSecs * 7

/**
 * Converts hours to seconds
 * @param {number} hrs - Number of hours
 * @returns {Object} Object with conversion method toSecs()
 */
export function hours(hrs: number) {
  return {
    toSecs: () => hrs * oneHourInSecs,
  }
}

/**
 * Converts minutes to seconds or milliseconds
 * @param {number} _mins - Number of minutes
 * @returns {Object} Object with conversion methods toSecs() and toMs()
 */
export function mins(_mins: number) {
  return {
    toSecs: () => _mins * oneMinInSecs,
    toMs: () => _mins * oneMinInMs,
  }
}

/**
 * Converts seconds to milliseconds
 * @param {number} _secs - Number of seconds
 * @returns {Object} Object with conversion method toMs()
 */
export function secs(_secs: number) {
  return {
    toMs: () => _secs * oneSecondInMs,
  }
}

/**
 * Converts milliseconds to seconds
 * @param {number} _ms - Number of milliseconds
 * @returns {Object} Object with conversion method toSecs()
 */
export function ms(_ms: number) {
  return {
    toSecs: () => _ms / oneSecondInMs,
  }
}

/**
 * Formats a date into a localized string with detailed date and time information
 * @param {Date} date - Date object to format
 * @returns {string} Formatted date string
 */
export function dateTimeLabelFor(date: Date): string {
  return date.toLocaleString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZoneName: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

/**
 * Converts a Unix timestamp (seconds) to JavaScript timestamp (milliseconds)
 * @param {number} unixTimestamp - Unix timestamp in seconds
 * @returns {number} JavaScript timestamp in milliseconds
 */
export function toJsTimestamp(unixTimestamp: number): number {
  return unixTimestamp * oneSecondInMs
}

/**
 * Converts a JavaScript timestamp (milliseconds) to Unix timestamp (seconds)
 * @param {number} jsTimestamp - JavaScript timestamp in milliseconds
 * @returns {number} Unix timestamp in seconds
 */
export function toUnixTimestamp(jsTimestamp: number): number {
  return Math.round(jsTimestamp / oneSecondInMs)
}

/**
 * Converts a the given string (format 2022-03-30) into a UNIX timestamp
 *
 * @param {string} date - Date string in format 2022-03-30
 * @returns {number} - Unix timestamp in seconds
 */
export function dateToUnixTimestamp(date: string): number {
  return Date.parse(date) / oneSecondInMs
}

/**
 * Converts a Date object to UTC timestamp
 * @param {Date} date - Date object to convert
 * @returns {number} UTC timestamp in milliseconds
 */
export function toUtcTime(date: Date) {
  return Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  )
}

/**
 * Gets a Unix timestamp that is a specified number of seconds from now
 * @param {number} secs - Number of seconds to add to current time
 * @returns {number} Unix timestamp in seconds
 */
export function getTimestampSecondsFromNow(secs: number): number {
  return Math.ceil(Date.now() / 1000) + secs
}

/**
 * Gets a Unix timestamp that is a specified number of minutes from now
 * @param {number} mins - Number of minutes to add to current time
 * @returns {number} Unix timestamp in seconds
 */
export function getTimestampInMinsFromNow(mins: number) {
  const nowInSecs = Date.now() / 1000
  const secondsToAdd = mins * 60
  return Math.floor(nowInSecs + secondsToAdd)
}

/**
 * Get seconds since given timestamp.
 *
 * @param {number} timestamp - Unix timestamp in seconds.
 */
export function getSecondsSince(timestamp: number): number {
  return Math.ceil(Date.now() / 1000) - timestamp
}

/**
 * Creates an object with methods to get timestamps relative to the current time
 * @returns {Object} Object with method minsAgo() to get timestamp from minutes ago
 */
export function getTimestamp() {
  return {
    minsAgo: (minutes: number) => sub(millisecondsToSeconds(new Date().getTime()), { minutes }),
  }
}

/**
 * Converts a Unix timestamp (seconds) to a ZonedDateTime object
 * @param {string} timestamp - Unix timestamp in seconds
 * @returns {ZonedDateTime} ZonedDateTime object
 */
export function secondsToZonedDateTime(timestamp: string): ZonedDateTime {
  const jsDate = new Date(Number(timestamp) * 1000)
  return new ZonedDateTime(
    jsDate.getUTCFullYear(),
    jsDate.getUTCMonth() + 1,
    jsDate.getUTCDate(),
    'Etc/UTC',
    0,
    jsDate.getUTCHours(),
    jsDate.getUTCMinutes(),
    jsDate.getUTCSeconds(),
    jsDate.getUTCMilliseconds()
  )
}
