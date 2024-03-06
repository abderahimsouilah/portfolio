import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/me.png';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Greetings! I'm Souilah abderahim, a passionate Full Stack Developer
            dedicated to orchestrating digital magic. From crafting immersive
            front-end experiences using React, Next.js, and Tailwind CSS to
            architecting robust back-end solutions with Node.js and MongoDB, I
            thrive on transforming ideas into seamless, user-centric realities.
            Armed with a keen eye for design and a love for clean code, I'm on a
            perpetual quest to push the boundaries of web development. Let's
            collaborate and breathe life into your next digital masterpiece!
            💻✨
          </p>
          <p className="py-2 text-gray-600">
            Beginning my web development journey in 2022, I specialize in
            crafting unique restaurant websites. With hands-on client
            collaboration, I transform visions into digital solutions.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
