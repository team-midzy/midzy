import { twMerge } from "tailwind-merge";

const Button = ({
  variant = "plain",
  size = "default",
  children,
  className,
  onClick,
}: ButtonProps) => (
  <button
    type="button"
    className={twMerge(
      "rounded-full font-semibold transition-all duration-300 ease-in-out",
      variant === "plain" && "bg-primary-500 hover:bg-primary-400",
      variant === "text" && "hover:text-primary-500",
      size === "xs" && "h-6 px-2",
      size === "sm" && "h-7 px-2",
      size === "default" && "h-8 px-3",
      size === "lg" && "h-9 px-4",
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
