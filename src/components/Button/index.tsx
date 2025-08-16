import React from 'react';
import styles from './styles.module.scss';

type ButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};