import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-4">
        <div className="text-center ">
          <iframe
            className="w-48 h-48 mx-auto mb-4"
            src="https://giphy.com/embed/8L0Pky6C83SzkzU55a"
            alt="Error Image"
          ></iframe>
          <h1 className="tracking-tight text-center text-xl md:text-4xl">
            Sorry, we can't find this page
            <p className="text-center text-sm md:text-xl">
              More to discover...
            </p>
          </h1>
          <div className="mt-3">
            <Link to="/" className="btn btn-secondary btn-sm md:btn-md">
              back to home page
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h1 className="text-center text-3xl">
        Sorry, there was an error check your internet connection{" "}
      </h1>
    </main>
  );
};

export default Error;
