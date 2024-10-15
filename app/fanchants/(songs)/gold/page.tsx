import { Button, Card } from "@/components";
import IconButton from "@/components/ui/Button/IconButton";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

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

            <IconButton
              icon={faLink}
              size="xs"
              className="h-6 w-6 bg-slate-300"
            />
          </div>

          <Button size="sm" className="mx-auto flex items-center md:mx-0">
            <span className="mr-2 text-sm font-medium">응원법 영상</span>
            <FontAwesomeIcon icon={faYoutube} />
          </Button>
        </div>
      </Card>

      <Card className="leading-8">
        <p>평온함을 rip 대혼란을 일으켜</p>
        <p>본 적 없던 lit 내 본능을 깨워</p>
        <p>Going to my head, going all out of control</p>
        <p>Cuz I shine so bright like dynamite GOLD</p>

        <br />

        <p>쉴 새 없는 하루</p>
        <p>Wait a minute</p>
        <p>문젠 없지</p>
        <p>Wait a minute</p>
        <p>좀 더 재밌는 걸 찾아갈 뿐이지</p>
        <p>What</p>

        <br />

        <p>Just keep it going up up up up up</p>
        <p>그때 너를 발견한 거야</p>
        <p>두 눈이 마주친 다음</p>

        <br />

        <p>That thing that you do</p>
        <p>That thing that you do 불현듯이 내맘이</p>
        <p>Yeah diamond in my heart 반쯤 홀린 듯</p>
        <p>What&apos;s the deal</p>

        <br />

        <p>Always in my head</p>
        <p>you a repeat of my favorite song</p>
        <p>나의 머리엔 새로운 감정들이 느껴져</p>
        <p>완전히 다른 세상이 all around</p>
        <p>Get up, let&apos;s go another round</p>

        <br />

        <p>It&apos;s like GOLD</p>
        <p>눈을 뗄 수 없이 glow</p>
        <p>Day and night we beaming blazing just like that</p>
        <p>Day and night we beaming blazing just like that</p>

        <br />

        <p>It&apos;s like GOLD</p>
        <p>거부할 수 없이 glow</p>
        <p>Day and night we beaming blazing just like that</p>
        <p>Head to toe we&apos;re G-O-L-D gold</p>

        <br />

        <p>Gold in the air, gold everywhere</p>
        <p>디딜 틈조차 없는 shadow 너라는 존재로</p>
        <p>Hey 나는 이제 저 멀리 빛나는 별보다</p>
        <p>밝게 타오르게 돼</p>

        <br />

        <p>What you want to do</p>
        <p>What you want to do 조금 위험한 느낌</p>
        <p>Yeah diamond in my heart 가빠지는 숨</p>
        <p>What&apos;s the deal</p>

        <br />

        <p>Always in my head</p>
        <p>you a repeat of my favorite song</p>
        <p>나의 심장에 낯선 감정들이 느껴져</p>
        <p>완전히 다른 세상이 all around</p>
        <p>Get up, let&apos;s go another round</p>

        <br />

        <p>It&apos;s like GOLD</p>
        <p>눈을 뗄 수 없이 glow</p>
        <p>Day and night we beaming blazing just like that</p>
        <p>Day and night we beaming blazing just like that</p>

        <br />

        <p>It&apos;s like GOLD</p>
        <p>거부할 수 없이 glow</p>
        <p>Day and night we beaming blazing just like that</p>
        <p>Head to toe we&apos;re G-O-L-D gold</p>

        <br />

        <p>
          It&apos;s like, it&apos;s like, it&apos;s like, it&apos;s like GOLD
        </p>
        <p>계속 날 이끄는 glow</p>
        <p>Day and night we beaming blazing just like that</p>
        <p>Day and night we beaming blazing just like that</p>

        <br />

        <p>It&apos;s like GOLD</p>
        <p>눈을 감아봐도 glow</p>
        <p>Day and night we beaming blazing just like that</p>
        <p>Head to toe we&apos;re G-O-L-D gold</p>
      </Card>
    </>
  );
};

export default Gold;
