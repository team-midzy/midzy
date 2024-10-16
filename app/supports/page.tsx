import { Card, TextLink } from "@/components";
import supports from "@/config/supports.json";
import Image from "next/image";
import Link from "next/link";

const Supports = () => {
  // const latestSupport: MessageBook = supports[0] as MessageBook;
  // const prevSupport: MessageBook[] = supports.slice(1) as MessageBook[];

  return (
    <>
      <Card className="col-span-12 grid grid-cols-10 gap-4">
        <h5 className="col-span-10 text-xl font-bold">진행 중🔥</h5>

        <Image
          src="/images/supports/now/lunchbox.webp"
          alt="lunchbox"
          quality={100}
          width={1200}
          height={1400}
          className="col-span-10 mx-auto max-h-96 w-auto rounded-lg shadow-md lg:col-span-4"
        />

        <section className="col-span-10 lg:col-span-6">
          <h4 className="pb-6 pt-1 text-2xl font-bold">
            팬미팅 &lt;있지 믿지, 날자! &quot;믿지의 세포들&quot;&gt; 도시락
            서포트
          </h4>

          <div className="flex flex-col gap-4">
            <div>
              <h6 className="font-semibold">서포트 설명</h6>
              <p className="text-neutral-800">
                ITZY의 3번째 팬미팅 &lt;있지 믿지, 날자! &quot;믿지의
                세포들&quot;&gt; 현장에서 멤버들에게 직접 전달되는 도시락
                서포트에요💙
              </p>
            </div>

            <div>
              <h6 className="font-semibold">진행 기간</h6>
              <p className="text-neutral-800">
                2024.10.13(일) - 2024.11.02(토)
              </p>
            </div>

            <div>
              <h6 className="font-semibold">모금 목표액 (달성완료)</h6>
              <p className="text-neutral-800">1,000,000 원</p>
            </div>

            <p className="text-sm text-neutral-400">
              모금 현황 및 모금액 사용 내역은 ITZY 갤러리와 X 계정 @ITZY_gall을
              통해 공지되며, 서포트 종료 후 잔액은 ITZY 갤러리 서포트 팀이
              진행하는 다음 서포트로 이관됩니다.
            </p>
          </div>
        </section>
      </Card>

      {/* <Card
        className="col-span-12 grid grid-cols-10 gap-x-6 gap-y-3"
        containerTag="section"
      >
        <figure className="col-span-10 grid h-full max-h-[430px] place-content-center md:col-span-6">
          <Image
            src={`/images/supports/${latestSupport.path}/photos/${latestSupport.path}_photo_000.webp`}
            alt={latestSupport.title}
            quality={100}
            width={640}
            height={640}
            className="rounded-lg shadow-md"
          />
        </figure>

        <section className="col-span-10 md:col-span-4">
          <time
            dateTime={latestSupport.date}
            className="text-sm text-neutral-400"
          >
            {latestSupport.date}
          </time>

          <h4 className="py-1 text-2xl font-bold">{latestSupport.title}</h4>
          <p className="py-2 text-neutral-600">{latestSupport.description}</p>

          <TextLink
            href={`supports/${latestSupport.id}`}
            className="font-medium"
          >
            보러가기 ✨
          </TextLink>
        </section>
      </Card> */}

      <Card
        className="col-span-12 grid grid-cols-4 gap-4"
        containerTag="section"
      >
        <h6 className="col-span-4 font-bold">역대 서포트 💝</h6>

        {supports.map(({ id, path, title, description, date }) => (
          <article key={id} className="col-span-2 text-center lg:col-span-1">
            <Link href={`supports/${id}`}>
              <figure className="mx-auto grid aspect-square max-h-60 max-w-60 place-content-center overflow-hidden rounded-lg transition-all duration-200 ease-out hover:scale-105">
                <Image
                  src={`/images/supports/${path}/${path}_cover.webp`}
                  alt={title}
                  quality={90}
                  width={240}
                  height={240}
                  className="max-h-full max-w-full cursor-pointer rounded-lg"
                />
              </figure>
            </Link>

            <section className="py-4">
              <Link href={`supports/${id}`}>
                <p className="cursor-pointer text-sm font-semibold text-neutral-600 transition-all duration-200 ease-out hover:text-primary-500">
                  {description}
                </p>
              </Link>
              <Link href={`supports/${id}`}>
                <time
                  dateTime={date}
                  className="cursor-pointer text-xs text-neutral-400"
                >
                  {date}
                </time>
              </Link>
            </section>
          </article>
        ))}
      </Card>
    </>
  );
};

export default Supports;
