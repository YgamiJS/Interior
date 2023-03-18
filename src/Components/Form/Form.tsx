import { IUser } from "@/types/types";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Form.module.scss";

interface IProps {
  onSubmit: SubmitHandler<IUser>;
  text: string;
}

export const Form = ({ text, onSubmit }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Email"
        type="email"
        {...register("email", { required: true })}
      />
      <input
        placeholder="Password"
        type="text"
        {...register("password", { required: true })}
      />
      <button>{text}</button>
      {errors.email && <span>This field is required</span>}
    </form>
  );
};
