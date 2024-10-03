interface ButtonProps {
  readonly variant?: "plain" | "text";
  readonly size?: "sm" | "default" | "lg";
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
