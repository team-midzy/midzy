import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type IconButtonProps = Omit<ButtonProps, "variant" | "children"> & {
  icon: IconProp;
};
