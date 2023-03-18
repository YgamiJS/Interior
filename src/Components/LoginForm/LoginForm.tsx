import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Form } from "@/Components/Form/Form";
import { IUser } from "@/types/types";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/hooks/useRedux";
import { addUser } from "@/store/userSlice";
import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IUser> = (data) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email!, data.password!)
      .then((userCredential) => {
        const user = userCredential.user;
        dispath(
          addUser({
            id: user.uid,
            email: user.email,
            password: data.password,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("err", errorMessage);
      });
  };

  return <Form text="Login" onSubmit={onSubmit} />;
};
