import { NavLink, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import DataContextProvider, { DataContext } from '../DataContext'

import './work.scss'
import AnimatedPage from '../Animation/AnimatedPage.jsx'
import { motion } from 'framer-motion'


export default function Work(){

const {data} = useContext(DataContext)

const box1 ={
  hidden:{opacity:0},
  visible:{
    opacity:1,
  transition:{
    type:"spring",
    damping:100,
    staggerChildren:0.3
  }
},}

const box ={
  hidden:{opacity:0},
  visible:{
    opacity:1,
  transition:{
    type:"spring",
    damping:100,
    staggerChildren:0.5}
},}

const item={
  visible:{opacity:1},
  hidden:{opacity:0},
}

      
    return (
      <>
     
     
        <section className="works">
        {/* <motion.div initial={{opacity:0, y:100}} animate={{ opacity:1, y:0 }} transition={{ type: "spring", stiffness: 50 , duration:2}} className="projects"> */}
        <motion.div initial ="hidden" animate="visible" variants={box1} className="projects">
          <h1> projects</h1>
          <motion.li variants={item} ><NavLink key="randompolaroid" to="randompolaroid">Random Polaroid</NavLink></motion.li>
          <motion.li variants={item} ><NavLink key="barbershop" to="barbershop">Barbershop</NavLink></motion.li>
          <motion.li variants={item} ><NavLink key="ideascometogether" to="ideascometogether">Ideas Come Together</NavLink></motion.li>                   
        
        </motion.div>

        <section className='projects'>
        <motion.div initial ="hidden" animate="visible" variants={box} >
          <h1>HTMLCSS</h1>
          <motion.li variants={item} ><NavLink key="randompolaroid" to="randompolaroid">Random Polaroid</NavLink></motion.li>
          <motion.li variants={item} ><NavLink key="barbershop" to="barbershop">Barbershop</NavLink></motion.li>
          <motion.li variants={item} ><NavLink key="ideascometogether" to="ideascometogether">Ideas Come Together</NavLink></motion.li>         
        </motion.div>
        </section>

        <section className="projects">
          <h1>DOM</h1>
            <NavLink key="randompolaroid" to="randompolaroid">Random Polaroid</NavLink>
            <NavLink key="barbershop" to="barbershop">Barbershop</NavLink>
            <NavLink key="ideascometogether" to="ideascometogether">Ideas Come Together</NavLink>          
        </section>

        <section className="projects">
          <h1>REACT</h1>
            <NavLink key="randompolaroid" to="randompolaroid">Random Polaroid</NavLink>
            <NavLink key="barbershop" to="barbershop">Barbershop</NavLink>
            <NavLink key="ideascometogether" to="ideascometogether">Ideas Come Together</NavLink>          
        </section>


        <section className="projects">
          <h1>MongoDB</h1>
            <NavLink key="randompolaroid" to="randompolaroid">Random Polaroid</NavLink>
            <NavLink key="barbershop" to="barbershop">Barbershop</NavLink>
            <NavLink key="ideascometogether" to="ideascometogether">Ideas Come Together</NavLink>          
        </section>

        
        </section>
      
        <Outlet/>



    

</>
            

    )
}
