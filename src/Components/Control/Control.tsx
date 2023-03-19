import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector } from "@/hooks/useRedux";
import type { IProduct, Input } from "@/types/types";
import { List } from "@/Components/List/List";
import { Modal } from "@/Components/Modal/Modal";
import { ProductItem } from "@/Components/ProductItem/ProductItem";
import styles from "./Control.module.scss";

interface IProps {
  text: React.ReactNode | string;
  placeholder: string;
}

export const Control = ({ text, ...props }: IProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>();
  const products = useAppSelector((state) => state.products.merchandises);

  const [visible, setIsVisible] = useState(false);
  const [correspondproducts, setProducts] = useState<IProduct[]>([]);

  const onSubmit: SubmitHandler<Input> = () => {
    const regexp = new RegExp(watch("input"), "gi");
    setIsVisible(true);
    setProducts(products.filter((product) => regexp.test(product.title)));
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          {...props}
          {...register("input", { required: true })}
        />
        <button className={styles.button}>{text}</button>
      </form>
      {visible && (
        <Modal visible={visible} setIsVisible={setIsVisible}>
          {correspondproducts.length > 0 ? (
            <List
              items={correspondproducts}
              renderList={(product) => <ProductItem product={product} />}
            />
          ) : (
            <h1>No products</h1>
          )}
        </Modal>
      )}
    </>
  );
};
