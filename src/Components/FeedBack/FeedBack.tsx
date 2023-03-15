import { Popup } from "@/Components";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import styles from "./FeedBack.module.scss";
import type { Inputs } from "@/types/types";

export const FeedBack = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [visible, setIsVisible] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => setIsVisible(true); //popup

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter your email"
          {...register("email", { required: true })}
        />
        <button>Subscribe</button>
        {errors.email && <span>This field is required</span>}
      </form>
      {visible && (
        <Popup visible={visible} setIsVisible={setIsVisible}>
          <h1>{`We will send on ${watch("email")} more info.`}</h1>
        </Popup>
      )}
    </>
  );
};
