import { TeamMIDZYLogo } from '@/components/common';
import Nav from '@/components/layouts/Nav/Nav';

const Header = () => {
  return (
    <header className="sticky top-0 z-[190212] h-14 w-full bg-white bg-opacity-25">
      <div className="container flex h-full items-center justify-between">
        <div className="flex">
          <TeamMIDZYLogo />
        </div>

        <Nav />
      </div>
    </header>
  );
};

export default Header;
