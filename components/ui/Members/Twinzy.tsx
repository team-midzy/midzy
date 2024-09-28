import { ITZY } from "@/components/common";
import Image from "next/image";

const Twinzy = ({ member, size = 24 }: MembersProps) => {
  const twinzyInfo: MemberInfos = {
    itzy: "ITZY",
    yeji: "/images/kkengee.webp",
    lia: "/images/li-li.webp",
    ryujin: "/images/ryujji.webp",
    chaeryeong: "/images/ryeowoo.webp",
    yuna: "/images/naong.webp",
  };

  return twinzyInfo[member] === "ITZY" ? (
    <ITZY />
  ) : (
    <Image src={twinzyInfo[member]} alt={member} width={size} height={size} />
  );
};

export default Twinzy;
