import { type NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>

      </main>
    </>
  );
};

export default Home;
