import Link from "next/link";
import { twMerge } from "tailwind-merge";

const TextLink = ({
  children,
  className,
  href,
  target = "_self",
}: TextLinkProps) => {
  return (
    <Link
      className={twMerge(
        "font-semibold transition-all duration-300 ease-in-out hover:text-primary-500",
        className
      )}
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
};

export default TextLink;
