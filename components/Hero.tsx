import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden max-container flex justify-center flex-col padding-container h-[95lvh]">
      <div className='flex items-end gap-2 regular-16'>
        <Image
          src='/user-tie-solid.svg'
          alt='avatar'
          width={32}
          height={32} 
          className='fill-red'
          />
          <p>Sacha Bumann</p>
      </div>
      <h1 className='bold-88'>Developer</h1>
      <p className="regular-18 py-2">Building the future of the web wtith you 🚀</p>
      <div>
        
      </div>
      <Image className='absolute -z-10 -right-32 md:right-0 lg:right-20 -bottom-10 md:-bottom-32 opacity-50 w-[400px] md:w-[600px]' src="/phone-transparent.png" alt="phone" width={0} height={0} />
    </section>
  );
};

export default Hero;
