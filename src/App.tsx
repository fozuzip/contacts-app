export default function App() {
  return (
    <div
      className="bg-very-light-gray text-very-dark-blue flex h-full w-full flex-col
    items-center"
    >
      <div className="flex h-full w-full max-w-[1000px] flex-col items-center justify-stretch gap-10 px-7 py-10 ">
        <header className="flex max-w-[480px] flex-col items-center">
          <h2 className=" pb-1 text-3xl font-extralight">
            CSS, Javascript, API
          </h2>
          <h1 className=" pb-4 text-3xl font-semibold">Contacts Application</h1>
          <p className="text-grayish-blue text-center text-sm">
            View basic info of contracts in a 3x2 layout. Click on the magnifier
            icon to open a modal and vire detailed contact info contact
          </p>
        </header>
        <main className="desktop:grid-cols-3 desktop:grid-rows-2 grid w-full grid-cols-1 grid-rows-6  gap-4 sm:grid-cols-2 sm:grid-rows-3">
          <div className="">Contact 1</div>
          <div className="">Contact 2</div>
          <div className="">Contact 3</div>
          <div className="">Contact 4</div>
          <div className="">Contact 5</div>
          <div className="">Contact 6</div>
        </main>
        <footer className="text-[10px]">
          Challenge by{" "}
          <a
            href="https://www.speedcast.com/"
            target="_blank"
            className="text-cyan-400 underline"
          >
            Speedcast.
          </a>
        </footer>
      </div>
    </div>
  );
}
