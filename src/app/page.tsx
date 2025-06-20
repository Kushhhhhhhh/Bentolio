"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Github, Mail } from "lucide-react";
import { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

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

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 1,
          staggerChildren: 0.2,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    }),
    []
  );

  return (
    <div className="bg-[#11120d] min-h-screen p-3 md:p-5 text-gray-200">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="h-full"
      >

        <motion.header
          variants={itemVariants}
          className="flex flex-col bg-[#d8cfbc] rounded-xl p-4 sm:flex-row justify-center sm:justify-between items-center mb-8 mt-2"
        >
          <h1 className="text-xl md:text-3xl font-spectral font-extrabold text-[#4A3728] ml-4 mb-4 sm:mb-0">
            Kush Sharma
          </h1>
          <nav className="space-x-4 mr-4 font-poppins">
            <Link
              href="https://github.com/Kushhhhhhhh"
              className="text-sm sm:text-base text-[#6B4D30] hover:text-[#4A3728] relative group"
            >
              PROJECTS
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#4A3728] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="https://kush-sharma.vercel.app"
              className="text-sm sm:text-base text-[#6B4D30] hover:text-[#4A3728] relative group"
            >
              ABOUT
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#4A3728] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/kushsharma738"
              className="text-sm sm:text-base text-[#6B4D30] hover:text-[#4A3728] relative group"
            >
              CONTACT
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#4A3728] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Box 1 */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex flex-col justify-between py-10"
          >
            <motion.div variants={itemVariants} className="flex justify-end">
              <Image
                src="/leaf.png"
                alt="leaf-img"
                width={250}
                height={250}
                className="object-cover leaf-image"
                priority
              />
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-lora text-[#4A3728] py-2">
              Building Stunning Web Applications with{" "}
              <span className="italic underline">Next.js</span> that inspire and
              captivate users.
            </h2>
          </motion.div>

          {/* Box 2 */}
          <div
            ref={mainImageRef}
            className="bg-[#57544a] rounded-md flex items-end justify-center"
          >
            <Image
              src="/avatar.png"
              alt="Kush Sharma"
              width={600}
              height={600}
              className="max-w-[500px] object-cover pt-12"
              priority
            />
          </div>

          {/* Box 3 */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex flex-col items-center text-center space-y-10 px-4 sm:px-8 md:px-16  lg:px-24"
          >
            <div className="flex justify-between items-center w-full mb-4">
              <h3 className="text-xl md:text-3xl font-spectral font-bold text-[#4A3728]">
                Work
              </h3>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 20 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="https://visionforgev2.vercel.app">
                  <ArrowUpRight
                    className="text-[#6B4D30] cursor-pointer"
                    size={30}
                  />
                </Link>
              </motion.div>
            </div>

            <div className="relative overflow-hidden rounded-lg mb-6 max-w-xs sm:max-w-sm md:max-w-md">
              <Image
                src="/vf-logo.jpg"
                alt="Vision Forge Project"
                width={400}
                height={400}
                className="object-cover hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>

            <div className="flex flex-col text-left max-w-lg">
              <h3 className="text-2xl font-david-libre font-bold text-[#4A3728] mb-2">
                Vision Forge
              </h3>
              <p className="text-sm font-poppins text-black">
                It is a powerful tool that lets you create amazing images for free with just a few words—unlimited creativity at your fingertips!
              </p>
            </div>
          </motion.div>

          {/* Box 4 */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex justify-between items-center gap-12 py-10"
          >
            <Image
              src="/coffee.png"
              alt="coffee"
              width={150}
              height={150}
              className="object-cover mb-4 self-center hover:scale-110 transition-all duration-300"
              priority
            />
            <p className="text-sm sm:text-base font-lora text-black">
              I&apos;m a driven and curious person with a passion for innovation
              and personal growth. I&apos;m known for my problem-solving skills,
              attention to detail, and persistence. I approach challenges with
              dedication and a commitment to excellence in everything I do.
            </p>
          </motion.div>

          {/* Box 5 */}
          <motion.div
            variants={itemVariants}
            className="bg-[#57544a] p-6 rounded-md flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-david-libre mb-2 text-[#ffddc3]">
                Have some questions?
              </h3>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 20 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="mailto:fullstack.kush@gmail.com">
                  <ArrowUpRight
                    className="mb-2 text-[#D4C6B8] cursor-pointer"
                    size={20}
                  />
                </Link>
              </motion.div>
            </div>
            <h3 className="text-4xl md:text-5xl mt-4 font-sans font-semibold text-[#ffecdd]">
              Contact me
            </h3>
          </motion.div>

          {/* Box 6 */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-4 rounded-md flex justify-evenly items-center"
          >
            {[
              {
                href: "https://www.linkedin.com/in/kushsharma738",
                Icon: Linkedin,
              },
              {
                href: "https://github.com/Kushhhhhhhh",
                Icon: Github,
              },
              {
                href: "mailto:fullstack.kush@gmail.com",
                Icon: Mail,
              },
            ].map(({ href, Icon }) => (
              <Link key={href} href={href}>
                <motion.div
                  className="text-[#6B4D30] hover:text-[#4A3728]"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={40} />
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}