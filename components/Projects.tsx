import Image from 'next/image';
import Button from './Button';

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-container padding-container flex flex-col justify-center gap-10 border-y lg:flex-row lg:gap-0"
    >
      <div className="flex w-full flex-col justify-between gap-5 p-2 lg:h-[800px] lg:w-[50%] lg:gap-0 lg:border-r lg:p-10 lg:pl-0">
        <h2 className="bold-64">Yotta Technology</h2>
        <p className="regular-16 lg:w-[80%]">
          Enim do voluptate mollit ullamco pariatur. Tempor irure est elit ut cupidatat magna aute
          velit incididunt excepteur. Voluptate elit consectetur laborum irure deserunt sint tempor
          aliquip occaecat veniam excepteur deserunt non. Fugiat elit velit quis cillum veniam
          consectetur ipsum fugiat dolor ea enim occaecat esse ad. Sint elit magna ea sint. Aliqua
          culpa qui tempor incididunt sit cupidatat. Pariatur veniam labore reprehenderit id
          exercitation Lorem voluptate.
        </p>
        <a href="https://yotta-pc.ch" className="flex items-center gap-3 text-primary-400">
          https://yotta-pc.ch
          <Image className="svg-white" src="./link.svg" alt="icon" width={16} height={16} />
        </a>
        <Image className="w-full saturate-0" src="./yotta.png" alt="website" width={0} height={0} />
      </div>
      <div className="flex w-full flex-col justify-between gap-5 border-t p-2 lg:h-[800px] lg:w-[50%] lg:gap-0 lg:border-l lg:border-t-0 lg:p-10 lg:pr-0">
        <h2 className="bold-64">This Portfolio</h2>
        <p className="regular-16 lg:w-[80%]">
          Enim do voluptate mollit ullamco pariatur. Tempor irure est elit ut cupidatat magna aute
          velit incididunt excepteur. Voluptate elit consectetur laborum irure deserunt sint tempor
          aliquip occaecat veniam excepteur deserunt non. Fugiat elit velit quis cillum veniam
          consectetur ipsum fugiat dolor ea enim occaecat esse ad. Sint elit magna ea sint. Aliqua
          culpa qui tempor incididunt sit cupidatat. Pariatur veniam labore reprehenderit id
          exercitation Lorem voluptate.
        </p>
        <Image className="w-full" src="./portfolio.png" alt="website" width={0} height={0} />
      </div>
    </section>
  );
};

export default Projects;
