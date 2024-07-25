import React from "react";
import styles from "./styles.module.css";

interface PrimaryButtonProps {
  title: string;
  // onClick:(e : React.MouseEvent<HTMLButtonElement>) => void
}

const PrimaryButton = ({ title }: PrimaryButtonProps) => {
  return (
    <button type="submit" className={styles.primaryBtn}>
      {title}
    </button>
  );
};

export default PrimaryButton;
