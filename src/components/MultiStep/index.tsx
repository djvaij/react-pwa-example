import { FC } from 'react';
import styles from './MultiStep.module.scss';

interface IMultiStepProps {
  children: React.ReactElement[];
  step: number;
}

export const MultiStep: FC<IMultiStepProps> = ({ children, step }) => {
  return <div className={styles.container}>{children[step - 1]}</div>;
};
