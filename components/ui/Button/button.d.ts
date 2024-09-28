type ButtonVariant = "plain" | "text";

interface ButtonProps {
  readonly variant?: ButtonVariant;
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
