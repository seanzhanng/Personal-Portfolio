import Image from "next/image";
import Link from "next/link";
import NavLink from "./Navlink";

const gradientText =
  "text-transparent bg-clip-text bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-4">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hi! I'm {""}
            <span className={gradientText}>Sean Zhang</span>
          </h1>
          <p className="text-base sm:text-lg mb-6 lg:text-xl">
            <span className={gradientText}>
              Welcome to my personal portfolio website!
            </span>
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
            <Link href="/about">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-white hover:bg-slate-200 text-black">
                About Me!
              </button>
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white">
                Check out my resume!
              </button>
            </Link>
            <div className="flex flex-row space-x-4">
              <a
                href="https://github.com/seanzhanng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/github.svg"
                  alt="GitHub icon"
                  width={49.6}
                  height={49.6}
                  className="hover:opacity-80 transition"
                />
              </a>
              <a
                href="https://www.instagram.com/seanzhanng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram Icon"
                  width={49.6}
                  height={49.6}
                  className="hover:opacity-80 transition"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/seanzhanng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn Icon"
                  width={49.6}
                  height={49.6}
                  className="hover:opacity-80 transition"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-5 flex justify-center">
          <div className="rounded-full bg-gradient-to-r from-purple-400 to-pink-600 w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] flex items-center justify-center overflow-hidden">
            <Image
              src="/images/hero-icon.png"
              alt="hero image"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
