"use client";

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { styles } from "../constants/style";
import { services } from "../constants/index";
import StarWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <>
      <Tilt className="w-[250px]">
        <motion.div
          variants={fadeIn("left", "spring", index * 0.5, 1)}
          className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly items-center flex-col max-w-xs"
          >
            <Image
              src={icon}
              alt="web-development"
              className="w-16 h-16 object-contain"
            />

            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("left", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Vue.js, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to
        life
      </motion.p>
      <div className="mt-10 flex flex-wrap justify-center items-center w-screen gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
    </>
  );
};

export default StarWrapper(About, "about");
