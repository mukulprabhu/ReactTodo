import styles from "./footer.module.css";
const Footer = ({ doneTodos, totalTodos }) => {
  return (
    <div className={styles.footer}>
      <span className={styles.footerItem}>Completed Todos : {doneTodos}</span>
      <span className={styles.footerItem}>Total Todos : {totalTodos}</span>
    </div>
  );
};

export default Footer;
