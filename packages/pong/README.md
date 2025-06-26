# @ping3/pong

[![npm version](https://badge.fury.io/js/@ping3%2Fpong.svg)](https://badge.fury.io/js/@ping3%2Fpong)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

TypeScript bindings and React hooks for interacting with the Ping3 smart contract across multiple blockchain networks.

## Features

- 🔧 **Type-safe** - Full TypeScript support with auto-generated types
- ⚛️ **React hooks** - Ready-to-use hooks for reading and writing contract data
- 🌐 **Multi-chain** - Support for Ethereum, Polygon, and Base networks
- 📦 **Tree-shakeable** - Import only what you need
- 🔄 **Auto-generated** - Bindings generated directly from contract ABI
- ⚡ **Modern** - Built with Viem and Wagmi v2

## Installation

```bash
# npm
npm install @ping3/pong

# yarn
yarn add @ping3/pong

# pnpm
pnpm add @ping3/pong
```

### Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install viem wagmi react react-dom
```

## Quick Start

### 1. Basic Setup

```typescript
import { ping3Abi, ping3Address, ping3Config } from "@ping3/pong";

// Use the ABI directly
console.log(ping3Abi);

// Use pre-configured contract config
console.log(ping3Config);

// Access contract addresses by chain ID
console.log(ping3Address[1]); // Ethereum mainnet
console.log(ping3Address[137]); // Polygon
console.log(ping3Address[8453]); // Base
```

### 2. React Hooks

```typescript
import {
  useReadPing3GetUserPongCount,
  useWritePing3TagLocation,
  useSimulatePing3TagLocation
} from '@ping3/pong'

function PingComponent() {
  const { data: pongCount } = useReadPing3GetUserPongCount({
    args: ['0x742d35Cc6634C0532925a3b8D582F5DE2cB99da0']
  })

  const { writeContract } = useWritePing3TagLocation()

  const { data: simulateData } = useSimulatePing3TagLocation({
    args: [40748817, -73985428, "Times Square NYC"]
  })

  const handleTagLocation = () => {
    writeContract({
      args: [40748817, -73985428, "Times Square NYC"]
    })
  }

  return (
    <div>
      <p>Pong Count: {pongCount?.toString()}</p>
      <button onClick={handleTagLocation}>
        Tag Location
      </button>
    </div>
  )
}
```

### 3. With Wagmi Configuration

```typescript
import { http, createConfig } from "wagmi";
import { mainnet, polygon, base } from "wagmi/chains";
import { ping3Config } from "@ping3/pong";

const config = createConfig({
  chains: [mainnet, polygon, base],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [base.id]: http(),
  },
});

// Now use the hooks with your Wagmi setup
```

## API Reference

### Contract Configuration

- `ping3Abi` - The complete contract ABI
- `ping3Address` - Contract addresses by chain ID
- `ping3Config` - Pre-configured contract object with ABI and addresses

### Read Hooks

- `useReadPing3()` - Generic read hook
- `useReadPing3GetUserPong()` - Get a specific user's pong by index
- `useReadPing3GetUserPongCount()` - Get total pong count for a user
- `useReadPing3GetUserPongsInRange()` - Get user's pongs within a range
- `useReadPing3HasPong()` - Check if a specific pong exists
- `useReadPing3HasPongHash()` - Check if a pong hash exists
- `useReadPing3MaxBatchSize()` - Get maximum batch size
- `useReadPing3MaxTagLength()` - Get maximum tag length

### Write Hooks

- `useWritePing3()` - Generic write hook
- `useWritePing3TagLocation()` - Tag a single location
- `useWritePing3TagLocationWithSig()` - Tag location with signature
- `useWritePing3TagManyLocations()` - Tag multiple locations
- `useWritePing3TagManyLocationsWithSig()` - Tag multiple locations with signature

### Simulate Hooks

- `useSimulatePing3()` - Generic simulate hook
- `useSimulatePing3TagLocation()` - Simulate tagging a location
- `useSimulatePing3TagLocationWithSig()` - Simulate tagging with signature
- `useSimulatePing3TagManyLocations()` - Simulate tagging multiple locations
- `useSimulatePing3TagManyLocationsWithSig()` - Simulate batch tagging with signature

## Supported Networks

| Network  | Chain ID | Contract Address                             |
| -------- | -------- | -------------------------------------------- |
| Ethereum | 1        | `0x134e51285E2A0D732A83165decD0F80DcdD34eD5` |
| Polygon  | 137      | `0x134e51285E2A0D732A83165decD0F80DcdD34eD5` |
| Base     | 8453     | `0x134e51285E2A0D732A83165decD0F80DcdD34eD5` |

## Contract Functions

### `tagLocation(int32 latitude, int32 longitude, string tag)`

Tag a single location with coordinates and a description.

### `tagManyLocations(int32[] latitudes, int32[] longitudes, string[] tags)`

Tag multiple locations in a single transaction.

### `getUserPongCount(address user) → uint256`

Get the total number of pongs for a specific user.

### `getUserPong(address user, uint256 index) → Pong`

Get a specific pong by user and index.

## Development

```bash
# Install dependencies
pnpm install

# Build the package
pnpm build

# Run tests
pnpm test

# Watch mode for development
pnpm dev

# Generate documentation
pnpm build:docs

# Lint code
pnpm lint

# Check bundle size
pnpm size
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [ping3](https://github.com/ping3)

## Links

- [Documentation](https://github.com/ping3/ping3-monorepo/tree/main/packages/pong)
- [Issues](https://github.com/ping3/ping3-monorepo/issues)
- [NPM Package](https://www.npmjs.com/package/@ping3/pong)
