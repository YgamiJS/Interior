import React, { Dispatch, SetStateAction } from "react";
import styles from "./Popup.module.scss";

interface IProps {
  visible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const Popup = ({ visible, setIsVisible, children }: IProps) => {
  return (
    <div className={styles.popup} onClick={() => setIsVisible(false)}>
      <div className={styles.popup__container}>
        <div
          className={styles.popup__content}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
