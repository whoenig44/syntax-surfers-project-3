import React from "react";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}


export const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={`bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};


