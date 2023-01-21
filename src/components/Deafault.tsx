import Head from "next/head";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";

export const Default = (props: React.PropsWithChildren) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(
      window.location.pathname.charAt(3).toUpperCase() +
        window.location.pathname
          .replaceAll("/s/", "")
          .replaceAll("-", " ")
          .replaceAll("/", "")
          .substring(1)
    );
  }, [props]);

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
      <main>{props.children}</main>
    </>
  );
};
