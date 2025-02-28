"use client";

import { useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import Nav from "./nav";
import Homepage from "./homepage";
import Branchpage from "./branchpage";
import Schedulepage from "./schedulepage";
import Aboutpage from "./aboutpage";

const kaushan = localFont({
  src: "./fonts/KaushanScript-Regular.ttf",
});

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col z-[100]">
      <Nav/>
      
      <div className="w-fit h-[3400px] absolute ">
        <Image
          alt="Mountains"
          src={`/images/RAFHA-BACKGROUND.png`}
          quality={100}
          width={1920}
          height={3400}
          style={{
            objectFit: "cover",
            opacity: 0.25,
          }}
        />
      </div>
      <div>
          <Homepage/>
          <Branchpage/>
          <Schedulepage/>
          <Aboutpage/>
      </div>
    </div>
  );
}
