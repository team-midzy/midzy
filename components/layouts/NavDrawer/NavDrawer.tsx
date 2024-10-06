"use client";

import { List, ListItem, TextLink } from "@/components/ui";
import menus from "@/config/menus.json";
import useNavDrawerStore from "@/stores/useNavDrawerStore";
import { useEffect } from "react";
import { twJoin } from "tailwind-merge";

const Drawer = () => {
  const { isOpen, closeDrawer } = useNavDrawerStore();

  // 브레이크포인트 640 이상 isOpen값 false
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) closeDrawer();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [closeDrawer]);

  return (
    <>
      <div
        className={twJoin(
          "fixed inset-0 z-40 bg-slate-50 bg-opacity-10 backdrop-blur-sm",
          !isOpen && "hidden"
        )}
        onClick={closeDrawer}
      />

      <div
        className={twJoin(
          "fixed left-0 top-14 z-50 h-[calc(100%-56px)] w-64 transform bg-slate-50 bg-opacity-30 p-2 shadow-xl backdrop-blur-md transition-transform duration-300 ease-in-out",
          isOpen && "sm:-translate-x-full",
          !isOpen && "-translate-x-full"
        )}
      >
        <List>
          {menus.map(
            ({ id, name, path, isActive }) =>
              isActive && (
                <ListItem
                  key={id}
                  className="rounded-lg bg-transparent p-0 hover:bg-slate-300 hover:bg-opacity-20"
                  onClick={closeDrawer}
                >
                  <TextLink href={path} className="w-full px-3 py-2">
                    {name}
                  </TextLink>
                </ListItem>
              )
          )}
        </List>
      </div>
    </>
  );
};

export default Drawer;
