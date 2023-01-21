import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isInProject, setIsInproject] = useState(false);
  const [project, setProject] = useState("");

  useEffect(() => {
    setIsInproject(window.location.pathname.length > 1);
    setProject(window.location.pathname.replaceAll("-", " ").replaceAll("/s/", ""));
  }, []);

  return (
    <nav className="flex bg-slate-100 p-4">
      <h1 className="text-lg font-semibold text-slate-800">
        {!isInProject ? "Showcase" : project}
      </h1>
      <span className="ml-3 mr-3 text-slate-400">|</span>
      <div>
        <a className="ml-1 mr-1 cursor-pointer text-slate-400 hover:text-sky-600">
          source
        </a>
        <a className="ml-1 mr-1 cursor-pointer text-slate-400 hover:text-sky-600">
          stargazers
        </a>
        <a className="ml-1 mr-1 cursor-pointer text-slate-400 hover:text-sky-600">
          share
        </a>
      </div>
    </nav>
  );
};
