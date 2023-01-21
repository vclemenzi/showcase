import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isInProject, setIsInproject] = useState(false);
  const [project, setProject] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setIsInproject(window.location.pathname.length > 1);
    setProject(
      window.location.pathname.charAt(3).toUpperCase() +
        window.location.pathname
          .replaceAll("/s/", "")
          .replaceAll("-", " ")
          .replaceAll("/", "")
          .substring(1)
    );
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  }, [isCopied]);

  return (
    <nav className="flex bg-slate-100 p-4">
      <h1 className="text-lg font-semibold text-slate-800">
        {!isInProject ? "Showcase" : project}
      </h1>
      <span className="ml-3 mr-3 text-slate-400">|</span>
      <div>
        <a
          onClick={() => {
            window.open("https://github.com/athebigbot/showcase");
          }}
          className="ml-1 mr-1 cursor-pointer text-slate-400 hover:text-sky-600"
        >
          source
        </a>
        <a
          onClick={() => {
            window.open("https://github.com/athebigbot/showcase/stargazers");
          }}
          className="ml-1 mr-1 cursor-pointer text-slate-400 hover:text-sky-600"
        >
          stargazers
        </a>
        <a
          onClick={() => {
            void navigator.clipboard.writeText(window.location.href);
            setIsCopied(true);
          }}
          className="ml-1 mr-1 cursor-pointer text-slate-400 hover:text-sky-600"
        >
          {!isCopied ? (
            "share"
          ) : (
            <>
              <span className="text-green-500">✓ copied</span>
            </>
          )}
        </a>
      </div>
    </nav>
  );
};
