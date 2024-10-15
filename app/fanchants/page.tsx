import { Card } from "@/components";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Fanchants = () => {
  return (
    <>
      <Link
        href="/fanchants/gold"
        className="col-span-6 sm:col-span-4 lg:col-span-3"
      >
        <Card className="cursor-pointer p-3 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:text-gold-500 sm:p-4">
          <div className="relative">
            <Image
              src="/images/photos/gold.webp"
              alt="GOLD"
              width={800}
              height={800}
              className="aspect-square w-full max-w-96 rounded-xl shadow-md"
            />

            <figure className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold-500 sm:bottom-3 sm:right-3 sm:h-9 sm:w-9">
              <FontAwesomeIcon
                icon={faPlay}
                size="xs"
                className="ml-0.5 text-black"
              />
            </figure>
          </div>

          <h5 className="pb-1 pt-4 text-center text-xl font-bold md:text-2xl">
            GOLD
          </h5>
        </Card>
      </Link>
    </>
  );
};

export default Fanchants;
