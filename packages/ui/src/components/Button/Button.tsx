import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props}>
      <div>{children}</div>
    </button>
  );
};

export { Button };
export type { ButtonProps };
