import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return <button type="button" onClick={props.onClick}
                 className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button
    {props.label}
  </button>
};

export default Button;
