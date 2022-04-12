
import './home.scss'
import mount from '../../images/Mount.png'
import cloud from '../../images/cloud.png'

import { motion } from 'framer-motion'

export default function Home(){

    const serra = {
        hidden:{opacity:0, y:50},
        visible:{ opacity:1, y:0, transition:{type:"tween", duration:1}},
        exit:{opacity:0, y:30, transition:{type:"tween", duration:1}}
    }

    const title={
        hidden:{opacity:0, y:-50},
        visible:{ opacity:1, y:0, transition:{type:"tween", duration:3}},
        exit:{opacity:0, y:-50, transition:{type:"tween", duration:1}}
    }

    return (
   
        <section className='Hero'>
        <motion.section variants={title} initial="hidden" animate="visible" exit="exit">
            <p>["hello world!"]</p>
        </motion.section>

           <motion.section variants={serra} initial="hidden" animate="visible" exit="exit">
            <section className='Hero_image'>
                <img src={mount} className="mountain"></img>
                <img className="cloud" src={cloud}></img>
                <img className="cloudOne" src={cloud}></img>
                <img></img>
            </section>
            </motion.section>
        </section>
        
    )
}