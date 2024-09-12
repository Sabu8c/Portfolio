import Image from 'next/image';
import Button from './Button';

const Skills = () => {
  return (
    <section id="skills" className="max-container flex flex-col items-center lg:flex-row justify-center gap-5 lg:gap-20 padding-container">
      <div className='w-[90%] lg:w-[300px] h-[230px] lg:h-[350px] rounded-xl border flex flex-col justify-between items-center  p-4 lg:p-10 hover:border-primary-400'>
        <Image src='/next.png' alt='icon' width={70} height={70} />
        <h2 className='bold-32 text-center'>Next.js</h2>
        <p className='regular-16 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptatibus.</p>
      </div>
      <div className='w-[90%] lg:w-[300px] h-[230px] lg:h-[350px] lg:mt-20 rounded-xl border flex flex-col justify-between items-center p-4 lg:p-10 hover:border-primary-400'>
        <Image className="svg-white" src='/tailwind.png' alt='icon' width={70} height={70} />
        <h2 className='bold-32  text-center'>Tailwind CSS</h2>
        <p className='regular-16 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptatibus.</p>
      </div>
      <div className='w-[90%] lg:w-[300px] h-[230px] lg:h-[350px] lg:mt-40 rounded-xl border flex flex-col justify-between items-center  p-4 lg:p-10 hover:border-primary-400'>
        <Image className="saturate-0"src='/typescript.png' alt='icon' width={70} height={70} />
        <h2 className='bold-32  text-center'>Typescript</h2>
        <p className='regular-16 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptatibus.</p>
      </div>
    </section>
  );
};

export default Skills;
