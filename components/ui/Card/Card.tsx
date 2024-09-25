import clsx from "clsx";

const Card = ({ children, className }: CardProps) => {
  return (
    <section
      className={clsx("rounded-2xl bg-white bg-opacity-50 p-5", className)}
    >
      {children}
    </section>
  );
};

export default Card;
