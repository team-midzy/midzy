interface TextLinkProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly href: string;
  readonly target?: "_blank" | "_parent" | "_self" | "_top";
}
