import { Default } from "../../components/Deafault";

export default function Element() {
  return (
    <Default>
      <div className="flex min-h-screen flex-row items-center justify-center">
        <div className="bg-slate-100 p-14 drop-shadow-lg">
          <h1 className="mb-8 text-2xl font-semibold">Confirm your payment</h1>
          <div className="flex">
            <input
              type="text"
              className="mb-6 w-80 rounded-md border-2 bg-slate-50 p-[0.30rem]"
              placeholder="Possessor"
            />
            <input
              type="text"
              className="mb-6 ml-12 w-24 rounded-md border-2 bg-slate-50 p-[0.30rem] text-center"
              placeholder="CVC"
            />
          </div>
          <br />
          <div className="flex">
            <input
              type="text"
              className="mb-2 w-full rounded-md border-2 bg-slate-50 p-[0.30rem]"
              placeholder="Card Number"
            />
          </div>
          <div>
            <input
              type="date"
              className=" mt-2 mb-4 w-40 rounded-md border-2 bg-slate-50 p-[0.30rem]"
            />

            <button className="mt-5 ml-40 rounded-md bg-emerald-500 p-2 pr-10 pl-10 text-white shadow-lg hover:scale-105 hover:shadow-emerald-400">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Default>
  );
}
