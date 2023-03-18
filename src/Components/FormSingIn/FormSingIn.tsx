import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { SubmitHandler } from "react-hook-form";
import { Form } from "../Form/Form";
import { IUser } from "@/types/types";
import { useAppDispatch } from "@/hooks/useRedux";
import { addUser } from "@/store/userSlice";
import styles from "./FormSingIn.module.scss";

export const FormSingIn = () => {
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IUser> = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email!, data.password!)
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
        console.log(user);

        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("err", errorMessage);
      });
  };
  return <Form text="Sing In" onSubmit={onSubmit}></Form>;
};
