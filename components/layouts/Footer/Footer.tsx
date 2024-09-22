import { ITZYGalleryLogo } from "@/components/common";

const Footer = () => {
  const email = "support@midzy.kr";

  return (
    <footer className="container flex flex-wrap items-end justify-between py-6 text-xs font-light text-neutral-600">
      <section>
        <ITZYGalleryLogo />

        <address className="mt-1 not-italic">
          <a href={`mailto:${email}`}>{email}</a>
        </address>
      </section>

      <article className="mt-3">
        <p>
          &copy; <time dateTime="2024">2024</time> 있지 믿지 날자 (aka ITZY
          갤러리 서포트 팀). All rights reserved.
        </p>
      </article>
    </footer>
  );
};

export default Footer;
