import { ChangeEventHandler, FC, MouseEventHandler, useRef } from 'react';
import { ReactComponent as UploadFileIcon } from '../../assets/images/svg/upload-file.svg';

import styles from './FileUploader.module.scss';

interface IFileUploaderProps {
  handleFile: (file: File) => void;
}

export const FileUploader: FC<IFileUploaderProps> = ({ handleFile }) => {
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    handleFile(file);
  };

  return (
    <div>
      <button className={styles.uploadBtn} onClick={handleClick}>
        <UploadFileIcon />
        <div className={styles.uploadBtnText}>Choose file to upload</div>
        <div className={styles.uploadBtnSubText}>
          Select image, pdf or ms.word
        </div>
      </button>
      <input
        type="file"
        name="documentPhoto"
        id="documentPhoto"
        accept="image/*"
        // capture="environment"
        style={{ display: 'none' }}
        ref={hiddenFileInput}
        onChange={handleChange}
      />
    </div>
  );
};
