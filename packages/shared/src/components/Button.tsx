import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick,
  variant = 'primary' 
}) => {
  const baseStyles = "px-6 py-3 rounded-xl transition-all duration-300 shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff] active:shadow-[inset_5px_5px_10px_#b8b9be,inset_-5px_-5px_10px_#ffffff]";
  const variantStyles = variant === 'primary' 
    ? "bg-blue-50 text-blue-600 hover:bg-blue-100" 
    : "bg-gray-50 text-gray-600 hover:bg-gray-100";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles}`}
    >
      {children}
    </button>
  );
};

export default Button;