import React from "react";


interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}


export const Select: React.FC<SelectProps> = ({ className, children, ...props }) => {
  return (
    <select className={`border rounded-md p-2 w-full ${className}`} {...props}>
      {children}
    </select>
  );
};


interface SelectItemProps extends React.OptionHTMLAttributes<HTMLOptionElement> {}


export const SelectItem: React.FC<SelectItemProps> = ({ children, ...props }) => {
  return <option {...props}>{children}</option>;
};
