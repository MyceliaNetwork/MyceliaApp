"use client";
export default function Hero() {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2">
        <img
          src="./mycelia-hero.png"
          alt="Hero Image"
          className="h-auto w-full"
        />
      </div>
      <div className="flex w-full items-center p-4 md:w-1/2">
        <div>
          <h1 className="text-4xl font-bold text-gray-800/80">Mycelia</h1>
          <p className="pt-2 text-lg text-gray-700/70">
            Development the easy way...
          </p>
          <button
            className="mt-4 rounded bg-[#DAA520]/70 px-4 py-2 font-bold text-white hover:bg-[#DAA520]"
            onClick={handleScroll}
          >
            Contact us!
          </button>
        </div>
      </div>
    </div>
  );
}
