import styles from './UploadDocumentBtn.module.scss';

export const UploadDocumentBtn: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <button onClick={onClick} className={styles.container}>
      Upload Document
    </button>
  );
};
