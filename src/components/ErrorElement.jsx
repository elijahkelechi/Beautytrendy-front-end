import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h4 className="font-bold text-primary-content">There was an Error...</h4>
    </div>
  );
};

export default ErrorElement;
