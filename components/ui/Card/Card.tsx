import { twMerge } from "tailwind-merge";

const Card = ({
  children,
  className,
  containerTag: Container = "article",
}: CardProps) => {
  return (
    <Container
      className={twMerge(
        "rounded-2xl bg-white bg-opacity-50 px-5 py-4",
        className
      )}
    >
      {children}
    </Container>
  );
};

export default Card;
