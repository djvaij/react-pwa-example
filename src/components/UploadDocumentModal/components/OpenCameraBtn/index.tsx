import { ChangeEventHandler, FC, MouseEventHandler, useRef } from 'react';
import styles from './OpenCameraBtn.module.scss';
import { ReactComponent as CameraIcon } from '../../../../assets/images/svg/camera.svg';

interface IOpenCameraBtnProps {
  handleFile: (file: File) => void;
}

export const OpenCameraBtn: FC<IOpenCameraBtnProps> = ({ handleFile }) => {
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
    <>
      <button className={styles.container} onClick={handleClick}>
        <CameraIcon />
        <span className={styles.btnText}>Open camera & take photo</span>
      </button>
      <input
        type="file"
        name="documentPhoto"
        id="documentPhoto"
        accept="image/*"
        capture="environment"
        style={{ display: 'none' }}
        ref={hiddenFileInput}
        onChange={handleChange}
      />
    </>
  );
};
