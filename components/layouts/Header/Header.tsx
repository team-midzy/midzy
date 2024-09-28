import { DCLogo, TeamMIDZYLogo } from "@/components/common";
import HeaderMenuButton from "@/components/layouts/Header/HeaderMenuButton";
import Nav from "@/components/layouts/Header/HeaderNav";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

        <section className="flex items-center gap-6">
          <Nav />

          <div className="flex gap-4">
            <Link href="https://gall.dcinside.com/itzy" target="_blank">
              <DCLogo className="hover:fill-blue-800" />
            </Link>

            <Link href="https://x.com/ITZY_gall" target="_blank">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-black hover:text-neutral-500"
              />
            </Link>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
