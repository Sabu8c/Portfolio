import Image from 'next/image';
import Button from './Button';

const Contact = () => {
  return (
    <section id="contact" className="max-container padding-container">
      <h2 className="bold-40">Just contact me</h2>
      <div className="flex w-full flex-wrap justify-start gap-2 py-10">
        <a href="">
          <div className="flexCenter gap-3 rounded-xl border p-2 hover:border-primary-400 lg:p-3">
            <Image src="/apple.svg" alt="icon" width={30} height={30} />
            <p className="regular-20">Instagram</p>
          </div>
        </a>
        <a href="">
          <div className="flexCenter gap-3 rounded-xl border p-2 hover:border-primary-400 lg:p-3">
            <Image src="/apple.svg" alt="icon" width={30} height={30} />
            <p className="regular-20">E-Mail</p>
          </div>
        </a>
        <a href="">
          <div className="flexCenter gap-3 rounded-xl border p-2 hover:border-primary-400 lg:p-3">
            <Image src="/apple.svg" alt="icon" width={30} height={30} />
            <p className="regular-20">Phone</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
