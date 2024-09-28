import Link from "next/link";
import { twMerge } from "tailwind-merge";

const TextLink = ({ children, className, href }: TextLinkProps) => {
  return (
    <Link
      className={twMerge(
        "font-semibold transition duration-300 ease-in-out hover:text-itzy-500",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default TextLink;
