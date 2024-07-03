import React from "react";
import styles from "./styles.module.css";

interface PrimaryButtonProps {
  title: string;
  onClick:(e : React.MouseEvent<HTMLButtonElement>) => void
}

const PrimaryButton = ({ title, onClick }: PrimaryButtonProps) => {
  return <button className={styles.primaryBtn} onClick={onClick}>{title}</button>;
};

export default PrimaryButton;
