"use client";

import Arweave from "arweave";
import { ConnectButton, useApi, useConnection } from "arweave-wallet-kit";
import { useState } from "react";
import DispatchButton from "./dispatchButton";

export default function Home() {
  const { connected, connect, disconnect } = useConnection();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <ConnectButton
        accent="rgb(255, 0, 0)"
        profileModal={false}
        showBalance={true}
      />
      {connected ? <DispatchButton /> : ""}
    </main>
  );
}
