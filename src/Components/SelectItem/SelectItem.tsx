import { IOption, IProduct } from "@/types/types";
import styles from "./SelectItem.module.scss";

interface IProps {
  option: IOption;
}

export const SelectItem = ({ option }: IProps) => {
  return (
    <option className={styles.option} value={option.value}>
      {option.name}
    </option>
  );
};
