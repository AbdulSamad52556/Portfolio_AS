import React from "react";
import { Github, Link2Icon } from "lucide-react";

const Services = () => {
  return (
    <div className="bg-[#18061d] h-[100vh] p-10 flex flex-col items-center lg:items-start  lg:flex-row gap-5">

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#200927] h-fit lg:h-52">
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
        </div>

    </div>
  );
};

export default Services;
