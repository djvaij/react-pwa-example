import styles from './DocumentsDescription.module.scss';

export const DocumentsDescription = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Documents</h3>
      <p className={styles.description}>
        We use your documents to provide banks with information to dispute items
      </p>
    </div>
  );
};
