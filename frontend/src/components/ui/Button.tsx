import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  classname?: string;
}

export const Button = ({ onClick, classname, children }: ButtonProps) => {
  return (
    <button
      className={`bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${classname}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
