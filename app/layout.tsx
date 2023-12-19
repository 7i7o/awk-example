import { ArweaveWalletKit } from "arweave-wallet-kit";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ArweaveWalletKit
          config={{
            permissions: [
              "SIGN_TRANSACTION",
              "DISPATCH",
              "ACCESS_ADDRESS",
              "ACCESS_ALL_ADDRESSES",
              "ACCESS_ARWEAVE_CONFIG",
              "ACCESS_PUBLIC_KEY",
              "DECRYPT",
              "ENCRYPT",
              "SIGNATURE",
            ],
          }}
        >
          {children}
        </ArweaveWalletKit>
      </body>
    </html>
  );
}
