import { FC, useEffect, useState } from 'react';
import styles from './LoadedDocument.module.scss';
import { ReactComponent as DeleteIcon } from '../../../../assets/images/svg/small-red-x-icon.svg';

interface ILoadedDocumentProps {
  file: File;
  clickHandler: () => void;
  deleteHandler: () => void;
}

export const LoadedDocument: FC<ILoadedDocumentProps> = ({
  file,
  clickHandler,
  deleteHandler,
}) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }, [file]);

  if (!file) return null;

  return (
    <div className={styles.container} onClick={clickHandler}>
      <img className={styles.previewImage} src={image || ''} alt="preview" />
      <div className={styles.fileInfo}>
        <div className={styles.fileName}>{file.name}</div>
        <div className={styles.fileSize}>
          {(file.size / (1024 * 1024)).toFixed(2)}MB
        </div>
      </div>
      <button className={styles.deleteBtn} onClick={deleteHandler}>
        <DeleteIcon />
      </button>
    </div>
  );
};
