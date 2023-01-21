import Head from "next/head";
import { useEffect, useState } from "react";

export default function Err() {
    const [state, setState] = useState("");

    useEffect(() => {
        setTimeout(() => { window.location.href = "/"; }, 1300);
    }, []);

  return (
    <>
      <Head>
        <title>Nothing here, yet!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-row items-center justify-center">
        <div>
          <h1 className="text-3xl font-semibold">Nothing here, yet!</h1>
        </div>
      </main>
    </>
  );
}
