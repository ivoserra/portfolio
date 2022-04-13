
import {FaPaw} from 'react-icons/fa'                                          
import {BsPaletteFill} from 'react-icons/bs'
import {BsCameraReelsFill} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

import {motion} from 'framer-motion'
import AnimatedPage from '../Animation/AnimatedPage'
import './About.scss'
import portOne from '../../images/ivoOne.png'
import portTwo from '../../images/ivo2.png'
import drawPhoto from '../../images/dphoto.png'
import drawOne from '../../images/drawOne.png'
import drawTwo from '../../images/drawTwo.png' 
 
 
 export default function About(){


    const photoO={hidden: {y:50, opacity:0}, visible:{ y: 0, opacity:1, transition:{type:"spring", duration:1}},exit:{opacity:0, y:50, transition:{type:"tween",duration:0.3}}}
    const photoT={ hidden: {y:100, opacity:0, rotate:8}, visible:{ y: 0, rotate:8, opacity:1, transition:{type:"spring", duration:2}},exit:{opacity:0, y:50, rotate:8, transition:{ type:"tween", duration:0.6}}}
    const photoTh={ hidden: {y:100, opacity:0}, visible:{ y: 0, opacity:1, transition:{type:"spring", duration:3}},exit:{opacity:0, y:50, transition:{type:"tween",duration:0.9}}}
    const photoF={ hidden: {y:100, opacity:0}, visible:{ y: 0, opacity:1, transition:{type:"spring", duration:4}},exit:{opacity:0, y:50, transition:{type:"tween", duration:1.3}}}

    const text={
        hidden:{opacity:0, y:150},
        visible:{ opacity:1, y:0, transition:{type:"tween", duration:0.8}},
        exit:{opacity:0, y:150, transition:{type:"tween", duration:1.5}}
    }
    const textO={
        hidden:{opacity:0, y:150},
        visible:{ opacity:1, y:0, transition:{type:"tween", duration:0.9}},
        exit:{opacity:0, y:150, transition:{type:"tween", duration:1}}
    }
    const textT={
        hidden:{opacity:0, y:150},
        visible:{ opacity:1, y:0, transition:{type:"tween", duration:1}},
        exit:{opacity:0, y:150, transition:{type:"tween", duration:0.5}}
    }

    const link={
        hidden:{opacity:0, y:180},
        visible:{ opacity:1, y:0, transition:{type:"tween", duration:1.2}},
        exit:{opacity:0, y:150, transition:{type:"tween", duration:0.5}}
    }



    return(
        <section className="mainAbout">

                <section className="inner_about">

                        <section className="aboutImage">

                            <section className="photoContainer">
                          
                                    <section className="boxOne">
                                        <motion.img variants={photoO} initial="hidden" animate="visible" exit="exit" src={drawOne} className="drawOne"></motion.img>
                                        <motion.img variants={photoT} initial="hidden" animate="visible" exit="exit" src={portOne} className="imgOne"></motion.img>
                                       
                                    </section>
                                        <motion.img variants={photoTh} initial="hidden" animate="visible" exit="exit" src={drawPhoto} className="imgThree"></motion.img>
                                    <section className="boxTwo">
                                        <motion.img variants={photoTh} initial="hidden" animate="visible" exit="exit" src={portTwo} className="imgTwo"></motion.img>
                                        <motion.img variants={photoF} initial="hidden" animate="visible" exit="exit" src={drawTwo} className="drawTwo"></motion.img>
                                    </section>
                         
                            </section>

                        </section>
                        
                        
                        <section className="aboutText">
                        
                                <section className="aboutTextContent">
                                <motion.section variants={text} animate="visible" initial="hidden" exit="exit">
                                    <section className="about_intro">
                                    <h2>hello reader from the future</h2>
                                        <p>"The translation of Serra from portuguese can mean a small mountain ( I'm 1,62m tall ) or a saw."</p> 
                                        <p>My name is Ivo Serra, Im originally from Lisbon born in 1979 and living in Berlin, Germany since 2011. I have a Bachelor in Visual Arts at AR.CO in Lisbon Portugal and a Master degree in Arts at the University of Arts of Berlin UDK.
                                        For 23 years that I have worked as an Multi disciplinary artist and content creatoron the field of art and visual communication. Leading teams of people and collaborating with others in the context of Art, Festivals, galleries, art and cultural agencies in several countries in Europe and the USA.</p>
                                        <p>In 2021 I started a fullstack program at Digital Career Institute in Berlin and since then my journey in the web-development has been my main focus.</p>
                                    </section>
                                    
                                </motion.section>
                                <motion.section variants={textO} animate="visible" initial="hidden" exit="exit">

                                    <section className="about_statement">
                                        <h2>portfolio</h2>
                                     
                                    </section>
                                    </motion.section>
                                    <motion.section variants={textT} animate="visible" initial="hidden" exit="exit">
                                    <section className="about_hobbies">
                                        <h2>Love</h2>
                                        <p>I love to draw and make collages, playing around with design and mixing medias, my fetish topics are mostly architecture and queer identiy or GAY stuff that end up on my wall or on instagram. I love minimalism and brutalism, I love to laugh, humour(all kinds), dance, pop-culture, underground culture, alternative indy music, meet people, summer barbecues, cook, bike around the city Berlin and swim in lakes in the summer, Im obsessed with cinnamon buns and everything sweet that is made with lemon. </p>
                                    </section>
                                    </motion.section>
                                </section>
                             

                            <motion.section variants={link} initial="hidden" animate="visible" exit="exit">
                                <section className="about_links">
                                    
                                        <section className="about_link">
                                        <a href="https://github.com/ivoserra" target="_blank"><FaGithub className="iconLink"/></a>
                                        <p>webDev repository</p>
                                        </section>
                                        <section className="about_link">
                                        <a href="https://cargocollective.com/ivoserra" target="_blank"><BsPaletteFill className="iconLink"/></a>
                                        <p>art portfolio</p>
                                        </section>
                                        <section className="about_link">
                                        <a href="https://cargocollective.com/ivoserra/video-doc" target="_blank"><BsCameraReelsFill className="iconLink"/></a>
                                        <p>video doc</p>
                                        </section>
                                        <section className="about_link">
                                        <a href="https://www.instagram.com/herrserra/?hl=en" target="_blank"><FaPaw className="iconLink"/></a>
                                        <p>hobby</p>
                                        </section>
                                    
                                </section>
                            </motion.section>

                        </section>
                </section>

           
        </section>
    )
}