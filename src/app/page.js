'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local';
const kaushan = localFont({
  src: "./fonts/KaushanScript-Regular.ttf",
})

export default function Page() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-white-100 p-2 flex justify-end text-sm text-gray-700 px-6">
        <div className="flex space-x-4">
          <span>📞 09084348181</span>
          <span>📧 aysonrafha@gmail.com</span>
          <span>
            🔗 <a href="https://www.facebook.com/rafha.glorious" target="_blank" rel="noopener noreferrer" className="text-blue-600">Facebook</a>
          </span>
        </div>
      </div>

      <nav className="bg-white shadow-md p-4 flex justify-between items-center px-6">
        <div className="flex items-center space-x-3">
          <Image src="/images/rafalogo.png" alt="Clinic Logo" width={85} height={85} />
          <div className={`flex-row `}>
            <div className={`text-4xl font-bold text-gray-800 ${kaushan.className}`}>Rafha</div>
            <div className={`font-semibold`}>GLORIOUS CARE AND MULTI-SPECIALTY CLINIC</div>
          </div>
        </div>

        <div className="flex space-x-6">
          {['home', 'branch', 'schedule', 'about'].map((tab) => (
            <Link key={tab} href={`/${tab}`}>
              <span
                className={`cursor-pointer capitalize p-2 rounded-md transition-all ${activeTab === tab ? 'bg-pink-600 text-white' : 'text-gray-800 hover:text-pink-600'
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      <section className="flex-grow flex flex-col justify-center items-center bg-pink-300 p-10 text-white text-2xl relative">
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
      <section className="flex-grow flex flex-col justify-center items-center bg-pink-300 p-10 text-white text-2xl relative">
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
      <section className="flex-grow flex flex-col justify-center items-center bg-pink-300 p-10 text-white text-2xl relative">
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
      <section className="flex-grow flex flex-col justify-center items-center bg-pink-300 p-10 text-white text-2xl relative">
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
  );
}
