import { IOption } from "@/types/types";
import styles from "./Select.module.scss";
import { SelectItem } from "@/Components/SelectItem/SelectItem";

interface IProps {
  options: IOption[];
  onChange: (selected: IOption["value"]) => void;
}

export const Select = ({ options, onChange }: IProps) => {
  return (
    <select
      className={styles.select}
      onChange={(selected: React.ChangeEvent<HTMLSelectElement>) =>
        onChange(selected.target.value as IOption["value"])
      }
    >
      <option disabled selected>
        Сортировать по
      </option>
      {options.map((option) => (
        <SelectItem key={option.value} option={option} />
      ))}
    </select>
  );
};
