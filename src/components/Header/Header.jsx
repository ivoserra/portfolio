import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import './Header.scss'

const box ={
    hidden:{opacity:0, y:-100,},
    visible:{ opacity:1, y: 0, transition:{type:"tween", duration:1}},
}
  
  const item={
    hidden:{opacity:0, y:-150,},
    visible:{opacity:1, y:0, transition:{type:"tween",duration:1}},
   
  }


export default function Header(){


    return(
       
        <motion.section variants={box} initial="hidden" animate="visible" className="header">
    
                <motion.section variants={item} initial="hidden" animate="visible" className='brand'>
                <h1>SERRA</h1>
                <p>M.E.R.N. stack </p>
                </motion.section>

                <section className="sub-header">
                
                <nav className="nav-sub-header">
                        <NavLink to="/" className="subLinkOne">home</NavLink>
                        <NavLink to="/about" className="subLinkTwo">about</NavLink>
                        <NavLink to="/work" className="subLinkThree">work</NavLink>
                </nav>
                

                </section>
      
        </motion.section>
       
    )
}