import styles from './NameInput.module.scss';
import { useFormContext } from 'react-hook-form';

export const NameInput = () => {
  const { register } = useFormContext();
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="documentName">
        Name
      </label>
      <input
        className={styles.input}
        type="text"
        {...register('documentName')}
        id="documentName"
      />
    </div>
  );
};
