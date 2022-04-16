import { NavLink, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import DataContextProvider, { DataContext } from '../Context/DataContext'

import './work.scss'




export default function Work(){

const {data} = useContext(DataContext)


      
    return (
   
     
        <section className="works">
    
        <div className="projects">
       
        <section className="project">

        <li ><h2>Personal Projects</h2></li>
          <li className="title_one"><NavLink key="daddesignshop" to="/work/daddesignshop">D.A.D. design shop</NavLink></li>
          <li className="title_two"><NavLink key="barbershop" to="/work/barbershop" >Barbershop Amsterdam</NavLink></li>
          <li className="title_three"><NavLink key="ideascometogether" to="/work/ideascometogether" >Ideas Come Together</NavLink></li>                   
          </section> 
       
        
        <section className='project'>
          <li ><h2>DOM and API</h2></li>
          <li className="title_four"><NavLink key="traveldestination" to="traveldestination">Travel destination</NavLink></li>
          <li className="title_five"><NavLink key="asyncgitrepository" to="asyncgitrepository">Git repository Api</NavLink></li>
        </section>

        <section className="project">
          <li ><h2>REACT and API</h2></li>
          <li className="title_six"><NavLink key="randompolaroid" to="randompolaroid" >Random Polaroid</NavLink></li>
          <li className="title_seven"><NavLink key="fetchyflicker" to="fetchyflicker" >Fetchy Flicker API</NavLink></li>
          <li className="title_eight"><NavLink key="localstoragethemetodos" to="localstoragethemetodos" >Local Storage</NavLink></li>               
        </section>

       

        <section className="project">
          <li ><h2>Express / MongoDB</h2></li>
          <li className="title_ten"><NavLink key="expressweatherproxy" to="expressweatherproxy">Express weather proxy API</NavLink></li>
          <li className="title_nine"><NavLink key="messageboard" to="messageboard">Message Board</NavLink></li>
          
                      
        </section>
        </div>
       
        <Outlet/>

        </section>


    

    )
}
