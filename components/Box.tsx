// components/Box.tsx

import Image from "next/image";
import Button from "./Button";

type BoxProps = {
  title: string;
  icon?: React.ReactNode; // icon can be an emoji or any string representing an icon
  subtitle?: string;
  link?: string;
  linkKey?: string;
};

const Box: React.FC<BoxProps> = ({ title, icon, subtitle, link, linkKey }) => {
  return (
    <div className="w-[300px] h-[300px] rounded-lg flexBetween flex-col gap-3 container-glass p-5">
        {icon && typeof icon === 'string' ? (
        <Image src={icon} alt="icon" width={70} height={70} />
      ) : (
        icon && <div className="text-3xl">{icon}</div>
      )}
      <a href={link}>
        <h5 className="text-center bold-24 tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="text-center regular-16 text-gray-500 dark:text-gray-400">
        {subtitle}
      </p>
      <a href={link} className="animation-laser text-center inline-flex items-center regular-14 text-primary-50">
        {linkKey}
      </a>
    </div>
  );
};

export default Box;
