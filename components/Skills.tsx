import Image from 'next/image';
import Button from './Button';

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-container padding-container flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-20"
    >
      <div className="flex h-[230px] w-[90%] flex-col items-center justify-between rounded-xl border p-4 hover:border-primary-400 lg:h-[350px] lg:w-[300px] lg:p-10">
        <Image src="./next.png" alt="icon" width={70} height={70} />
        <h2 className="bold-32 text-center">Next.js</h2>
        <p className="regular-16 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptatibus.
        </p>
      </div>
      <div className="flex h-[230px] w-[90%] flex-col items-center justify-between rounded-xl border p-4 hover:border-primary-400 lg:mt-20 lg:h-[350px] lg:w-[300px] lg:p-10">
        <Image className="svg-white" src="./tailwind.png" alt="icon" width={70} height={70} />
        <h2 className="bold-32 text-center">Tailwind CSS</h2>
        <p className="regular-16 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptatibus.
        </p>
      </div>
      <div className="flex h-[230px] w-[90%] flex-col items-center justify-between rounded-xl border p-4 hover:border-primary-400 lg:mt-40 lg:h-[350px] lg:w-[300px] lg:p-10">
        <Image className="saturate-0" src="./typescript.png" alt="icon" width={70} height={70} />
        <h2 className="bold-32 text-center">Typescript</h2>
        <p className="regular-16 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptatibus.
        </p>
      </div>
    </section>
  );
};

export default Skills;
