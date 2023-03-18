import React, { useEffect } from "react";
import { BoughtProduct } from "@/Components/BoughtProduct/BoughtProduct";
import { List } from "@/Components/List/List";
import { IBoughtProduct } from "@/types/types";
import styles from "./BoughtProductsList.module.scss";
import { useAppDispatch } from "@/hooks/useRedux";
import { checkBoughtProducts } from "@/store/BoughtProductsSlice";

interface IProps {
  boughtProducts: IBoughtProduct[];
}

export const BoughtProductsList = ({ boughtProducts }: IProps) => {
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(checkBoughtProducts());
  }, [dispath]);

  return (
    <div className={styles.bought}>
      <h2 className={styles.h2}>Bought</h2>
      <List
        className={styles.list}
        items={boughtProducts}
        renderList={(boughtProduct) => (
          <BoughtProduct key={boughtProduct.id} product={boughtProduct} />
        )}
      />
    </div>
  );
};
