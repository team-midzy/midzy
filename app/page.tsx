import OfficialChannels from "@/app/components/OfficialChannels";
import { Card, ITZY, WeeklyScheduler } from "@/components";
import {
  faApple,
  faFacebookF,
  faInstagram,
  faSnapchat,
  faSpotify,
  faTiktok,
  faWeibo,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCertificate, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Home = () => {
  const officialChannels = [
    {
      id: 0,
      title: "한국 / 글로벌",
      channels: [
        {
          name: "ITZY Official",
          link: "https://itzy.jype.com/",
          IconComponent: (
            <ITZY isDark size={16} className="ml-[1px] mt-[1px]" />
          ),
          twBgClassName: "bg-black",
        },
        {
          name: "FANS",
          link: "https://www.jypfans.com/",
          IconComponent: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 117 99"
              className="svg-inline--fa fa-sm"
            >
              <g fill="currentColor">
                <path d="M51.96,99H0V0h51.96v25.06h-19.7v49.24h19.7v24.71Z" />
                <path d="M65.97,0h51.03c0,33,0,66,0,99-17.01,0-34.02,0-51.03,0v-25.06h19.7V24.71h-19.7V0Z" />
              </g>
            </svg>
          ),
          twBgClassName: "bg-black",
        },
        {
          name: "X",
          link: "https://x.com/ITZYOfficial",
          IconComponent: <FontAwesomeIcon icon={faXTwitter} />,
          twBgClassName: "bg-black",
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/itzy.all.in.us/",
          IconComponent: <FontAwesomeIcon icon={faInstagram} size="lg" />,
          twBgClassName:
            "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-800",
        },
        {
          name: "YouTube",
          link: "https://www.youtube.com/@ITZY",
          IconComponent: <FontAwesomeIcon icon={faYoutube} />,
          twBgClassName: "bg-red-600",
        },
        {
          name: "TikTok",
          link: "https://www.tiktok.com/@itzyofficial",
          IconComponent: <FontAwesomeIcon icon={faTiktok} />,
          twBgClassName: "bg-black",
        },
        {
          name: "Facebook",
          link: "https://www.facebook.com/OfficialItzy",
          IconComponent: <FontAwesomeIcon icon={faFacebookF} />,
          twBgClassName: "bg-blue-500",
        },
        {
          name: "Snapchat",
          link: "https://www.snapchat.com/add/official-itzy",
          IconComponent: <FontAwesomeIcon icon={faSnapchat} />,
          twBgClassName: "bg-yellow-300",
        },
        {
          name: "Spotify",
          link: "https://open.spotify.com/artist/2KC9Qb60EaY0kW4eH68vr3",
          IconComponent: <FontAwesomeIcon icon={faSpotify} />,
          twBgClassName: "bg-green-500",
        },
        {
          name: "Apple Music",
          link: "https://music.apple.com/us/artist/itzy/1451964345",
          IconComponent: (
            <FontAwesomeIcon
              icon={faApple}
              size="lg"
              className="mb-[1.5px] mr-[0.5px]"
            />
          ),
          twBgClassName: "bg-rose-500",
        },
        {
          name: "Weibo",
          link: "https://m.weibo.cn/u/7462077750",
          IconComponent: <FontAwesomeIcon icon={faWeibo} />,
          twBgClassName: "bg-orange-600",
        },
      ],
    },
    {
      id: 1,
      title: "일본",
      channels: [
        {
          name: "ITZY Japan Official",
          link: "https://www.itzyjapan.com/",
          IconComponent: (
            <ITZY isDark size={16} className="ml-[1px] mt-[1px]" />
          ),
          twBgClassName: "bg-black",
        },
        {
          name: "MIDZY Japan",
          link: "https://midzyjapan.com/",
          IconComponent: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 173.14 102.71"
              className="svg-inline--fa fa-sm mt-[1px]"
            >
              <g fill="currentColor">
                <path d="M.06,74.73c-.02-.46-.06-.91-.06-1.37,0-18.81,0-37.63,0-56.44,0-.46.04-.91.06-1.37h7.16c.05.44.08.8.14,1.33,3.01-1.4,6.18-1.5,9.38-1.26,3.34.25,6.11,1.72,8.46,4.15.19-.16.36-.28.5-.42,2.32-2.37,5.16-3.6,8.45-3.77,2.29-.12,4.6-.21,6.81.53,5.2,1.74,8.2,5.46,9.29,10.76.19.93.25,1.9.26,2.85.02,14.63.01,29.25.01,43.88v1.05h-7.38v-1.49c0-13.63,0-27.25-.02-40.88,0-1.15-.1-2.35-.42-3.45-.96-3.31-4.09-5.4-7.39-5.09-3.17.3-5.94,3.12-6.3,6.46-.08.7-.11,1.41-.11,2.12,0,13.63,0,27.25,0,40.88,0,.45,0,.91,0,1.44h-7.38c0-.44,0-.88,0-1.32,0-14,.01-28,0-42,0-3.2-1.46-5.64-4.35-7-3.99-1.88-8.73.75-9.62,5.25-.15.77-.22,1.57-.22,2.36-.01,13.75,0,27.5,0,41.25,0,.46,0,.91,0,1.55H.06Z" />
                <path
                  fill="#f343aa"
                  d="M67.51,0v9.03c-2.58,2.57-5.08,5.06-7.75,7.72V0h7.75Z"
                />
                <path d="M59.89,27.53c2.57-2.57,5.04-5.02,7.45-7.43v54.56h-7.45V27.53Z" />
                <path d="M97.81.27c2.36,0,4.72,0,7.08.01.02.33.07.66.07.99,0,24.13,0,48.25,0,72.38v.98h-7.17c-.03-.48-.05-1-.09-1.6-2.34,1.18-4.73,1.73-7.27,1.71-7.41-.08-13.66-6.17-13.71-13.57-.07-10.83-.06-21.67,0-32.5.04-7.48,6.3-13.59,13.77-13.63,2.5-.01,4.86.48,7.26,1.75v-1.14c0-4.71,0-9.42,0-14.13,0-.41.04-.83.05-1.24ZM97.76,44.83c0-4.83,0-9.66,0-14.49,0-.54-.02-1.09-.13-1.61-.77-3.61-3.99-5.95-7.6-5.55-3.52.39-6.12,3.35-6.14,7.01-.01,2.83,0,5.66,0,8.5,0,6.91.01,13.83,0,20.74,0,2.47.92,4.47,2.91,5.9,2.22,1.6,4.64,1.79,7.07.59,2.47-1.22,3.84-3.31,3.88-6.09.06-5,.02-10,.02-14.99Z" />
                <path d="M130.29,23.47h-19.52v-7.34h27.13c0,1-.09,2.04.02,3.06.3,2.96-.56,5.57-1.84,8.22-6.24,12.98-12.35,26.03-18.51,39.05-.1.22-.19.45-.33.8h31.83c-.48,2.53-.93,4.93-1.4,7.4h-38.04c0-1.08.09-2.2-.02-3.3-.28-2.83.56-5.32,1.78-7.86,6.25-13.02,12.38-26.11,18.54-39.17.1-.22.19-.45.36-.85Z" />
                <path d="M142.17,16.11h7.06c2.79,12.01,5.6,24.09,8.41,36.16.09,0,.17,0,.26.01,2.77-12.06,5.54-24.12,8.31-36.18h6.93c-7.01,28.91-14,57.73-21,86.61h-6.48c.4-1.79.78-3.56,1.19-5.33,2.32-10.17,4.65-20.34,6.96-30.51.11-.5.11-1.07,0-1.57-3.8-16.01-7.62-32.02-11.43-48.03-.09-.36-.12-.73-.2-1.17Z" />
              </g>
            </svg>
          ),
          twBgClassName: "bg-black",
        },
        {
          name: "X Japan",
          link: "https://x.com/JYPEITZY_JP",
          IconComponent: <FontAwesomeIcon icon={faXTwitter} />,
          twBgClassName: "bg-black",
        },
        {
          name: "Instagram Japan",
          link: "https://www.instagram.com/itzyofficial_jp/",
          IconComponent: <FontAwesomeIcon icon={faInstagram} size="lg" />,
          twBgClassName:
            "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-800",
        },
        {
          name: "YouTube Japan",
          link: "https://www.youtube.com/@itzyjapan_official",
          IconComponent: <FontAwesomeIcon icon={faYoutube} />,
          twBgClassName: "bg-red-600",
        },
        {
          name: "TikTok Japan",
          link: "https://www.tiktok.com/@itzyofficial_jp",
          IconComponent: <FontAwesomeIcon icon={faTiktok} />,
          twBgClassName: "bg-black",
        },
      ],
    },
    {
      id: 2,
      title: "멤버별 인스타그램",
      channels: [
        {
          name: "yezyizhere",
          link: "https://www.instagram.com/yezyizhere/",
          IconComponent: (
            <Image
              src="/images/itzy/yeji.webp"
              alt="yezyizhere"
              width={32}
              height={32}
            />
          ),
        },
        {
          name: "lia_loves___",
          link: "https://www.instagram.com/lia_loves___/",
          IconComponent: (
            <Image
              src="/images/itzy/lia.webp"
              alt="lia_loves___"
              width={32}
              height={32}
            />
          ),
        },
        {
          name: "iamfinethankyouandryu",
          link: "https://www.instagram.com/iamfinethankyouandryu/",
          IconComponent: (
            <Image
              src="/images/itzy/ryujin.webp"
              alt="iamfinethankyouandryu"
              width={32}
              height={32}
            />
          ),
        },
        {
          name: "chaerrry0",
          link: "https://www.instagram.com/chaerrry0/",
          IconComponent: (
            <Image
              src="/images/itzy/chaeryeong.webp"
              alt="chaerrry0"
              width={32}
              height={32}
            />
          ),
        },
        {
          name: "igotyuandme",
          link: "https://www.instagram.com/igotyuandme/",
          IconComponent: (
            <Image
              src="/images/itzy/yuna.webp"
              alt="igotyuandme"
              width={32}
              height={32}
            />
          ),
        },
      ],
    },
  ];

  return (
    <>
      <WeeklyScheduler className="col-span-12" />

      <Card className="col-span-12">
        <header className="flex items-center gap-1">
          <h6 className="font-medium">ITZY Official</h6>

          <figure className="relative mb-1 flex h-5 w-5 items-center justify-center">
            <FontAwesomeIcon icon={faCertificate} className="text-sky-500" />
            <FontAwesomeIcon
              icon={faCheck}
              className="absolute text-[0.5rem] text-white"
            />
          </figure>
        </header>

        {officialChannels.map(({ id, title, channels }) => (
          <OfficialChannels key={id} title={title} channels={channels} />
        ))}
      </Card>
    </>
  );
};

export default Home;
