import styles from "./styles.module.css";

const { heading } = styles;
const Heading = ({ title }: { title: string }) => {
  return <div className={`text-2xl ${heading}`}>{title}</div>;
};

export default Heading;
