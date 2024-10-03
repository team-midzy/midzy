import { IconButtonProps } from "@/components/ui/Button/iconbutton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

const IconButton = ({
  icon,
  size = "default",
  className,
  onClick,
}: IconButtonProps) => (
  <button
    type="button"
    className={twMerge(
      "rounded-full text-center transition duration-300 ease-in-out hover:text-itzy-500",
      size === "sm" && "h-5 w-5 leading-5",
      size === "default" && "h-6 w-6",
      size === "lg" && "h-7 w-7",
      className
    )}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} size={size === "default" ? undefined : size} />
  </button>
);

export default IconButton;
