import { Default } from "../../components/Deafault";

export default function Element() {
  return (
    <Default>
      <div className="flex min-h-screen flex-row items-center justify-center">
        <div className="bg-slate-100 p-14 drop-shadow-lg">
          <h1 className="mb-12 text-center text-4xl font-semibold">Login</h1>
          <input
            type="text"
            className="mb-6 rounded-md border-2 bg-slate-50 p-[0.30rem]"
            placeholder="Username"
          />
          <br />
          <input
            type="password"
            className="mb-6 rounded-md border-2 bg-slate-50 p-[0.30rem]"
            placeholder="Password"
          />
          <br />
          <div className="flex justify-center">
            <button className="rounded-md bg-sky-600 p-2 pr-[5.5rem] pl-[5.5rem] mt-3 text-white shadow-lg hover:scale-105 hover:shadow-sky-400">
              Login
            </button>
          </div>
        </div>
      </div>
    </Default>
  );
}
