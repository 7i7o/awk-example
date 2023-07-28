# Arweave Wallet Kit Example

Basic example usage of Arweave Wallet Kit

## Usage

Clone this repo, `pnpm install`, and then `pnpm run dev` and open the server in `http://localhost:3000/`

## Steps to reproduce this:

1. `pnpx create-next-app@latest` and choose a name for the app
2. `cd <name-of-your-app>`
3. `pnpm install arweave-wallet-kit`
4. Inside `app/layout.tsx`, move `{children}` inside a `<ArweaveWalletKit>` tag
5. In `app/page.tsx`:
   1. Delete everything inside the `<main>` tag
   2. Inside the `<main>` tag, paste:
      ```
      <ConnectButton
        accent="rgb(255, 0, 0)"
        profileModal={false}
        showBalance={true}
      />
      ```
