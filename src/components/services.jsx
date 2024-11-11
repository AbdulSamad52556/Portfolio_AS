import React from "react";

const Services = () => {
  return (
    <div className="bg-[#18061d] h-[100vh] p-10 flex flex-col md:flex-row gap-5">

      <a href="https://inticure.online">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#200927] scale-100 hover:scale-105 duration-300">
          <div className="px-6 py-10">
            <div className="font-bold text-xl mb-2 text-white text-center">
              Inticure
            </div>
            <p className=" text-base text-white">
              A multi-role telemedicine application enabling international
              doctor consultations, integrating advanced scheduling, automated
              communications, and tailored service options.
            </p>
          </div>
        </div>
      </a>

      <a href="https://cabquest.quest">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#200927] scale-100 hover:scale-105 duration-300">
          <div className="px-6 py-10">
            <div className="font-bold text-xl mb-2 text-white text-center">
              cabQuest
            </div>
            <p className=" text-base text-white">
            A robust taxi service application enabling users to search, book rides, and choose from multiple cab
            categories based on their preferences.
            </p>
          </div>
        </div>
      </a>

    </div>
  );
};

export default Services;
