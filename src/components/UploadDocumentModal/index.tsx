/* eslint react-hooks/exhaustive-deps : "off" */
import { FC, useEffect, useState } from 'react';
import styles from './UploadDocumentModal.module.scss';
import { ReactComponent as CloseIcon } from '../../assets/images/svg/x-icon.svg';
import { FileUploader } from '../FileUploader';
import { OrDivider } from './components/OrDivider';
import { OpenCameraBtn } from './components/OpenCameraBtn';
import { MultiStep } from '../MultiStep';
import { Button } from '../Button';
import { useForm, FormProvider } from 'react-hook-form';
// TODO: delete DevTool
// import { DevTool } from '@hookform/devtools';
import { LoadedDocument } from './components/LoadedDocument';
import { NameInput } from './components/NameInput';
import { DescriptionField } from './components/DescriptionField';
// import { ZoomDocumentModal } from '../ZoomDocumentModal';

interface IUploadDocumentModalProps {
  opened: boolean;
  onClose: () => void;
}

export const UploadDocumentModal: FC<IUploadDocumentModalProps> = ({
  opened,
  onClose,
}) => {
  const [step, setStep] = useState(1);
  // const [openedZoomModal, setOpenedZoomModal] = useState(false);

  const formMethods = useForm();

  // const { register, handleSubmit, setValue, control } = formMethods;
  const { register, handleSubmit, setValue } = formMethods;

  useEffect(() => {
    if (!opened) {
      setStep(1);
      formMethods.reset();
    }
  }, [opened]);

  const handleFile = (file: File) => {
    setValue('documentPhoto', file);
    console.log(file);
    setStep(2);
  };

  if (!opened) {
    return null;
  }

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const documentPhoto = formMethods.watch('documentPhoto');

  console.log(documentPhoto);

  return (
    <div className={styles.container}>
      <FormProvider {...formMethods}>
        <header className={styles.header}>
          <div className={styles.headerText}>Upload document</div>
          <button onClick={onClose} className={styles.closeBtn}>
            <CloseIcon />
          </button>
        </header>
        <main className={styles.main}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <MultiStep step={step}>
              <div>
                <FileUploader handleFile={handleFile} />
                <OrDivider />
                <OpenCameraBtn handleFile={() => {}} />
              </div>
              <div>
                <LoadedDocument
                  // clickHandler={() => setOpenedZoomModal(true)}
                  clickHandler={() => {}}
                  file={documentPhoto as File}
                  deleteHandler={() => {}}
                />
                <div className={styles.documentDescriptionWr}>
                  <NameInput />
                  <DescriptionField />
                </div>
                <Button onClick={() => setStep(3)}>Save</Button>
              </div>
            </MultiStep>
            <button type="submit">submit</button>
            <input
              type="file"
              {...register('documentPhoto')}
              // value={selectedFile}
              style={{ display: 'none' }}
            />
          </form>
        </main>
      </FormProvider>
      {/* <ZoomDocumentModal
        opened={openedZoomModal}
        onClose={() => {}}
        onDelete={() => {}}
        file={documentPhoto as File}
      /> */}

      {/* <DevTool control={control} /> */}
    </div>
  );
};
