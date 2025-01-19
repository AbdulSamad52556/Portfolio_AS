import React from "react";
import { Github, Link2Icon } from "lucide-react";
import MyImage from "../assets/images/WhatsApp Image 2025-01-19 at 9.14.37 AM.jpeg";
import cabquest from '../assets/images/WhatsApp Image 2025-01-19 at 4.33.49 PM.jpeg'
import audsculpt from '../assets/images/image1.png'
import spenmax from '../assets/images/image2.png'
import skystream from '../assets/images/image.png'

const Services = () => {
  return (
    // <div className="bg-[#18061d] min-h-[100vh] p-10 flex flex-col items-center lg:items-start  lg:flex-row gap-5">
    <div className="bg-[#18061d] min-h-[100vh] p-10 flex flex-wrap justify-center md:justify-normal items-center lg:items-start gap-5">

      <div class="max-w-sm rounded overflow-hidden shadow-lg p-3">
        <img
          class="w-full rounded grayscale hover:grayscale-0 duration-300 cursor-pointer"
          src={MyImage}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div className="font-bold text-xl font-serif mb-2 text-white text-center">
            Inticure
          </div>
          <p className=" text-sm font-serif text-white">
            A multi-role telemedicine application enabling international doctor
            consultations, integrating advanced scheduling, automated
            communications, and tailored service options.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <a href="https://inticure.com" target="__blank">
            <Link2Icon className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
          </a>
        </div>
      </div>

      <div class="max-w-sm rounded overflow-hidden shadow-lg p-3">
        <img
          class="w-full rounded grayscale hover:grayscale-0 duration-300 cursor-pointer"
          src={spenmax}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div className="font-bold text-xl font-serif mb-2 text-white text-center">
            Spenmax
          </div>
          <p className=" text-sm font-serif text-white">
          A feature-rich e-commerce platform designed to offer users the best deals on utilities through intelligent
algorithms and secure payment systems. 
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <a href="https://spenmax.in" target="__blank">
            <Link2Icon className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
          </a>
        </div>
      </div>

      <div class="max-w-sm rounded overflow-hidden shadow-lg p-3">
        <img
          class="w-full rounded grayscale hover:grayscale-0 duration-300 cursor-pointer"
          src={skystream}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div className="font-bold text-xl font-serif mb-2 text-white text-center">
            skyStream
          </div>
          <p className=" text-sm font-serif text-white">
          A cutting-edge streaming platform designed to deliver high-quality video content. Sky Stream features ultra-low
          latency streaming for real-time experiences and supports HD and 4K content. 
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <a href="https://skystream.in" target="__blank">
            <Link2Icon className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
          </a>
        </div>
      </div>

      

      <div class="max-w-sm rounded overflow-hidden shadow-lg p-3">
        <img
          class="w-full rounded grayscale hover:grayscale-0 duration-300 cursor-pointer"
          src={cabquest}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div className="font-bold text-xl font-serif mb-2 text-white text-center">
          cabQuest
          </div>
          <p className=" text-sm font-serif text-white">
          A robust taxi service application enabling users to search, book rides, and choose from multiple cab
          categories based on their preferences.

          </p>
          <br />
        </div>
        <div class="px-6 pt-4 pb-2 flex gap-5">
        <a href="https://cabquest.quest" target="__blank">
              <Link2Icon className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
            </a>
            <a href="https://github.com/cabquest" target="__blank">
              <Github className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
            </a>
        </div>
      </div>

      <div class="max-w-sm rounded overflow-hidden shadow-lg p-3">
        <img
          class="w-full rounded grayscale hover:grayscale-0 duration-300 cursor-pointer"
          src={audsculpt}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div className="font-bold text-xl font-serif mb-2 text-white text-center">
          AudSculpt
          </div>
          <p className=" text-sm font-serif text-white">
          A comprehensive e-commerce platform for electronics, focusing on user convenience, robust backend
          functionality, and secure transactions.
          </p>
          <br />
        </div>
        <div class="px-6 pt-4 pb-2 flex gap-5">
        <a href="https://audsculpt.onrender.com" target="__blank">
              <Link2Icon className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
            </a>
            <a href="https://github.com/AbdulSamad52556/audsculpt" target="__blank">
              <Github className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
            </a>
        </div>
      </div>
      
      {/* <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#200927] h-fit lg:h-52">
          <div className="px-6 py-10">
            <div className="font-bold text-xl font-serif mb-2 text-white text-center">
              Inticure
            </div>
            
            <p className=" text-sm font-serif text-white">
              A multi-role telemedicine application enabling international
              doctor consultations, integrating advanced scheduling, automated
              communications, and tailored service options.
            </p>
            <div className="flex gap-5 mt-5 justify-end items-end">
            <a href="https://inticure.com">
              <Link2Icon className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
            </a>
            
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#200927] h-fit lg:h-52">
          <div className="px-6 py-10">
            <div className="font-bold font-serif text-xl mb-2 text-white text-center">
              AudSculpt
            </div>
            <p className=" text-sm font-serif text-white">
            A comprehensive e-commerce platform for electronics, focusing on user convenience, robust backend
            functionality, and secure transactions.
            </p>
            <div className="flex gap-5 mt-10 justify-end">
      <a href="https://audsculpt.onrender.com">
              <Link2Icon className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
            </a>
            <a href="https://github.com/AbdulSamad52556/audsculpt">
              <Github className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
            </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#200927] h-fit lg:h-52">
          <div className="px-6 py-10">
            <div className="font-bold font-serif text-xl mb-2 text-white text-center">
              AudSculpt
            </div>
            <p className=" text-sm font-serif text-white">
            A comprehensive e-commerce platform for electronics, focusing on user convenience, robust backend
            functionality, and secure transactions.
            </p>
            <div className="flex gap-5 mt-10 justify-end">
      <a href="https://audsculpt.onrender.com">
              <Link2Icon className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
            </a>
            <a href="https://github.com/AbdulSamad52556/audsculpt">
              <Github className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
            </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#200927] h-fit lg:h-52">
          <div className="px-6 py-10">
            <div className="font-bold font-serif text-xl mb-2 text-white text-center">
              AudSculpt
            </div>
            <p className=" text-sm font-serif text-white">
            A comprehensive e-commerce platform for electronics, focusing on user convenience, robust backend
            functionality, and secure transactions.
            </p>
            <div className="flex gap-5 mt-10 justify-end">
      <a href="https://audsculpt.onrender.com">
              <Link2Icon className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
            </a>
            <a href="https://github.com/AbdulSamad52556/audsculpt">
              <Github className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
            </a>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#200927] h-fit lg:h-52">
          <div className="px-6 py-10">
            <div className="font-bold text-xl mb-2 font-serif text-white text-center">
              cabQuest
            </div>
            <p className=" text-sm font-serif text-white">
            A robust taxi service application enabling users to search, book rides, and choose from multiple cab
            categories based on their preferences.
            </p>
            <div className="flex gap-5 mt-10 justify-end">
            <a href="https://cabquest.quest">
              <Link2Icon className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
            </a>
            <a href="https://github.com/cabquest">
              <Github className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
            </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#200927] h-fit lg:h-52">
          <div className="px-6 py-10">
            <div className="font-bold font-serif text-xl mb-2 text-white text-center">
              AudSculpt
            </div>
            <p className=" text-sm font-serif text-white">
            A comprehensive e-commerce platform for electronics, focusing on user convenience, robust backend
            functionality, and secure transactions.
            </p>
            <div className="flex gap-5 mt-10 justify-end">
      <a href="https://audsculpt.onrender.com">
              <Link2Icon className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
            </a>
            <a href="https://github.com/AbdulSamad52556/audsculpt">
              <Github className="text-white w-5 h-5 cursor-pointer scale-100 hover:scale-125 duration-300" />
            </a>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default Services;
