// components/Boxes.tsx
import React from 'react';
import Box from './Box';
import { it } from 'node:test';

type BoxItem = {
  title: string;
  icon?: React.ReactNode;
  subtitle?: string;
  link?: string;
  linkKey?: string;
};

type BoxesProps = {
  items: BoxItem[];
  
};
const Boxes: React.FC<BoxesProps> = ({ items }) => {
  return (
    <section className={`max-container padding-container flex justify-between items-start gap-5 flex-wrap lg:flex-nowrap`}>
      {items.map((item, index) => (
        <Box
          key={index}
          title={item.title}
          icon={item.icon}
          subtitle={item.subtitle}
          link={item.link}
          linkKey={item.linkKey}
        />
      ))}
    </section>
  );
};

export default Boxes;
