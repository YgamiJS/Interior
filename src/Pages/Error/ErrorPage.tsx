import { useRouteError } from "react-router";
import "./ErrorPage.scss";

export const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <main className="main">
      <div className="Error">
        <div className="Error__container container">Error {error?.message}</div>
      </div>
    </main>
  );
};
