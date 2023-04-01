import { LoginForm } from "@/Components";
import "./Login.scss";

export const Login = () => {
  return (
    <div className="Login">
      <div className="Login__container container">
        <LoginForm />
      </div>
    </div>
  );
};
