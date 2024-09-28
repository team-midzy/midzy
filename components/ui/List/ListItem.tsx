import { twMerge } from "tailwind-merge";

const ListItem = ({ children, className }: ListItemProps) => {
  return (
    <li
      className={twMerge(
        "flex items-center gap-3 rounded-lg bg-white bg-opacity-40 px-3 py-2",
        className
      )}
    >
      {children}
    </li>
  );
};

export default ListItem;
