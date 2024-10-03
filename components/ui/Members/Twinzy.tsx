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
    <ITZY size={size} />
  ) : (
    <Image
      src={twinzyInfo[member]}
      alt={member}
      width={size}
      height={size}
      style={{ width: `${size}px`, height: `${size}px` }}
      className="object-contain"
    />
  );
};

export default Twinzy;
