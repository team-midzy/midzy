import { TeamMIDZYLogo } from "@/components/common";
import HeaderMenuButton from "@/components/layouts/Header/HeaderMenuButton";
import HeaderNav from "@/components/layouts/Header/HeaderNav";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-[190212] h-14 w-full bg-slate-50 bg-opacity-30 backdrop-blur-md">
      <div className="container flex h-full items-center justify-between">
        <div className="flex items-center gap-5">
          <HeaderMenuButton />

          <Link href="/">
            <TeamMIDZYLogo className="w-20" />
          </Link>
        </div>

        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
