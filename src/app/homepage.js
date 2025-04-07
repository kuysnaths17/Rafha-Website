"use client";

import { useState } from "react";
import Image from "next/image";

export default function Homepage() {
  const [activeTab, setActiveTab] = useState("home");

  const ScrollNiBio = (id) => {
    setActiveTab(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="relative z-[90]">
      <section
        id="home"
        className="flex-grow flex flex-col justify-center items-center h-[825px] bg-pink-300 bg-blend-color-dodge p-10 text-white text-2xl relative"
      >
        <div className="relative flex items-center justify-center gap-20">
          <div className="w-[55%] text-black">
            <div className="text-3xl">At Rafha Glorious Care Birth Clinic, we prioritize your journey to parenthood with compassionate care, expert support, and a commitment to your family's well-being every step of the way</div>
            <div>
              <div className="flex space-x-6 justify-center mt-10">
                {["services"].map((tab) => (
                  <span
                    key={tab}
                    className={`cursor-pointer capitalize p-2 rounded-2xl transition-all ${activeTab === tab
                        ? "bg-slate-200 text-black  "
                        : "bg-slate-200 hover:text-pink-600"
                      }`}
                    onClick={() => ScrollNiBio(tab)}
                  >
                    Check our services
                  </span>
                ))}
              </div>
            </div>
          </div>
          <Image
            src="/images/doctorwoman.png"
            alt="Clinic Interior"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>
      <section id="services" className="flex-grow flex flex-col justify-center items-center h-[825px] bg-pink-300 bg-blend-color-dodge p-10 text-white text-2xl relative">

      </section>
    </div>
  );
}
