import {useParams} from 'react-router-dom'
import { useContext } from 'react'
import{ BsCodeSquare} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { DataContext } from '../Context/DataContext.jsx'
import { motion} from 'framer-motion'
import './project.scss'
import AnimatedPage from '../Animation/AnimatedPage.jsx'






export default function Project(){

    const { data } =useContext(DataContext)

    const { workName }=useParams()

    const project= data.find(item => item.name === workName)
   
    const header={
        hidden:{opacity:0, y:50},
        visible:{ opacity:1, y:0, transition:{type:"tween", duration:0.5}},
        exit:{opacity:0, y:50, transition:{type:"tween", duration:1.2}}
    }

    const text={
        hidden:{opacity:0, y:150},
        visible:{ opacity:1, y:0, transition:{type:"tween", duration:1}},
        exit:{opacity:0, y:150, transition:{type:"tween", duration:1}}
    }

    const link={
        hidden:{opacity:0, y:180},
        visible:{ opacity:1, y:0, transition:{type:"tween", duration:1.2}},
        exit:{opacity:0, y:150, transition:{type:"tween", duration:0.5}}
    }

    const visual={
        hidden:{opacity:0, y:250},
        visible:{ opacity:1, y:0 , transition:{type:"tween", duration:0.5}},
        exit:{opacity:0, y:150, transition:{type:"tween", duration:0.5}}
    }


    return (
        <AnimatedPage>
       
       
        <section className="main_project">
        <motion.section variants={header} initial="hidden" animate="visible" exit="exit">
        <section className="header_project">
            <h1>{project.title}</h1>
            <p>{project.year}</p>
        </section>
        </motion.section>
        
        <section className="content">
       
        
           <section className="image-container">
           <motion.section variants={visual} initial="hidden" animate="visible" exit="exit">
              {project.video ?  <video  src={project.video.charAt(0)=== '/' ? process.env.PUBLIC_URL + `${project.video}`: project.video} alt={project.name} autoPlay loop/>
            : <img className="projectLogos" src={project.img.charAt(0)==='/'? process.env.PUBLIC_URL + `${project.img}`:project.img} alt={project.name}></img> }
            </motion.section>  
            </section>
          

        
            <section className="description_container">
            <motion.section variants={text} initial="hidden" animate="visible" exit="exit">
                <section className="text">
                    <h2>description</h2>
                    <p>{project.description}</p>
                    <p>Languages: {project.languages}</p>
                    <p>Responsive: {project.responsive}</p>
                    <p>Year: {project.year}</p>
                    <p>Author: {project.author}</p>
                </section>
            </motion.section>

            <motion.section variants={link} initial="hidden" animate="visible" exit="exit">
                <section className="links">
                    
                    <section className="linkBlock">
                        <section className="link">
                        <a href={project.repository} target="_blank"><BsCodeSquare className="iconLink"/></a>
                        <p>repository</p>
                        </section>
                     {project.deploy ?  <section className="link">
                        <a href={project.deploy} target="_blank"><FaGithub className="iconLink"/></a>
                        <p>deployment</p>
                        </section> : null }
                    </section>
                </section>
            </motion.section>
            </section>
          

        </section>
        </section>

        </AnimatedPage>

        
          
       
       

    )
}