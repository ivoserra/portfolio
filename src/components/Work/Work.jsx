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
    damping:150,
    }
},}

const item={
  visible:{opacity:1, y:0},
  hidden:{opacity:0, y:-100,}
}

      
    return (
   
     
        <section className="works">
        
        <div className="projects">
       
        <section className="project">
          <li ><h2>HTML / CSS / REACT</h2></li>
          <li className="title_one"><NavLink key="daddesignshop" to="daddesignshop">D.A.D. design shop</NavLink></li>
          <li className="title_two"><NavLink key="barbershop" to="barbershop" >Barbershop Amsterdam</NavLink></li>
          <li className="title_three"><NavLink key="ideascometogether" to="ideascometogether" >Ideas Come Together</NavLink></li>                   
          </section> 
       
        
        <section className='project'>
          <li ><h2>DOM and API</h2></li>
          <li className="title_four"><NavLink key="traveldestination" to="traveldestination">Travel destination</NavLink></li>
          <li className="title_five"><NavLink key="asyncgitrepository" to="asyncgitrepository">Git repository Api</NavLink></li>
        </section>

        <section className="project">
          <li ><h2>REACT</h2></li>
          <li className="title_six"><NavLink key="randompolaroid" to="randompolaroid" >Random Polaroid</NavLink></li>
          <li className="title_seven"><NavLink key="fetchyflicker" to="fetchyflicker" >Fetchy Flicker</NavLink></li>
          <li className="title_eight"><NavLink key="localstoragethemetodos" to="localstoragethemetodos" >Local Storage</NavLink></li>               
        </section>

       

        <section className="project">
          <li ><h2>REACT and express</h2></li>
          <li ><NavLink key="messageboard" to="messageboard">Message Board</NavLink></li>
                      
        </section>
        </div>

        <Outlet/>

        </section>


    

    )
}
