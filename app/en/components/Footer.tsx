import Image from "next/image";
import Link from "next/link";
import LogoGithub from "../../../public/logo-github.svg";
import LogoLinkedin from "../../../public/logo-linkedin.svg";
import LogoFooter from "../../../public/logo-footer.svg";

export default function Footer() {
  return (
    <footer className="relative bg-brown-footer z-10">
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-5 mt-6">
          <Link
            href={process.env.NEXT_PUBLIC_GITHUB_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={LogoGithub}
              width={40}
              height={40}
              alt="To my GitHub page"
              className="hover:brightness-75"
            />
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={LogoLinkedin}
              width={40}
              height={40}
              alt="To my LinkedIn page"
              className="hover:brightness-75"
            />
          </Link>
        </div>
        <div className="border-white border-t-[7px] w-[85%] mt-5"></div>
        <p className="text-white text-[2rem] text-center mt-5 mb-10">
          Made by Lucas Petit - Le Tirilly
        </p>
      </div>
    </footer>
  );
}
