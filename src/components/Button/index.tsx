import { FC } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface IButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button: FC<IButtonProps> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={clsx(styles.container, className)}>
      {children}
    </button>
  );
};
