import Head from "next/head";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";

export const Default = (
  props: React.PropsWithChildren<{ isMobileAllowed?: boolean }>
) => {
  const [name, setName] = useState("");
  const [blockMobile, setBlockMobile] = useState(false);

  useEffect(() => {
    setName(
      window.location.pathname.charAt(3).toUpperCase() +
        window.location.pathname
          .replaceAll("/s/", "")
          .replaceAll("-", " ")
          .replaceAll("/", "")
          .substring(1)
    );

    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      if (!props.isMobileAllowed) setBlockMobile(true);
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      if (!props.isMobileAllowed) setBlockMobile(true);
    }
  }, [props, props.isMobileAllowed]);

  return (
    <>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`Try ${name}! And add your star on github`}
        />
      </Head>
      <Navbar />
      <main>
        {!blockMobile ? (
          props.children
        ) : (
          <div className="flex min-h-screen flex-row items-center justify-center">
            <h1 className="text-2xl font-semibold">Mobile not allowed</h1>
          </div>
        )}
      </main>
    </>
  );
};
