import clsx from "clsx";

const Button = ({ variant = "plain", children, className }: ButtonProps) => {
  const commonStyle = "transition duration-300 ease-in-out font-semibold";
  const plainStyle = "";
  const textStyle = "hover:text-itzy-500";

  const variantStyles: Record<ButtonVariant, string> = {
    plain: plainStyle,
    text: textStyle,
  };

  return (
    <button className={clsx(commonStyle, variantStyles[variant], className)}>
      {children}
    </button>
  );
};

export default Button;