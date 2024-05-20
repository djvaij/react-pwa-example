import { FC, useEffect, useState } from 'react';
import styles from './ZoomDocumentModal.module.scss';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface IZoomDocumentModalProps {
  file: File | null;
  opened: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export const ZoomDocumentModal: FC<IZoomDocumentModalProps> = ({
  file,
  opened,
  onClose,
  onDelete,
}) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }, [file]);

  if (!opened || !image) {
    return null;
  }

  return (
    <div className={styles.container}>
      <TransformWrapper>
        <TransformComponent>
          <img src={image} alt="preview-with-zoom" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};
