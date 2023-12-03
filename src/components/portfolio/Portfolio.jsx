import { useRef } from 'react';
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "Lorem Ipsum",
        img: "https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=1200",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum voluptate delectus sit in totam consequatur veritatis harum, laboriosam atque quos nulla cum! Cupiditate laudantium quibusdam alias sint voluptate hic, tempore ratione itaque!"
    },
    {
        id: 2,
        title: "Lorem Ipsum",
        img: "https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=1200",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum voluptate delectus sit in totam consequatur veritatis harum, laboriosam atque quos nulla cum! Cupiditate laudantium quibusdam alias sint voluptate hic, tempore ratione itaque!"
    },
    {
        id: 3,
        title: "Lorem Ipsum",
        img: "https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=1200",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum voluptate delectus sit in totam consequatur veritatis harum, laboriosam atque quos nulla cum! Cupiditate laudantium quibusdam alias sint voluptate hic, tempore ratione itaque!"
    },
    {
        id: 4,
        title: "Lorem Ipsum",
        img: "https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=1200",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum voluptate delectus sit in totam consequatur veritatis harum, laboriosam atque quos nulla cum! Cupiditate laudantium quibusdam alias sint voluptate hic, tempore ratione itaque!"
    },
]

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset:["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [-600, 600]);
    return <section id='Services'>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>

                    <img src={item.img} />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                </motion.div>
            </div>
        </div>
    </section>;
}

const Portfolio = () => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })
    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Our Services</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressbar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio