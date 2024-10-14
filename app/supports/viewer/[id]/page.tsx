"use client";

import { List, ListItem } from "@/components";
import IconButton from "@/components/ui/Button/IconButton";
import supports from "@/config/supports.json";
import { faListUl } from "@fortawesome/free-solid-svg-icons/faListUl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { twJoin } from "tailwind-merge";

export const runtime = "edge";

interface MessageBookViewerProps {
  params: {
    id: string;
  };
}

const MessageBookViewr = ({ params }: MessageBookViewerProps) => {
  const messageBook =
    supports.find(({ id }) => id === Number(params.id)) ?? ({} as MessageBook);
  const { title, pages, path, contents } = messageBook;

  const titleContent: Contents = {
    entry: title,
    page: 0,
    index: 0,
    hidden: false,
  };

  const [isContents, setIsContents] = useState<boolean>(false);
  const toggleContents = () => {
    setIsContents(!isContents);
  };
  const closeContents = () => {
    setIsContents(false);
  };

  const router = useRouter();
  const moveIndex = (contentsIndex: number): void => {
    router.replace(`#${contentsIndex}`);
    closeContents();
  };

  return (
    <>
      {[...Array(pages)].map((_, index) => (
        <Image
          key={`message-book-${index}`}
          alt={`Message Book ${index}`}
          id={String(index)}
          src={`/images/supports/${path}/message-book/${path}_${String(index).padStart(3, "0")}.webp`}
          width={1280}
          height={1806}
          className="col-span-12 mx-auto aspect-[640/903] max-h-[calc(100vh-92px)] w-auto rounded-lg object-cover shadow-lg xl:col-span-6"
        />
      ))}

      {contents && (
        <div
          className={twJoin(
            "fixed bottom-4 right-5 flex h-screen flex-col items-end justify-end gap-2",
            isContents && "z-[200708]"
          )}
        >
          <List
            className={twJoin(
              "rounded-md bg-white bg-opacity-50 p-1 shadow-md backdrop-blur-md transition-all duration-200 ease-out",
              !isContents && "invisible translate-y-2 opacity-0"
            )}
          >
            {[titleContent, ...contents].map(
              (content) =>
                !content.hidden && (
                  <ListItem
                    key={content.index}
                    className="cursor-pointer font-medium hover:bg-slate-300 hover:bg-opacity-20 hover:text-primary-500"
                    onClick={() => moveIndex(content.index as number)}
                  >
                    {content.entry}
                  </ListItem>
                )
            )}
          </List>

          <div
            className={twJoin(
              "fixed left-0 top-0 -z-10 h-screen w-screen",
              !isContents && "hidden"
            )}
            onClick={closeContents}
          />

          <IconButton
            icon={faListUl}
            size="lg"
            className="aspect-square h-12 w-12 rounded-full bg-white bg-opacity-50 shadow-md backdrop-blur-md"
            onClick={toggleContents}
          />
        </div>
      )}
    </>
  );
};

export default MessageBookViewr;
