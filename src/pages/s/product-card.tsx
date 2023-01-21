import { Default } from "../../components/Deafault";

export default function Element() {
  return (
    <Default>
      <div className="flex min-h-screen flex-row items-center justify-center">
        <div className="bg-slate-100 p-14 drop-shadow-lg">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Frunning_shoes%2Frunning_shoes_PNG5827.png&f=1&nofb=1&ipt=7827bd28aa21b2599dfc00cfff071892725750a5cf0374259a8c9ed2d84493be&ipo=images"
              alt=""
              className="mb-3 w-56"
            />
          </div>
          <h1 className="text-center text-2xl font-semibold">Running shoes</h1>
          <p className=" mb-6 text-slate-600">
            Confort is our first priority in a shoes
          </p>
          <h3 className="text-center text-2xl font-semibold">$80</h3>
          <div className="flex justify-center">
            <button className="mt-5 rounded-md bg-amber-500 p-2 pr-20 pl-20 text-white shadow-lg hover:scale-105 hover:shadow-amber-400">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Default>
  );
}
