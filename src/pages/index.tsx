import { type NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  const t = [
    {
      id: "payment-checkout",
      p: "1/19/2023"
    },
    {
      id: "login-form",
      p: "1/19/2023"
    },
    {
      id: "Product card",
      p: "1/19/2023"
    }
  ];

  return (
    <>
      <Head>
        <title>Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <h1 className="font-semibold text-center p-3 m-5 mt-16 mb-16 text-6xl">Showcase</h1>
        <hr />
        <div className="flex flex-wrap justify-center mt-7">
          {t.map((r, i) => {
            return (
              <div
                key={i}
                className="m-5 w-64 rounded-lg border-2 p-1 pt-14 pb-14"
              >
                <h1 className="mt-2 text-center text-2xl font-semibold">
                  {r.id.charAt(0).toUpperCase()}
                  {r.id.replaceAll("-", " ").substring(1)}
                </h1>
                <h6 className="text-center mt-4">{r.p}</h6>
                <br />
                <div className="flex justify-center">
                  <button className="m-3 mt-7 rounded-lg border-2 text-black border-sky-600 p-2 pr-11 pl-11 hover:bg-sky-600 hover:text-white">
                    Try it now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
