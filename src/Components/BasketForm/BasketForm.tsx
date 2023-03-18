import { useForm, SubmitHandler } from "react-hook-form";
import type { BasketFrom } from "@/types/types";
import styles from "./BasketForm.module.scss";

interface IProps {
  onSubmit: SubmitHandler<BasketFrom>;
  totalPrice: number;
}

export const BasketForm = ({ onSubmit, totalPrice }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasketFrom>();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Location"
        type="text"
        {...register("location", { required: true })}
      />
      <input
        placeholder="Email"
        type="email"
        {...register("email", { required: true })}
      />
      <input
        type="number"
        placeholder="Card"
        {...register("card", { required: true, pattern: /\d+/ })}
      />
      <p className={styles.price}>Total price {totalPrice}</p>
      <button>Buy</button>
      {errors.email && <span>This field is required</span>}
    </form>
  );
};
