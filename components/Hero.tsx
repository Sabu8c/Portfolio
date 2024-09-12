import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section
      id="home"
      className="max-container padding-container relative flex h-[95lvh] flex-col justify-center overflow-hidden"
    >
      <div className="regular-16 flex items-end gap-2">
        <Image
          src="/user-tie-solid.svg"
          alt="avatar"
          width={24}
          height={24}
          className="svg-white"
        />
        <p>Sacha Bumann</p>
      </div>
      <h1 className="bold-88">Developer</h1>
      <p className="regular-18 py-2">Building the future of the web wtith you 🚀</p>
      <div></div>
      <Image
        className="absolute -bottom-10 -right-32 -z-10 w-[400px] opacity-50 md:-bottom-32 md:right-0 md:w-[600px] lg:right-20"
        src="./phone-transparent.png"
        alt="phone"
        width={0}
        height={0}
      />
    </section>
  );
};

export default Hero;
