import clsx from "clsx";
import Link from "next/link";

const TextLink = ({ children, className, href }: TextLinkProps) => {
  return (
    <Link
      className={clsx(
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
