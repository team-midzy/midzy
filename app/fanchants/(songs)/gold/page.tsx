import LinkCopy from "@/app/fanchants/(songs)/components/LinkCopy";
import { Button, Card } from "@/components";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

interface ChantProps {
  children: React.ReactNode;
}

const Chant = ({ children }: ChantProps) => (
  <strong className="text-itzy-500">{children}</strong>
);
const Midzy = ({ children }: ChantProps) => (
  <strong className="text-blue-500">{children}</strong>
);

const Gold = () => {
  return (
    <>
      <Card className="grid grid-cols-[auto_1fr] place-content-center gap-6">
        <Image
          src="/images/photos/gold.webp"
          alt="GOLD"
          width={800}
          height={800}
          className="col-span-2 mx-auto aspect-square w-full max-w-56 rounded-xl shadow-md md:col-span-1"
        />

        <div className="col-span-2 h-full w-full p-3 md:col-span-1">
          <div className="mb-4 flex items-center justify-center gap-2 md:justify-start">
            <h2 className="text-3xl font-bold md:text-4xl">GOLD</h2>

            <LinkCopy />
          </div>

          <Link href="https://youtu.be/1TWhd-OPObo" target="_blank">
            <Button size="sm" className="mx-auto flex items-center md:mx-0">
              <span className="mr-2 text-sm font-medium">응원법 영상</span>
              <FontAwesomeIcon icon={faYoutube} />
            </Button>
          </Link>
        </div>
      </Card>

      <Card className="leading-8">
        <p>
          <Midzy>(함성)</Midzy>
        </p>
        <p>
          평온함을 rip 대혼란을 일으켜 <Midzy>(골!)</Midzy>
        </p>
        <p>
          본 적 없던 lit 내 본능을 깨워 <Midzy>(드!)</Midzy>
        </p>
        <p>Going to my head, going all out of control</p>
        <p>Cuz I shine so bright like dynamite GOLD</p>
        <p>
          <Midzy>있! 지! 믿! 지!</Midzy>
        </p>
        <p>
          <Midzy>(함성)</Midzy>
        </p>
        <p>
          Yeah <Chant>ITZY</Chant>
        </p>

        <br />

        <p>쉴 새 없는 하루</p>
        <p>
          <Chant>Wait a minute</Chant>
        </p>
        <p>문젠 없지</p>
        <p>
          <Chant>Wait a minute</Chant>
        </p>
        <p>좀 더 재밌는 걸 찾아갈 뿐이지</p>
        <p>What</p>
        <p>
          Just keep it going up <Chant>up up up up</Chant>
        </p>
        <p>그때 너를 발견한 거야</p>
        <p>두 눈이 마주친 다음</p>
        <p>
          <Midzy>(hey~)</Midzy>
        </p>

        <br />

        <p>That thing that you do</p>
        <p>That thing that you do 불현듯이 내맘이</p>
        <p>
          <Midzy>(hey~)</Midzy>
        </p>
        <p>Yeah diamond in my heart 반쯤 홀린 듯</p>
        <p>
          <Chant>What&apos;s the deal</Chant>
        </p>

        <br />

        <p>
          <Midzy>(함성)</Midzy>
        </p>
        <p>
          Always in my head you a repeat of my <Chant>favorite song</Chant>
        </p>
        <p>
          나의 머리엔 새로운 감정들이 <Chant>느껴져</Chant>
        </p>
        <p>완전히 다른 세상이 all around</p>
        <p>Get up, let&apos;s go another round</p>

        <br />

        <p>
          It&apos;s like GOLD <Midzy>(G! O! L! D!)</Midzy>
        </p>
        <p>눈을 뗄 수 없이 glow</p>
        <p>
          <Chant>Day and night we beaming blazing just like that</Chant>
        </p>
        <p>
          <Chant>Day and night we beaming blazing just like that</Chant>
        </p>

        <br />

        <p>
          It&apos;s like GOLD <Midzy>(G! O! L! D!)</Midzy>
        </p>
        <p>거부할 수 없이 glow</p>
        <p>
          <Chant>Day and night we beaming blazing just like that</Chant>
        </p>
        <p>
          Head to toe we&apos;re G-O-L-D <Chant>gold</Chant>
        </p>

        <br />

        <p>Gold in the air, gold everywhere</p>
        <p>디딜 틈조차 없는 shadow 너라는 존재로</p>
        <p>Hey 나는 이제 저 멀리 빛나는 별보다 밝게 타오르게 돼</p>

        <br />

        <p>
          <Midzy>(hey~)</Midzy>
        </p>
        <p>What you want to do</p>
        <p>What you want to do 조금 위험한 느낌</p>
        <p>
          <Midzy>(hey~)</Midzy>
        </p>
        <p>Yeah diamond in my heart 가빠지는 숨</p>
        <p>
          <Chant>What&apos;s the deal</Chant>
        </p>

        <br />

        <p>
          <Midzy>(함성)</Midzy>
        </p>
        <p>
          Always in my head you a repeat of my <Chant>favorite song</Chant>
        </p>
        <p>
          나의 심장에 낯선 감정들이 <Chant>느껴져</Chant>
        </p>
        <p>완전히 다른 세상이 all around</p>
        <p>Get up, let&apos;s go another round</p>

        <br />

        <p>
          It&apos;s like GOLD <Midzy>(G! O! L! D!)</Midzy>
        </p>
        <p>눈을 뗄 수 없이 glow</p>
        <p>
          <Chant>Day and night we beaming blazing just like that</Chant>
        </p>
        <p>
          <Chant>Day and night we beaming blazing just like that</Chant>
        </p>

        <br />

        <p>
          It&apos;s like GOLD <Midzy>(G! O! L! D!)</Midzy>
        </p>
        <p>거부할 수 없이 glow</p>
        <p>
          <Chant>Day and night we beaming blazing just like that</Chant>
        </p>
        <p>Head to toe we&apos;re G-O-L-D gold</p>

        <br />

        <p>
          <Midzy>(황예지 최지수 신류진 이채령 신유나)</Midzy>
        </p>
        <p>
          <Midzy>(영원히 빛나줘 Just like that) (함성)</Midzy>
        </p>

        <br />

        <p>
          It&apos;s like, it&apos;s like, it&apos;s like, it&apos;s like GOLD{" "}
          <Midzy>(G! O! L! D!)</Midzy>
        </p>
        <p>계속 날 이끄는 glow</p>
        <p>
          <Chant>Day and night we beaming blazing just like that</Chant>
        </p>
        <p>
          <Chant>Day and night we beaming blazing just like that</Chant>
        </p>

        <br />

        <p>
          It&apos;s like GOLD <Midzy>(G! O! L! D!)</Midzy>
        </p>
        <p>눈을 감아봐도 glow</p>
        <p>
          Day and night we beaming blazing <Chant>just like that</Chant>
        </p>
        <p>
          Head to toe we&apos;re G-O-L-D <Chant>gold</Chant>
        </p>
        <p>
          <Midzy>(함성)</Midzy>
        </p>
      </Card>
    </>
  );
};

export default Gold;
