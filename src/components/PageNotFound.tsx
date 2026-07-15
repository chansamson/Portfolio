export function PageNotFound() {
  return (
    <div className="h-screen flex flex-wrap justify-center items-center relative">
      <h1>
        <span className="font-bold">404</span>{" "}
        <span className="opacity-50 font-light">| Page Not Found</span>
      </h1>
      <p className="absolute bottom-0 right-25 text-[15rem] opacity-10">:(</p>
    </div>
  );
}
