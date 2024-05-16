import { FC } from 'react';
import styles from './UploadDocumentModal.module.scss';
import { ReactComponent as CloseIcon } from '../../assets/images/svg/x-icon.svg';
import { FileUploader } from '../FileUploader';
import { OrDivider } from './components/OrDivider';
import { OpenCameraBtn } from './components/OpenCameraBtn';

interface IUploadDocumentModalProps {
  opened: boolean;
  onClose: () => void;
}

export const UploadDocumentModal: FC<IUploadDocumentModalProps> = ({
  opened,
  onClose,
}) => {
  const handleFile = (file: File) => {
    console.log(file);
  };

  if (!opened) {
    return null;
  }
  return (
    <aside className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerText}>Upload document</div>
        <button onClick={onClose} className={styles.closeBtn}>
          <CloseIcon />
        </button>
      </header>
      <main className={styles.main}>
        <FileUploader handleFile={handleFile} />
        <OrDivider />
        <OpenCameraBtn handleFile={() => {}} />
      </main>
    </aside>
  );
};
