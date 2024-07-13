import styles from "./styles.module.css";

const { heading } = styles;
const Heading = ({ title }: { title: string }) => {
  return <div className={heading}>{title}</div>;
};

export default Heading;
