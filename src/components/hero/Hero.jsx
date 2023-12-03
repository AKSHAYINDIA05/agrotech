import './hero.scss'
import {motion} from 'framer-motion'

const Hero = () => {
    const textvariants = {
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
        },
        scrollButton:{
            y:10,
            opacity:0,
            transition:{
                duration:2, 
                repeat:Infinity
            }
        }
    };
    const sliderVariants = {
        initial:{
            x:0,
        },
        animate:{
            x:"-220%",
            transition:{
                duration:20,
                repeat:Infinity,
                repeatType:"mirror"
            }
        },
    };
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" vaiants={textvariants} initial="initial" animate="animate">
                    <motion.h1 variants={textvariants}>Cultivating the Future of Agriculture</motion.h1>
                    {/* <motion.div className="buttons" variants={textvariants}>
                        <a href='#Contact'><motion.button variants={textvariants}>Contact</motion.button></a>
                    </motion.div> */}
                    <motion.img src='scroll.png' animate="scrollButton" variants={textvariants}/>
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Sustainable Efficient Organic
            </motion.div>
            <div className="imgContainer">
                <img src='/hero.png' />
            </div>
        </div>
    )
}

export default Hero