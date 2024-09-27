"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Github, Mail } from 'lucide-react'
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const mainImageRef = useRef(null);
  const scrollRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    gsap.fromTo(
      mainImageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );

    gsap.utils.toArray('.scroll-trigger').forEach((element) => {
      if (element instanceof Element) {
        gsap.fromTo(element, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: "top bottom-=100",
              end: "bottom top+=100",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={scrollRef}
      className="bg-black min-h-dvh p-3 md:p-8 text-gray-200"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.header variants={itemVariants} className="flex flex-col bg-[#D4C6B8] rounded-2xl p-2 sm:flex-row justify-between items-center mb-8">
        <h1 className="text-xl font-bold font-serif italic text-[#4A3728] ml-4 mb-4 sm:mb-0">
          Kush Sharma
        </h1>
        <nav className="space-x-4 mr-4">
          <Link href="https://kushsharma.vercel.app/#projects" className="text-sm text-[#6B4D30] hover:text-[#4A3728]">
            PROJECTS
          </Link>
          <Link href="https://kushsharma.vercel.app/#about" className="text-sm text-[#6B4D30] hover:text-[#4A3728]">
            ABOUT
          </Link>
          <Link href="https://kushsharma.vercel.app/#contact" className="text-sm text-[#6B4D30] hover:text-[#4A3728]">
            CONTACT
          </Link>
        </nav>
      </motion.header>

      <div className="grid grid-cols-12 gap-4">
        <motion.div variants={itemVariants} className="bg-[#D4C6B8] p-6 rounded-md col-span-12 md:col-span-6 lg:col-span-4 flex flex-col justify-evenly scroll-trigger">
          <motion.div variants={itemVariants} className="flex justify-end items-center">
            <Image 
            src="/coffee.png"
            alt="coffee"
            width={100}
            height={100}
            className="object-cover hover:scale-110 transition-all duration-300 ease-in-out mb-4 mr-4"
            priority
            />
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#4A3728]">
            <span className="font-mono italic underline">Next.js </span>
            <span className="font-bold">Full Stack Wizard</span> <span className="font-thin">Creating Seamless, </span>
            <span className="font-bold"> High-Impact</span> <span className="font-thin"> Digital Experiences</span>
            <span className="font-bold font-mono"> That Inspire</span>
          </h2>
        </motion.div>

        <div ref={mainImageRef} className="bg-[#565449] rounded-md flex items-end justify-center main_image col-span-12 md:col-span-5 lg:col-span-4">
          <Image
            src="/bentolio-avatar.png"
            alt="Kush Sharma"
            width={240}
            height={240}
            className="max-w-[240px] object-cover pt-12 hover:scale-95 transition-all duration-300 ease-in-out"
            priority
          />
        </div>

        <motion.div variants={itemVariants} className="bg-[#D4C6B8] p-4 rounded-md flex flex-col justify-evenly scroll-trigger col-span-12 md:col-span-7 lg:col-span-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-[#4A3728]">Work</h3>
            <ArrowUpRight className="text-[#6B4D30] cursor-pointer" size={16} />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/work.png"
              alt="Vision Forge Project"
              width={400}
              height={250}
              className="rounded-lg mb-4 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
              priority
            />
            <div className="flex flex-col items-start p-2 px-4">
            <h3 className="text-2xl font-semibold text-[#4A3728] mb-2 text-left">Vision Forge</h3>
            <p className="text-sm font-thin text-left text-black">
            VisionForge is a dynamic project, allows users to generate stunning images for free using prompts, with unlimited generations available.
            </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-[#D4C6B8] p-6 rounded-md scroll-trigger col-span-12 md:col-span-8 lg:col-span-6">
          <p className="text-lg font-thin font-mono mb-4 text-center text-black">
          A dedicated and driven developer with a strong passion for creating meaningful digital experiences. Known for a problem-solving mindset, attention to detail, and a genuine curiosity to learn and grow. Always ready to tackle challenges with persistence and a commitment to delivering quality results.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-[#565449] p-6 rounded-md scroll-trigger col-span-12 md:col-span-4 lg:col-span-3 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-thin mb-2 text-[#ffddc3]">Have some questions?</h3>
            <ArrowUpRight className="mb-2 text-[#D4C6B8] cursor-pointer" size={20} />
          </div>
          <h3 className="text-4xl md:text-5xl mt-4 font-mono font-semibold text-[#ffecdd]">Contact me</h3>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-[#D4C6B8] p-4 rounded-md flex justify-evenly items-center scroll-trigger col-span-12 md:col-span-6 lg:col-span-3">
          {[
            { href: 'https://www.linkedin.com/in/kushsharma738', Icon: Linkedin },
            { href: 'mailto:fullstack.kush@gmail.com', Icon: Mail },
            { href: 'https://github.com/Kushhhhhhhh', Icon: Github }
          ].map(({ href, Icon }) => (
            <Link key={href} href={href} className="text-[#6B4D30] hover:text-[#4A3728]">
              <Icon size={30} />
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}