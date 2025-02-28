"use client";

import { useState } from "react";
import Image from "next/image";

export default function Aboutpage() {
  return (
    <div className="relative z-[90]">
      <section
        id="about"
        className="flex-grow flex flex-col justify-center items-center bg-pink-300 p-10 h-[850px] text-white text-2xl relative gap-7"
      >
        <div className="w-[55%]">
          <div className="flex-row justify-center text-center items-center ">
            <h1 className="text-black font-bold">OUR VISION</h1>
            <p className="text-black italic">
              To be the most reliable provider of maternity and medical services
              in the community, embodying education on healthy living, family
              planning, and exemplifying the values of compassion of each
              person, care and selfless love by serving God through service of
              others.
            </p>
          </div>
        </div>
        <div className="w-[55%]">
          <div className="flex-row justify-center text-center items-center ">
            <h1 className="text-black font-bold">OUR MISSION</h1>
            <p className="text-black italic">
              To provide high quality service that is accessible and affordable
              for each and one and at the same time educating every person to
              health planning and healthy living towards and understanding that
              each person is valuable to God, therefore deserves the best care
              and services.
            </p>
          </div>
        </div>
        <div className="w-[55%]">
          <div className="flex-row justify-center text-center items-center ">
            <h1 className="text-black font-bold">OUR CORE VALUES</h1>
            <div className="text-left ml-[12%]">
              <p className="text-black italic">
                <span className="text-red-500 font-bold">R</span> - eliability
                (Reliable Services)
              </p>
              <p className="text-black italic">
                <span className="text-red-500 font-bold">A</span> - eccesibility
                (Easy to reach and to reach out to)
              </p>
              <p className="text-black italic">
                <span className="text-red-500 font-bold">F</span> - ollowers of
                Christ (Christ centered life)
              </p>
              <p className="text-black italic">
                <span className="text-red-500 font-bold">H</span> - armony (Good
                relationship between staff and Patients)
              </p>
              <p className="text-black italic">
                <span className="text-red-500 font-bold">A</span> - ffordability
                (Value for excellent Services)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
