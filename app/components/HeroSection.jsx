import Image from 'next/image';
import Link from 'next/link';
import NavLink from './Navlink';

const gradientText = "text-transparent bg-clip-text bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-4">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hi! I'm {""}
            <span className={gradientText}>
              Sean Zhang
            </span>
          </h1>
          <p className="text-base sm:text-lg mb-6 lg:text-xl">
            <span className={gradientText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
          </p>
          <div className="sm:space-x-4 space-y-2 sm:space-y-0">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-white hover:bg-slate-200 text-black">
              About Me!
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white">
              Projects
            </button>
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