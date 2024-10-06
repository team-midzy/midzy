import { TextLink } from "@/components/ui";
import menus from "@/config/menus.json";

const Pointer = () => (
  <div className="absolute -bottom-1 flex w-full justify-center">
    <div className="h-1 w-4 rounded-full bg-itzy-500 transition-all duration-300 ease-out" />
  </div>
);

const Nav = () => {
  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-6">
        {menus.map(
          ({ id, name, path, isActive }) =>
            isActive && (
              <li key={id}>
                <TextLink href={path}>{name}</TextLink>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default Nav;
