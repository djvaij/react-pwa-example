import styles from './OrDivider.module.scss';

export const OrDivider = () => (
  <div className={styles.container}>
    <div className={styles.lineLeft} />
    <div className={styles.text}>Or</div>
    <div className={styles.lineRight} />
  </div>
);
