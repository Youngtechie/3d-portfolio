'use client'

import React from "react";
import {Tilt} from 'react-tilt'
import  StarWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import Image from 'next/image'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
      {technologies.map((technology) => (
        <Tilt className='w-20 h-20 flex items-center justify-center' key={technology.name}>
          <Image src={technology.icon} alt={technology.name} width={50} height={50}/>
        </Tilt>
      ))}
    </div>
  );
};

export default StarWrapper(Tech, "");