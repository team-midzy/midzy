"use client";

import { Card } from "@/components";
import IconButton from "@/components/ui/Button/IconButton";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import Image from "next/image";
import { useState } from "react";
import { twJoin } from "tailwind-merge";

interface SupportPhotosProps {
  path?: string;
  photos?: number;
}

const SupportPhotos = ({ path, photos }: SupportPhotosProps) => {
  const [imageModal, setImageModal] = useState<boolean>(false);
  const [viewImageIndex, setViewImageIndex] = useState<number | null>(null);

  const openImageModal = (index: number): void => {
    document.body.style.overflow = "hidden";
    setViewImageIndex(index);
    setImageModal(true);
  };

  const closeImageModal = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    event.stopPropagation();
    document.body.style.overflow = "auto";
    setViewImageIndex(null);
    setImageModal(false);
  };

  return (
    <>
      <Card className="col-span-12" containerTag="section">
        <h5 className="col-span-4 text-lg font-bold">사진 📷</h5>

        {/* 사진 */}
        <section className="mt-2 grid grid-cols-12 gap-1.5">
          {[...Array(photos)].map((_, index) => (
            <Image
              key={`photo-${index}`}
              src={`/images/supports/${path}/photos/${path}_photo_${String(index).padStart(3, "0")}.webp`}
              alt={`Photo${index + 1}`}
              quality={90}
              width={400}
              height={400}
              className="col-span-4 aspect-square cursor-pointer rounded-md object-cover transition-all hover:scale-[1.03] md:col-span-3 xl:col-span-2"
              onClick={() => openImageModal(index)}
            />
          ))}
        </section>
      </Card>

      <article
        className={twJoin(
          "fixed left-0 top-0 z-[200708] flex h-screen w-full items-center justify-center bg-slate-50 bg-opacity-10 px-4 py-20 backdrop-blur-sm transition-all duration-200 ease-in-out",
          imageModal && "visible opacity-100",
          !imageModal && "invisible opacity-0"
        )}
        onClick={closeImageModal}
      >
        <IconButton
          icon={faClose}
          className="absolute right-5 top-5"
          size="lg"
        />

        <div
          className={twJoin(
            "flex h-full w-full items-center justify-center transition-all duration-200 ease-in-out",
            !imageModal && "translate-y-2"
          )}
        >
          {typeof viewImageIndex === "number" && (
            <Image
              src={`/images/supports/${path}/photos/${path}_photo_${String(viewImageIndex).padStart(3, "0")}.webp`}
              alt="Detail"
              quality={100}
              width={800}
              height={800}
              className={"max-h-full w-auto rounded-xl shadow-lg"}
              onClick={(event) => event.stopPropagation()}
            />
          )}
        </div>
      </article>
    </>
  );
};

export default SupportPhotos;
