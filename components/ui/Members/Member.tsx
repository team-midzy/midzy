import { ITZY } from "@/components/common";
import Image from "next/image";

const Member = ({ member, size = 24 }: MembersProps) => {
  const memberInfo: MemberInfos = {
    itzy: "ITZY",
    yeji: "/images/itzy/yeji.webp",
    lia: "/images/itzy/lia.webp",
    ryujin: "/images/itzy/ryujin.webp",
    chaeryeong: "/images/itzy/chaeryeong.webp",
    yuna: "/images/itzy/yuna.webp",
  };

  return memberInfo[member] === "ITZY" ? (
    <ITZY size={size} />
  ) : (
    <Image
      src={memberInfo[member]}
      alt={member}
      width={size}
      height={size}
      quality={100}
      style={{ width: `${size}px`, height: `${size}px` }}
      className="rounded-full object-contain"
    />
  );
};

export default Member;
