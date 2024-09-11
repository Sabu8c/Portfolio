import Boxes from "@/components/Boxes";
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import { GetApp } from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Image from "next/image";

const boxItems = [
  {
    title: 'Montage PC',
    icon: '/apple.svg',
    subtitle: 'Gaming, burautique ou station de travail',
    link: '#',
    linkKey: 'Commander un PC',
  },
  {
    title: 'Réparation de PC',
    icon: '/apple.svg',
    subtitle: 'Défectueux, perte de puissance',
    link: '#',
    linkKey: 'Demander un devis',
  },
  {
    title: 'Amélioration de PC',
    icon: '/apple.svg',
    subtitle: 'Performances ou Design',
    link: '#',
    linkKey: 'Demander un devis',
  },
  {
    title: 'Mise à niveau de windows',
    icon: '/apple.svg',
    subtitle: 'Vers Windows 10 ou 11',
    link: '#',
    linkKey: 'Nous contacter',
  },
];

export default function Home() {
  return (
    <>
      {/* <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp /> */}
      <h1 className="bold-40 text-center">Nos Services</h1>
      <Boxes items={boxItems} />
    </>
  );
}
