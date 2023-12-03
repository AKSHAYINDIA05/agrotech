import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"])
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "500%"])

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #A7D7C5, #F4F9F4)"
            : "linear-gradient(180deg, #654321, rgb(89, 69, 50))",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="landscape" style={{backgroundImage: `url(${type==="services"?"mountains3.png":"landscape1.png"})`, 
        }}></motion.div>
      {/* <motion.div className="planets" style={{y:yBg, backgroundImage: `url(${type==="services"?"planets.png":"sun.png"})`}}></motion.div> */}
      <motion.div style={{x:yBg}} className="drops">
        <motion.div className="drop"></motion.div>
        <motion.div className="drop"></motion.div>
        <motion.div className="drop"></motion.div>
        <motion.div className="drop"></motion.div>
        <motion.div className="drop"></motion.div>
        <motion.div className="drop"></motion.div>
        <motion.div className="drop"></motion.div>
        <motion.div className="drop"></motion.div>
      </motion.div>
    </div>
  );
};

export default Parallax;