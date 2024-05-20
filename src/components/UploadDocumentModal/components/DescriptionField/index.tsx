import { useEffect, useState } from 'react';
import styles from './DescriptionField.module.scss';
import { useFormContext } from 'react-hook-form';

const maxLength = 100;

export const DescriptionField = () => {
  const { register, watch } = useFormContext();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(watch('documentDescription').length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('documentDescription')]);

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="documentDescription">
        Description
      </label>
      <div className={styles.textareaWrapper}>
        <textarea
          rows={3}
          maxLength={maxLength}
          className={styles.textarea}
          {...register('documentDescription')}
          id="documentDescription"
        />
        <div className={styles.count}>
          {count}/{maxLength}
        </div>
      </div>
    </div>
  );
};
