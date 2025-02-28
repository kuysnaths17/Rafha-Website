"use client";

import { useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

const kaushan = localFont({
  src: "./fonts/KaushanScript-Regular.ttf",
});

export default function Page() {
  const [activeTab, setActiveTab] = useState("home");

  const ScrollNiBio = (id) => {
    setActiveTab(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="static top-0 left-0 w-full bg-white-100 p-2 flex justify-end text-sm text-gray-700 px-6 z-50">
        <div className="flex space-x-4">
          <div className="flex justify-center items-center gap-1">
            <FaPhoneVolume />
            <span>09084348181</span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <MdEmail />
            <span>aysonrafha@gmail.com</span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <FaFacebook />
            <span>
              <a
                href="https://www.facebook.com/rafha.glorious"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rafha Paanakan Glorious
              </a>
            </span>
          </div>
        </div>
      </div>

      <nav className="static left-0 w-full bg-white shadow-md p--3 flex justify-between items-center px-2 z-50 py-3">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/rafalogo.png"
            alt="Clinic Logo"
            width={90}
            height={90}
          />
          <div className="flex-row">
            <div
              className={`text-4xl font-bold text-gray-800 ${kaushan.className}`}
            >
              Rafha
            </div>
            <div className="font-semibold">
              GLORIOUS CARE AND MULTI-SPECIALTY CLINIC
            </div>
          </div>
        </div>

        <div className="flex space-x-6">
          {["home", "branch", "schedule", "about"].map((tab) => (
            <span
              key={tab}
              className={`cursor-pointer capitalize p-2 rounded-md transition-all ${
                activeTab === tab
                  ? "bg-pink-600 text-white"
                  : "text-gray-800 hover:text-pink-600"
              }`}
              onClick={() => ScrollNiBio(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
      </nav>
      <div className="w-max h-[100%]">
        <Image
          alt="Mountains"
          src={`/images/RAFHA-BACKGROUND.png`}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "fill",
          }}
        />
      </div>
      <div className="">
        <section
          id="home"
          className="flex-grow flex flex-col justify-center items-center bg-pink-300 p-10 text-white text-2xl relative h-[850px]"
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

        <section
          id="branch"
          className="flex-grow flex flex-col justify-center items-center bg-pink-300 p-10 text-white text-2xl relative h-[850px]"
        >
          <p className="mb-6">BRANCH</p>
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

        <section
          id="schedule"
          className="flex-grow flex flex-col justify-center items-center bg-pink-300 p-10 text-white text-2xl relative h-[850px]"
        >
          <p className="mb-6">SCHEDULE</p>
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

        <section
          id="about"
          className="flex-grow flex flex-col justify-center items-center bg-pink-300 p-10 text-white text-2xl relative h-[850px]"
        >
          <p className="mb-6">ABOUT</p>
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
    </div>
  );
}
