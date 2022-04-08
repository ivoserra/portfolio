import { NavLink, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import DataContextProvider, { DataContext } from '../DataContext'

import './work.scss'
import AnimatedPage from '../Animation/AnimatedPage.jsx'
import { motion } from 'framer-motion'


export default function Work(){

const {data} = useContext(DataContext)



const box ={
  hidden:{opacity:0},
  visible:{
    opacity:1,
  transition:{
    type:"spring",
    damping:100,
    staggerChildren:0.2}
},}

const item={
  visible:{opacity:1, y:0},
  hidden:{opacity:0, y:100,}
}

      
    return (
   
     
     
        <section className="works">
        {/* <motion.div initial={{opacity:0, y:100}} animate={{ opacity:1, y:0 }} transition={{ type: "spring", stiffness: 50 , duration:2}} className="projects"> */}
        <motion.div initial ="hidden" animate="visible" variants={box} className="projects">
        
        <section className="project">
          <motion.li variants={item} ><h1>projects</h1></motion.li>
          <motion.li variants={item} className="title_one"><NavLink key="daddesignshop" to="daddesignshop">D.A.D. design shop</NavLink></motion.li>
          <motion.li variants={item} className="title_two"><NavLink key="barbershop" to="barbershop" >Barbershop Amsterdam</NavLink></motion.li>
          <motion.li variants={item} className="title_three"><NavLink key="ideascometogether" to="ideascometogether" >Ideas Come Together</NavLink></motion.li>                   
          </section> 
       
        
        <section className='project'>
          
          <motion.li variants={item} ><h2>Bootstraps SCSS</h2></motion.li>
          <motion.li variants={item} className="title_four"><NavLink key="bennyburger" to="bennyburger" >Mock Benny Burger</NavLink></motion.li>
          <motion.li variants={item} ><h2>DOM and API</h2></motion.li>
          <motion.li variants={item} className="title_five"><NavLink key="traveldestination" to="traveldestination">Travel destination</NavLink></motion.li>
          <motion.li variants={item} className="title_six"><NavLink key="asyncgitrepository" to="asyncgitrepository">Git repository Api</NavLink></motion.li>
        </section>

        <section className="project">
          <motion.li variants={item} ><h2>REACT</h2></motion.li>
          <motion.li variants={item} className="title_seven"><NavLink key="randompolaroid" to="randompolaroid" >Random Polaroid</NavLink></motion.li>
          <motion.li variants={item} className="title_eight"><NavLink key="fetchyflicker" to="fetchyflicker" >Fetchy Flicker</NavLink></motion.li>
          <motion.li variants={item} className="title_nine"><NavLink key="localstoragethemetodos" to="localstoragethemetodos" >Local Storage</NavLink></motion.li>               
        </section>

       

        <section className="project">
          <motion.li variants={item}><h2>REACT and express</h2></motion.li>
          <motion.li variants={item} ><NavLink key="messageboard" to="messageboard">Message Board</NavLink></motion.li>
          <motion.li variants={item} ><NavLink key="fetchyflicker" to="fetchyflicker">Barbershop</NavLink></motion.li>
          <motion.li variants={item} ><NavLink key="localstoragethemetodos" to="localstoragethemetodos">Ideas Come Together</NavLink></motion.li>                    
        </section>
        </motion.div>

        <Outlet/>

        </section>


    

    )
}
