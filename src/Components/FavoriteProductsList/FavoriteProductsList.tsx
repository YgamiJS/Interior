import { IFavoriteProduct } from "@/types/types";
import { List } from "@/Components/List/List";
import { FavoriteProduct } from "@/Components/FavoriteProduct/FavoriteProduct";
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
        <FavoriteProduct key={favoriteProduct.id} product={favoriteProduct} />
      )}
    />
  );
};
