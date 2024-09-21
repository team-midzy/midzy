import { Button } from "@/components/ui";
import Link from "next/link";
import React from "react";

const Pointer = () => (
  <div className="absolute -bottom-1 flex w-full justify-center">
    <div className="h-1 w-4 rounded-full bg-itzy-500 transition-all duration-300 ease-out" />
  </div>
);

const Nav = () => {
  return (
    <nav className="flex gap-6">
      <Link href="#">
        <Button variant="text">서포트</Button>
      </Link>

      <Link href="#">
        <Button variant="text">스케줄</Button>
      </Link>

      <Link href="#">
        <Button variant="text">스밍가이드</Button>
      </Link>

      <Link href="#">
        <Button variant="text">교환</Button>
      </Link>
    </nav>
  );
};

export default Nav;
