import { ReactComponent as NoDocumentsIcon } from '../../assets/images/svg/no-documents.svg';
import styles from './NoDocuments.module.scss';

export const NoDocuments = () => {
  return (
    <div className={styles.container}>
      <NoDocumentsIcon />
      <p className={styles.description}>No documents have been uploaded yet!</p>
    </div>
  );
};
