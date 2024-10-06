import { DCLogo, ITZYGalleryLogo } from "@/components/common";
import { TextLink } from "@/components/ui";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const email = "support@midzy.kr";

  return (
    <footer className="flex flex-wrap items-end justify-between py-6 text-xs font-light text-neutral-400">
      <div className="container">
        <section>
          <ITZYGalleryLogo />

          <address className="mt-1 not-italic">
            <a href={`mailto:${email}`}>{email}</a>
          </address>

          <div className="mt-1 flex gap-2">
            <TextLink href="https://gall.dcinside.com/itzy" target="_blank">
              <DCLogo className="hover:fill-blue-800" />
            </TextLink>

            <TextLink href="https://x.com/ITZY_gall" target="_blank">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-black hover:text-neutral-700"
              />
            </TextLink>
          </div>
        </section>

        <article className="mt-3">
          <p>
            &copy; <time dateTime="2024">2024</time> 있지 믿지 날자 (aka ITZY
            갤러리 서포트 팀). All rights reserved.
          </p>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
