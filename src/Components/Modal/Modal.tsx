import { Dispatch } from "react";
import styles from "./Modal.module.scss";
import { SetStateAction } from "react";

interface IProps {
  visible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const Modal = ({ visible, setIsVisible, children }: IProps) => {
  return (
    <div className={styles.modal} onClick={() => setIsVisible(false)}>
      <div className={styles.modal__container}>
        <div
          className={styles.modal__content}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
