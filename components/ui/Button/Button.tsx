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
      "rounded-full px-2 font-semibold transition duration-300 ease-in-out",
      variant === "plain" && "bg-primary-500",
      variant === "text" && "hover:text-itzy-500",
      size === "sm" && "h-5",
      size === "default" && "h-6",
      size === "lg" && "h-7",
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
