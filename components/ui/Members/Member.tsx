import Image from "next/image";

const Member = ({ member, size = 24 }: MembersProps) => {
  const memberInfo: MemberInfos = {
    itzy: "/images/itzy/itzy.webp",
    yeji: "/images/itzy/yeji.webp",
    lia: "/images/itzy/lia.webp",
    ryujin: "/images/itzy/ryujin.webp",
    chaeryeong: "/images/itzy/chaeryeong.webp",
    yuna: "/images/itzy/yuna.webp",
  };

  return (
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
