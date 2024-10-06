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
        "font-semibold transition duration-300 ease-in-out hover:text-itzy-500",
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
