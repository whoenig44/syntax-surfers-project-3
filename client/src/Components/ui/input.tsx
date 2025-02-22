import React from "react";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}


export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`border rounded-md p-2 w-full ${className}`}
      {...props}
    />
  );
};
