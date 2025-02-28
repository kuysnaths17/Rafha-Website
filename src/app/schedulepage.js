"use client";

import { useState } from "react";
import Image from "next/image";

export default function Schedulepage() {
  return (
    <div className="relative z-[90]">
      <section
        id="branch"
        className="flex-grow flex flex-col justify-center items-center bg-pink-300 h-[850px] p-10 text-white text-2xl relative"
      >
        <p className="mb-6">Schedule</p>
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
