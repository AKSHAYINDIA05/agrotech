import './services.scss'
import { motion } from 'framer-motion'

const variants = {
  initial:{
    x:-500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1
    }
  }
}

const Services = () => {
  return (
    <motion.div className='services' variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants} >
        <p>Bridging Nature and<br />Technology in Agriculture.</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants} >
        <div className="title">
          <h1><motion.b whileHover={{color:"#daa520"}}>Green</motion.b> Fields</h1>
        </div>
        <div className="title">
          <h1><motion.b whileHover={{color:"#daa520"}}>Golden</motion.b> Yields</h1>
          {/* <button>What We Do?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants} >
        <motion.div className="box">
          <h2>Lorem, ipsum.</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut cupiditate necessitatibus consectetur culpa itaque quibusdam ducimus corporis debitis fugit neque!</p>
        <button>Go</button>
        </motion.div>
        <motion.div className="box">
          <h2>Lorem, ipsum.</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut cupiditate necessitatibus consectetur culpa itaque quibusdam ducimus corporis debitis fugit neque!</p>
        <button>Go</button>
        </motion.div>
        <motion.div className="box">
          <h2>Lorem, ipsum.</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut cupiditate necessitatibus consectetur culpa itaque quibusdam ducimus corporis debitis fugit neque!</p>
        <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services