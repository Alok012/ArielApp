import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width?: string;
  height?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'bg-gradient-to-r from-[#8d23c7] to-[#774cf9] text-white transition rounded-2xl',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
