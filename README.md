```txt
(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)
(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)
(\o/)                                                                                (\o/)
(/|\)                                                                                (/|\)
(\o/)                                                                                (\o/)
(/|\)       ___  ___                 _            ______     _                       (/|\)
(\o/)       |  \/  |                | |           | ___ \   (_)                      (\o/)
(/|\)       | .  . | ___  _ __ _ __ | |__   ___   | |_/ / __ _ _ __ ___   ___        (/|\)
(\o/)       | |\/| |/ _ \| '__| '_ \| '_ \ / _ \  |  __/ '__| | '_ ` _ \ / _ \       (\o/)
(/|\)       | |  | | (_) | |  | |_) | | | | (_) | | |  | |  | | | | | | |  __/       (/|\)
(\o/)       \_|  |_/\___/|_|  | .__/|_| |_|\___/  \_|  |_|  |_|_| |_| |_|\___|       (\o/)
(/|\)                         | |                                                    (/|\)
(\o/)                         |_|                                                    (\o/)
(/|\)                                                                                (/|\)
(\o/)                                                                                (\o/)
(/|\)                                                                                (/|\)
(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)(\o/)
(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)(/|\)
```

# Morpho Prime Apps

A collection of apps and packages that make up the Morpho Prime Suite.

_This project uses pnpm, if you haven't already installed it you can find the documentation here: <https://pnpm.io/installation>_

_The monorepo uses pnpm workspaces along with Turborepo to manage build
orchestration, to learn more about Turborepo please see the docs._

## What's inside?

This [Turborepo](https://turbo.build/repo/docs) includes the following apps/packages:

### Apps

| Name                                                                                           | Description                | URL                                                        |
| ---------------------------------------------------------------------------------------------- | -------------------------- | ---------------------------------------------------------- |
| [delegate-app](https://github.com/morpho-org/prime-monorepo/tree/main/apps/delegate-app)       | The Morpho Delegate app    | [https://delegate.morpho.org](https://delegate.morpho.org) |
| [rewards-app](https://github.com/morpho-org/prime-monorepo/tree/main/apps/rewards-app)         | The Morpho Rewards app     | [https://rewards.morpho.org](https://rewards.morpho.org)   |
| [liquidation-app](https://github.com/morpho-org/prime-monorepo/tree/main/apps/liquidation-app) | The Morpho Liquidation app | -                                                          |

### Packages

| Name                                                                                       | Description                                                                                                             |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| [Theme](https://github.com/morpho-org/prime-monorepo/tree/main/packages/theme)             | The [HeroUI](https://www.heroui.com/)/[TailwindCSS](https://tailwindcss.com/) theme used in the Rewards & Delegate apps |
| [Web3](https://github.com/morpho-org/prime-monorepo/tree/main/packages/web3)               | Shared Web3 functionality, hooks and utils. Includes wagmi provider and chain config                                    |
| [Utils](https://github.com/morpho-org/prime-monorepo/tree/main/packages/utils)             | Provides common utils for all apps                                                                                      |
| [Indexer](https://github.com/morpho-org/prime-monorepo/tree/main/packages/indexer)         | Client side index db wrapper                                                                                            |
| [E2E Rewards](https://github.com/morpho-org/prime-monorepo/tree/main/packages/e2e-rewards) | E2E test suite for the rewards app, uses playwright                                                                     |

## Getting started

Clone the repo:

```sh
git clone https://github.com/morpho-org/prime-monorepo.git
```

Move into the repo and install packages:

```sh
cd prime-monorepo && pnpm install
```

Set up environment variables:

```sh
pnpm setup:env
```

Start the apps:

```sh
pnpm dev # spins up all apps
# or
pnpm dev:delegate # Just the delegate app http://localhost:3030
# or
pnpm dev:rewards # Just the rewards app http://localhost:3040
# or
pnpm dev:curator # Just the curator app http://localhost:4040
```

## Testing

To run tests locally we have the following commands:

```sh
pnpm test:unit # for unit tests
pnpm test:e2e:dev # for E2E tests
```

## Dev tools

### React Scan

We are using [React Scan](https://react-scan.com/) to debug any rerender issues. These should be much less
likely now that we're on React 19 (using compiler). However, the tooling could
still be useful. To test and app with React Scan, spin up the dev env with the
following command:

```sh
pnpm dev:scan --filter=<app-name>
```

## Turborepo

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Turborepo Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
