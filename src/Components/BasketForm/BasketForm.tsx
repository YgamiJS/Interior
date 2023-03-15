import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import type { BasketFrom } from "@/types/types";
import styles from "./BasketForm.module.scss";
import { Popup } from "@/Components";
import { useAppDispatch } from "@/hooks/useRedux";
import { clearFavorite } from "@/store/FavoriteProductsSlice";

export const BasketForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BasketFrom>();
  const [visible, setIsVisible] = useState(false);

  const dispath = useAppDispatch();

  const onSubmit: SubmitHandler<BasketFrom> = (data) => {
    setIsVisible(true);
    // dispath(addBuyedProduct())
    dispath(clearFavorite());
  }; //modaд логика покупки
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Location"
          {...register("location", { required: true })}
        />
        <input
          placeholder="Email"
          {...register("email", { required: true })}
          type="email"
        />
        <input placeholder="Card" {...register("card", { required: true })} />
        <button>Buy</button>
        {errors.email && <span>This field is required</span>}
      </form>
      {visible && (
        <Popup visible={visible} setIsVisible={setIsVisible}>
          <div>byied</div>
        </Popup>
      )}
    </>
  );
};
