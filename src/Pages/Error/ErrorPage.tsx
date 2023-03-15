import { useRouteError } from "react-router";
import "./ErrorPage.scss";

export const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <div className="Error">
      <div className="Error__container container">error {error?.message}</div>
    </div>
  );
};
