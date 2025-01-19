import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CharacterModel from "./characterModel";
import { Mail, Phone, Github, Linkedin, Instagram  } from "lucide-react";

const Home = () => {
  const [contact, setContact] = useState(false);
  const [connect, setConnect] = useState(false);
  return (
    <div className="flex justify-center items-start lg:justify-between bg-[#18061d] px-20 min-h-[100vh] ">
      <div className="flex w-2/3 justify-center items-center min-h-[80vh]">
        <div className="flex flex-col gap-10">
          <h1 className="text-white text-5xl font-bold font-serif">
            ABDUL SAMAD
          </h1>
          <h1 className="text-white text-6xl  font-bold font-serif">
            Python Full Stack Developer
          </h1>
          <p className="text-white font-serif">
            {"if brain != empty:"}
            <br />
            <div className="flex">
              <p className="text-[#18061d] ">aaa</p>
              {"  keepCoding( )"}
              <br />
            </div>
            {"else:"}
            <br />
            <div className="flex">
              <p className="text-[#18061d]">aaa</p>
              {"  orderCoffee( )"}
              <br />
            </div>
          </p>

          <div className="flex flex-col gap-5">

          <div className="flex">
            <div>
              <button
                className="bg-[#18061d] hover:border-[#fff4] hover:text-[#fff4] border-2 font-serif duration-300 py-2 px-4 text-white rounded"
                onClick={() => setContact(!contact)}
              >
                Contact Me
              </button>
            </div>
            {contact && (
              <div className="flex gap-10 p-3 ml-5">
                <div>
                  <a href="mailto:abdulsamad52556@gmail.com">
                    <Mail className="text-white w-5 h-5 cursor-pointer" />
                  </a>
                </div>
                
                
                <div>
                  <a
                    href="https://wa.me/917356860792"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="text-white w-5 h-5 cursor-pointer" />
                  </a>
                </div>
                <div></div>
              </div>
            )}
            <div>
              
            </div>
          </div>
          <div className="flex">
            <div>
              <button
                className="bg-[#18061d] hover:border-[#fff4] hover:text-[#fff4] border-2 font-serif duration-300 py-2 px-4 text-white rounded"
                onClick={() => setConnect(!connect)}
              >
                Connect Me
              </button>
            </div>
            {connect && (
              <div className="flex gap-7 p-3 ml-5">
                <div>
                  <a href="https://github.com/AbdulSamad52556">
                    <Github className="text-white w-5 h-5 cursor-pointer" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/abdul-samad-397364240/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="text-white w-5 h-5 cursor-pointer" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/__.samxd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="text-white w-5 h-5 cursor-pointer" />
                  </a>
                </div>
                
                <div></div>
              </div>
            )}
          </div>
          </div>


        </div>
      </div>
      <div className=" h-[90vh] hidden lg:flex justify-end bg-[#18061d] mr-10 group cursor-pointer">
        <div className="absolute h-[50vh] w-[20vw] bg-[#18061d] border-[#ffffff] duration-300 border-2 rounded-2xl items-center mt-[9%] mr-4 z-0 hover:z-100 hover:group-z-0"></div>
        <div className="absolute h-[50vh] w-[20vw] bg-[#18061d] border-[#ffffff] border-2 rounded-2xl items-center mt-[10%] mr-10 z-0 bg-[url(https://wallpapercave.com/wp/wp13341595.png)] bg-cover bg-center grayscale group-hover:grayscale-0 duration-500"></div>

        <div className="w-[20vw] bg-transparent z-10 ">
          <Canvas>
            <OrbitControls enableZoom={true} />
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 30]} intensity={1.5} />
            <CharacterModel />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Home;
