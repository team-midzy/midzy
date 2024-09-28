"use client";

import { Button } from "@/components/ui";
import useNavDrawerStore from "@/stores/useNavDrawerStore";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderMenuButton = () => {
  const { toggleDrawer } = useNavDrawerStore();

  return (
    <Button variant="text" className="sm:hidden" onClick={toggleDrawer}>
      <FontAwesomeIcon icon={faBars} size="lg" />
    </Button>
  );
};

export default HeaderMenuButton;
