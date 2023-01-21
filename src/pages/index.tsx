import { type NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  const t = [
    {
      id: "payment-checkout",
      p: "1/19/2023",
    },
    {
      id: "login-form",
      p: "1/19/2023",
    },
    {
      id: "product-card",
      p: "1/19/2023",
    },
  ];

  return (
    <>
      <Head>
        <title>Showcase</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="The thebigbot showcase" />
      </Head>
      <Navbar />
      <main>
        <h1 className="m-5 mt-16 p-3 text-center text-6xl font-semibold">
          Showcase
        </h1>
        <div className="flex justify-center">
          <button onClick={() => {
            window.open("https://github.com/athebigbot/showcase");
          }} className="shadow-lg hover:shadow-orange-400 m-3 mb-16 mt-7 rounded-lg border-2 border-orange-600 p-2 pr-11 pl-11 text-black hover:bg-orange-600 hover:text-white">
            Source Code
          </button>
        </div>
        <hr />
        <div className="mt-7 flex flex-wrap justify-center sha">
          {t.map((r, i) => {
            return (
              <div
                key={i}
                className="m-5 w-64 rounded-lg border-2 p-1 pt-14 pb-14 shadow-md hover:shadow-lg"
              >
                <h1 className="mt-2 text-center text-2xl font-semibold">
                  {r.id.charAt(0).toUpperCase()}
                  {r.id.replaceAll("-", " ").substring(1)}
                </h1>
                <h6 className="mt-4 text-center">{r.p}</h6>
                <br />
                <div className="flex justify-center">
                  <button onClick={() => { window.location.href = `/s/${r.id}` }} className="m-3 mt-7 rounded-lg border-2 border-sky-600 p-2 pr-11 pl-11 text-black hover:bg-sky-600 shadow-lg hover:shadow-sky-400 hover:text-white">
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
