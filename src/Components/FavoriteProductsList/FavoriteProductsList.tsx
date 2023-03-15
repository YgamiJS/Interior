import { IFavoriteProduct } from "@/types/types";
import { List } from "@/Components";
import { FavoriteProduct } from "@/Components";
import { uuid } from "@/utils/utils";
import styles from "./FavoriteProductsList.module.scss";

interface IProps {
  favoriteProducts: IFavoriteProduct[];
}

export const FavoriteProductsList = ({ favoriteProducts }: IProps) => {
  return (
    <List
      className={styles.list}
      items={favoriteProducts}
      renderList={(favoriteProduct) => (
        <FavoriteProduct key={uuid()} product={favoriteProduct} />
      )}
    />
  );
};
