"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Github, Mail } from 'lucide-react';
import { useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function Home() {
  const mainImageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      mainImageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 2, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    gsap.to(".leaf-image", {
      y: -10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2,
    });
  }, []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }), []);

  return (
    <motion.div
      className="bg-[#11120d] min-h-screen p-3 md:p-5 text-gray-200"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.header
        variants={itemVariants}
        className="flex flex-col bg-[#d8cfbc] rounded-2xl p-4 sm:flex-row justify-between items-center mb-8"
      >
        <h1 className="text-xl md:text-3xl font-extrabold font-sans text-[#4A3728] ml-4 mb-4 sm:mb-0">
          Kush Sharma
        </h1>
        <nav className="space-x-4 mr-4">
          <Link href="#projects" className="text-sm sm:text-base text-[#6B4D30] hover:text-[#4A3728] relative group">
            PROJECTS
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#4A3728] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#about" className="text-sm sm:text-base text-[#6B4D30] hover:text-[#4A3728] relative group">
            ABOUT
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#4A3728] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#contact" className="text-sm sm:text-base text-[#6B4D30] hover:text-[#4A3728] relative group">
            CONTACT
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#4A3728] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
      </motion.header>

      <div className="grid grid-cols-12 gap-4">
        <motion.div
          variants={itemVariants}
          className="bg-[#d8cfbc] p-6 rounded-md col-span-12 md:col-span-6 lg:col-span-4 flex flex-col justify-evenly"
        >
          <motion.div variants={itemVariants} className="flex justify-end items-center">
            <Image
              src="/leaf.png"
              alt="leaf-img"
              width={150}
              height={150}
              className="object-cover h-auto leaf-image"
              priority
            />
          </motion.div>
          <h2 className="md:text-3xl text-2xl lg:text-4xl font-bold font-serif mb-2 leading-tight text-[#4A3728]">
            Building Stunning Web Applications with <span className="italic underline">Next.js</span> that inspire and captivate users.
          </h2>
        </motion.div>

        <div
          ref={mainImageRef}
          className="bg-[#57544a] rounded-md flex items-end justify-center main-image col-span-12 md:col-span-5 lg:col-span-4"
        >
          <Image
            src="/bentolio-avatar.png"
            alt="Kush Sharma"
            width={250}
            height={250}
            className="max-w-[240px] h-auto object-cover pt-12"
            priority
          />
        </div>

        <motion.div
          variants={itemVariants}
          className="bg-[#d8cfbc] p-4 rounded-md flex flex-col justify-evenly col-span-12 md:col-span-7 lg:col-span-4"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-extrabold text-[#4A3728]">Work</h3>
            <motion.div whileHover={{ scale: 1.2, rotate: 20 }} whileTap={{ scale: 0.9 }}>
              <Link href="https://visionforgev2.vercel.app">
                <ArrowUpRight className="text-[#6B4D30] cursor-pointer" size={24} />
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src="/work.jpg"
                alt="Vision Forge Project"
                width={400}
                height={250}
                className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                priority
              />
            </div>
            <div className="flex flex-col items-start p-2 px-4">
              <h3 className="text-2xl font-bold text-[#4A3728] mb-2 text-left">Vision Forge</h3>
              <p className="text-sm font-inter text-left text-black">
                VisionForge is a powerful tool that lets you create amazing images for free with just a few words—unlimited creativity at your fingertips!
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-[#d8cfbc] p-6 rounded-md col-span-12 md:col-span-6 lg:col-span-6 flex justify-between gap-4 items-center"
        >
          <Image
            src="/coffee.png"
            alt="coffee"
            className="object-cover h-auto mb-4 mr-4 hover:scale-110 transition-all duration-300 ease-in-out"
            width={100}
            height={100}
            priority
          />
          <p className="text-sm sm:text-base font-inter text-black">
            I&apos;m a driven and curious person with a passion for innovation and personal growth. I&apos;m known for my problem-solving skills, attention to detail, and persistence. I approach challenges with dedication and a commitment to excellence in everything I do.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-[#57544a] p-6 rounded-md col-span-12 md:col-span-6 lg:col-span-3 flex flex-col justify-between"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-thin mb-2 text-[#ffddc3]">Have some questions?</h3>
            <motion.div whileHover={{ scale: 1.2, rotate: 20 }} whileTap={{ scale: 0.9 }}>
              <Link href="mailto:fullstack.kush@gmail.com">
                <ArrowUpRight className="mb-2 text-[#D4C6B8] cursor-pointer" size={20} />
              </Link>
            </motion.div>
          </div>
          <h3 className="text-4xl md:text-5xl mt-4 font-sans font-semibold text-[#ffecdd]">
            Contact me
          </h3>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-[#d8cfbc] p-4 rounded-md flex justify-evenly items-center col-span-12 md:col-span-6 lg:col-span-3"
        >
          {[
            { href: 'https://www.linkedin.com/in/kushsharma738', Icon: Linkedin },
            { href: 'https://github.com/Kushhhhhhhh', Icon: Github },
            { href: 'mailto:fullstack.kush@gmail.com', Icon: Mail },
          ].map(({ href, Icon }) => (
            <Link key={href} href={href}>
              <motion.div
                className="text-[#6B4D30] hover:text-[#4A3728]"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={30} />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}