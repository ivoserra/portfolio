import {Outlet, useParams} from 'react-router-dom'
import { useContext } from 'react'
import{ BsCodeSquare} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { DataContext } from '../DataContext.jsx'
import { AnimatePresence, motion} from 'framer-motion'
import './project.scss'
import AnimatedPage from '../Animation/AnimatedPage.jsx'






export default function Project(){

    const { data } =useContext(DataContext)

    const { workName }=useParams()

    const project= data.find(item => item.name === workName)
   


    return (
        <AnimatedPage>
       
        <section className="main_project">
        
        <section className="header_project">
            <h1>{project.title}</h1>
            <p>{project.year}</p>
        </section>
        
        
        <section className="content">
       
           <section className="image-container">
              {project.video ?  <video  src={project.video.charAt(0)=== '/' ? process.env.PUBLIC_URL + `${project.video}`: project.video} alt={project.name} autoPlay loop/>
            : null }
            </section>
 
            <section className="description_container">
                <section className="text">
                    <h2>description</h2>
                    <p>{project.description}</p>
                    <p>Languages: {project.languages}</p>
                    <p>Responsive: {project.responsive}</p>
                    <p>Year: {project.year}</p>
                    <p>Author: {project.author}</p>
                </section>


                <section className="links">
                    <h2>Project links</h2>
                    <section className="linkBlock">
                        <section className="link">
                        <a href={project.repository} target="_blank"><BsCodeSquare className="iconLink"/></a>
                        <p>repository</p>
                        </section>
                        <section className="link">
                        <a href={project.deploy} target="_blank"><FaGithub className="iconLink"/></a>
                        <p>deployment</p>
                        </section>
                    </section>
                </section>
            </section>
          

        </section>
        </section>

        </AnimatedPage>

        
          
       
       

    )
}