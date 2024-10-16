"use client";

import IconButton from "@/components/ui/Button/IconButton";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import React from "react";

const LinkCopy = () => {
  const linkCopyHandler = async () => {
    try {
      const currentUrl = window.location.href;

      await navigator.clipboard.writeText(currentUrl);

      alert("응원법 링크가 복사되었습니다😆");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <IconButton
      icon={faLink}
      size="xs"
      className="h-6 w-6 bg-slate-300"
      onClick={linkCopyHandler}
    />
  );
};

export default LinkCopy;
