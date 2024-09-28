import { TextLink } from "@/components/ui";

const Pointer = () => (
  <div className="absolute -bottom-1 flex w-full justify-center">
    <div className="h-1 w-4 rounded-full bg-itzy-500 transition-all duration-300 ease-out" />
  </div>
);

const Nav = () => {
  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-6">
        <li>
          <TextLink href="#">서포트</TextLink>
        </li>

        <li>
          <TextLink href="#">스케줄</TextLink>
        </li>

        <li>
          <TextLink href="#">스밍가이드</TextLink>
        </li>

        <li>
          <TextLink href="#">교환</TextLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
