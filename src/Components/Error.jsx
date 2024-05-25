import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  return (
    <div
      id="main"
      className="h-[calc(100vh-150px)] flex justify-center items-center bg-white dark:bg-black text-black dark:text-white"
    >
      <div className="fof">
        <h1 className="text-2xl text-center text-red-600 font-bold">Error: {err?.status}</h1>
        <h3 className="text-xl text-center text-red-600 font-bold">{err?.error?.message}</h3>
        <div className="text-center font-bold underline">
          <Link to={'/'}>Back To Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
