import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <div id="main">
        <div className="fof">
          <h1>Error: {err?.status}</h1>
          <h3>{err?.error?.message}</h3>
          <Link to={"/"} className="BackToHome">
            Back To Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
