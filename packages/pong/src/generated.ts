import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ping3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const ping3Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reporter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'latitude',
        internalType: 'int32',
        type: 'int32',
        indexed: false,
      },
      {
        name: 'longitude',
        internalType: 'int32',
        type: 'int32',
        indexed: false,
      },
      {
        name: 'timestamp',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      { name: 'tag', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'LocationTagged',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_BATCH_SIZE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_TAG_LENGTH',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getUserPong',
    outputs: [
      {
        name: '',
        internalType: 'struct Ping3.Pong',
        type: 'tuple',
        components: [
          { name: 'latitude', internalType: 'int32', type: 'int32' },
          { name: 'longitude', internalType: 'int32', type: 'int32' },
          { name: 'timestamp', internalType: 'uint64', type: 'uint64' },
          { name: 'tag', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'getUserPongCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'start', internalType: 'uint256', type: 'uint256' },
      { name: 'end', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getUserPongsInRange',
    outputs: [
      {
        name: '',
        internalType: 'struct Ping3.Pong[]',
        type: 'tuple[]',
        components: [
          { name: 'latitude', internalType: 'int32', type: 'int32' },
          { name: 'longitude', internalType: 'int32', type: 'int32' },
          { name: 'timestamp', internalType: 'uint64', type: 'uint64' },
          { name: 'tag', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'latitude', internalType: 'int32', type: 'int32' },
      { name: 'longitude', internalType: 'int32', type: 'int32' },
      { name: 'timestamp', internalType: 'uint64', type: 'uint64' },
      { name: 'tag', internalType: 'string', type: 'string' },
    ],
    name: 'hasPong',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'pongHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'hasPongHash',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'history',
    outputs: [
      { name: 'latitude', internalType: 'int32', type: 'int32' },
      { name: 'longitude', internalType: 'int32', type: 'int32' },
      { name: 'timestamp', internalType: 'uint64', type: 'uint64' },
      { name: 'tag', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'pongExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'latitude', internalType: 'int32', type: 'int32' },
      { name: 'longitude', internalType: 'int32', type: 'int32' },
      { name: 'tag', internalType: 'string', type: 'string' },
    ],
    name: 'tagLocation',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'latitude', internalType: 'int32', type: 'int32' },
      { name: 'longitude', internalType: 'int32', type: 'int32' },
      { name: 'timestamp', internalType: 'uint64', type: 'uint64' },
      { name: 'tag', internalType: 'string', type: 'string' },
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'sig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'tagLocationWithSig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'latitudes', internalType: 'int32[]', type: 'int32[]' },
      { name: 'longitudes', internalType: 'int32[]', type: 'int32[]' },
      { name: 'tags', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'tagManyLocations',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'latitudes', internalType: 'int32[]', type: 'int32[]' },
      { name: 'longitudes', internalType: 'int32[]', type: 'int32[]' },
      { name: 'timestamps', internalType: 'uint64[]', type: 'uint64[]' },
      { name: 'tags', internalType: 'string[]', type: 'string[]' },
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'sig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'tagManyLocationsWithSig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const ping3Address = {
  1: '0x134e51285E2A0D732A83165decD0F80DcdD34eD5',
  137: '0x134e51285E2A0D732A83165decD0F80DcdD34eD5',
  8453: '0x134e51285E2A0D732A83165decD0F80DcdD34eD5',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const ping3Config = { address: ping3Address, abi: ping3Abi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ping3Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useReadPing3 = /*#__PURE__*/ createUseReadContract({
  abi: ping3Abi,
  address: ping3Address,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"MAX_BATCH_SIZE"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useReadPing3MaxBatchSize = /*#__PURE__*/ createUseReadContract({
  abi: ping3Abi,
  address: ping3Address,
  functionName: 'MAX_BATCH_SIZE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"MAX_TAG_LENGTH"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useReadPing3MaxTagLength = /*#__PURE__*/ createUseReadContract({
  abi: ping3Abi,
  address: ping3Address,
  functionName: 'MAX_TAG_LENGTH',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"getUserPong"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useReadPing3GetUserPong = /*#__PURE__*/ createUseReadContract({
  abi: ping3Abi,
  address: ping3Address,
  functionName: 'getUserPong',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"getUserPongCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useReadPing3GetUserPongCount = /*#__PURE__*/ createUseReadContract(
  { abi: ping3Abi, address: ping3Address, functionName: 'getUserPongCount' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"getUserPongsInRange"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useReadPing3GetUserPongsInRange =
  /*#__PURE__*/ createUseReadContract({
    abi: ping3Abi,
    address: ping3Address,
    functionName: 'getUserPongsInRange',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"hasPong"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useReadPing3HasPong = /*#__PURE__*/ createUseReadContract({
  abi: ping3Abi,
  address: ping3Address,
  functionName: 'hasPong',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"hasPongHash"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useReadPing3HasPongHash = /*#__PURE__*/ createUseReadContract({
  abi: ping3Abi,
  address: ping3Address,
  functionName: 'hasPongHash',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"history"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useReadPing3History = /*#__PURE__*/ createUseReadContract({
  abi: ping3Abi,
  address: ping3Address,
  functionName: 'history',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useReadPing3Nonces = /*#__PURE__*/ createUseReadContract({
  abi: ping3Abi,
  address: ping3Address,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"pongExists"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useReadPing3PongExists = /*#__PURE__*/ createUseReadContract({
  abi: ping3Abi,
  address: ping3Address,
  functionName: 'pongExists',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ping3Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useWritePing3 = /*#__PURE__*/ createUseWriteContract({
  abi: ping3Abi,
  address: ping3Address,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"tagLocation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useWritePing3TagLocation = /*#__PURE__*/ createUseWriteContract({
  abi: ping3Abi,
  address: ping3Address,
  functionName: 'tagLocation',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"tagLocationWithSig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useWritePing3TagLocationWithSig =
  /*#__PURE__*/ createUseWriteContract({
    abi: ping3Abi,
    address: ping3Address,
    functionName: 'tagLocationWithSig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"tagManyLocations"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useWritePing3TagManyLocations =
  /*#__PURE__*/ createUseWriteContract({
    abi: ping3Abi,
    address: ping3Address,
    functionName: 'tagManyLocations',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"tagManyLocationsWithSig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useWritePing3TagManyLocationsWithSig =
  /*#__PURE__*/ createUseWriteContract({
    abi: ping3Abi,
    address: ping3Address,
    functionName: 'tagManyLocationsWithSig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ping3Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useSimulatePing3 = /*#__PURE__*/ createUseSimulateContract({
  abi: ping3Abi,
  address: ping3Address,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"tagLocation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useSimulatePing3TagLocation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ping3Abi,
    address: ping3Address,
    functionName: 'tagLocation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"tagLocationWithSig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useSimulatePing3TagLocationWithSig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ping3Abi,
    address: ping3Address,
    functionName: 'tagLocationWithSig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"tagManyLocations"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useSimulatePing3TagManyLocations =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ping3Abi,
    address: ping3Address,
    functionName: 'tagManyLocations',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ping3Abi}__ and `functionName` set to `"tagManyLocationsWithSig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useSimulatePing3TagManyLocationsWithSig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ping3Abi,
    address: ping3Address,
    functionName: 'tagManyLocationsWithSig',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ping3Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useWatchPing3Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ping3Abi,
  address: ping3Address,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ping3Abi}__ and `eventName` set to `"LocationTagged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x134e51285E2A0D732A83165decD0F80DcdD34eD5)
 */
export const useWatchPing3LocationTaggedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ping3Abi,
    address: ping3Address,
    eventName: 'LocationTagged',
  })
