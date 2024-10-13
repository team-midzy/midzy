import SupportPhotos from "@/app/supports/[id]/components/SupportPhotos";
import { Button, Card } from "@/components";
import supports from "@/config/supports.json";
import { faBookOpen, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface SupportDetailProps {
  params: {
    id: string;
  };
}

const SupportDetail = ({ params }: SupportDetailProps) => {
  const { title, description, date, path, photos, contents, pdf } =
    supports.find(({ id }) => id === Number(params.id)) ?? {};

  return (
    <>
      <Card
        className="col-span-12 grid grid-cols-3 gap-8"
        containerTag="section"
      >
        {/* 이미지 */}
        <figure className="col-span-3 grid place-content-center lg:col-span-1">
          <Image
            src={`/images/supports/${path}/${path}_cover.webp`}
            alt={title ?? "커버"}
            quality={100}
            width={400}
            height={400}
            className="aspect-[179/264] max-w-60 rounded-xl object-cover shadow-md"
          />
        </figure>

        {/* 정보 */}
        <section className="col-span-3 flex flex-col gap-4 lg:col-span-2">
          <div>
            <time dateTime={date} className="text-sm text-neutral-400">
              {date}
            </time>
            <h2 className="my-1 text-3xl font-bold md:text-4xl">{title}</h2>
            <p className="py-2 text-neutral-600">{description}</p>
          </div>

          {contents && (
            <>
              <div>
                {contents.map(({ entry }, index) => (
                  <p
                    key={entry}
                    className="text-sm text-neutral-400"
                  >{`${index + 1}. ${entry}`}</p>
                ))}
              </div>

              <div className="mt-auto flex gap-3">
                <Button>
                  <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                  읽어보기
                </Button>

                {pdf && (
                  <Button variant="text" className="font-normal">
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      className="text-red-500"
                    />
                    <span className="ml-1.5">다운로드</span>
                  </Button>
                )}
              </div>
            </>
          )}
        </section>
      </Card>

      <SupportPhotos photos={photos} path={path} />
    </>
  );
};

export default SupportDetail;
