import Link from "next/link";
import { twJoin } from "tailwind-merge";

const OfficialChannels = ({ title, channels }: OfficialChannelsProps) => {
  return (
    <section className="py-3">
      <h6 className="mb-2 font-medium">{title}</h6>

      <ul className="flex flex-wrap gap-4">
        {channels.map(({ name, link, twBgClassName, IconComponent }) => (
          <li key={name}>
            <Link href={link} target="_blank">
              <div
                className={twJoin(
                  "flex h-8 w-8 items-center justify-center overflow-hidden rounded-full fill-white text-white",
                  twBgClassName
                )}
              >
                {IconComponent}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OfficialChannels;
