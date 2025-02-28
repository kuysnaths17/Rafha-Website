"use client";

import { useState } from "react";
import Image from "next/image";

export default function Homepage() {
  return (
    <div className=" relative mt-[150] z-[90]">
      <section
        id="home"
        className="flex-grow flex flex-col justify-center items-center bg-pink-300 p-10 text-white text-2xl relative"
      >
        <p className="mb-6">HOME</p>
        <div className="relative">
          <Image
            src="/images/doctorwoman.png"
            alt="Clinic Interior"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}
