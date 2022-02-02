import styles from "./AppFooter.module.scss";

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>Copyright &copy; Neetly.</p>
    </footer>
  );
};

export { AppFooter };
