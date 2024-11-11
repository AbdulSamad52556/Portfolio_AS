// src/App.js
import React, { useState } from "react";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Blog from "./components/blog";
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [nav, setNav] = useState('Home');
  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 },
  };
  
  const val = (args) => {
    setNav(args);
  };
  
  return (
    <div className=" bg-[#18061d] overflow-hidden">
      <Header props={val} />
      <AnimatePresence mode="wait"> {/* Adds support for exit animations */}
        {nav === 'Home' ? (
          <motion.div
            key="Home"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <Home />
          </motion.div>
        ) : nav === 'About' ? (
          <motion.div
            key="About"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.div>
        ) : nav === 'Services' ? (
          <motion.div
            key="Services"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <Services />
          </motion.div>
        ) : nav === 'Blog' ? (
          <motion.div
            key="Blog"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <Blog />
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
