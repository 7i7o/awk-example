"use client";

import Arweave from "arweave";
import { useApi } from "arweave-wallet-kit";
import { useState } from "react";

export default function DispatchButton() {
  const [txId, setTxId] = useState("");
  const api = useApi();
  const handleDispatch = async () => {
    if (!api) {
      console.log("No API !!!");
      return "";
    }
    const arweave = await Arweave.init({
      host: "arweave.net",
      port: 443,
      protocol: "https",
    });
    const data = "Wallet-kit test";
    const tx = await arweave.createTransaction({ data });
    // const signedTx = await api.sign(tx);
    const dispatchedTx = await api.dispatch(tx);
    console.log(dispatchedTx);
    setTxId(dispatchedTx.id);
  };
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <button
        className="px-8 py-4 bg-sky-700 text-white rounded-2xl mb-3"
        onClick={handleDispatch}
      >
        Dispatch Tx
      </button>
      <span>
        <strong>txId:</strong>&nbsp;{txId ? txId : "-"}
      </span>
    </main>
  );
}
