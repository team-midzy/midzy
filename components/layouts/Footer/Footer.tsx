import { ITZYGalleryLogo } from "@/components/common";

const Footer = () => {
  const email = "support@midzy.kr";

  return (
    <footer className="container py-6 text-sm font-light text-gray-600">
      <section className="mb-3">
        <ITZYGalleryLogo />

        <address className="mt-[2px] not-italic">
          <a href={`mailto:${email}`}>{email}</a>
        </address>
      </section>

      <article>
        <p>
          &copy; <time>2024</time> 있지 믿지 날자 (aka ITZY Gallery Support
          Team). All rights reserved.
        </p>
      </article>
    </footer>
  );
};

export default Footer;
