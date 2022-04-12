
import {FaPaw} from 'react-icons/fa'                                          
import {BsPaletteFill} from 'react-icons/bs'
import {BsCameraReelsFill} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

import './About.scss'
import portOne from '../../images/ivoOne.png'
import portTwo from '../../images/ivo2.png'
import dPhoto from '../../images/dphoto.png'
 
 
 
 export default function About(){


    return(
        <section className="mainAbout">

                <section className="inner_about">

                        <section className="aboutImage">
                            <section className="photoContainer">
                              
                                <img src={portOne} className="imgOne"></img>
                                <img src={dPhoto} className="imgThree"></img>
                                <img src={portTwo} className="dPhoto"></img>
                                  
                            </section>

                        </section>

                        <section className="aboutText">
                                <section className="aboutTextContent">
                            
                                    <section className="about_intro">
                                    <h2>hello reader from the future</h2>
                                        <p>"The translation of Serra from portuguese can mean a small mountain ( I'm 1,62m tall ) or a saw."</p> 
                                        <p>My name is Ivo Serra, Im originally from Lisbon born in 1979 and living in Berlin, Germany since 2011. I have a Bachelor in Visual Arts at AR.CO in Lisbon Portugal and a Master degree in Arts at the University of Arts of Berlin UDK.</p>
                                        <p>For 23 years that I have worked as an Multi disciplinary content creator. Leading teams of people and collaborating with others in the context of Art, Festivals, galleries and art agencies in several countries in Europe and the USA.</p>
                                      
                                    </section>

                                    <section className="about_statement">
                                        <h2>statement</h2>
                                        <p>I am an efficient, creative and confident queer man with great passion for web-development and design. Consistently demonstrating experience in content creation and innovation in the fields of visual communication, video archives in art and culture. </p>
                                        <p>My curiosity and enthusiasm are my driving force to gain more skills and to have more knowledge. This has leaded me to work and collaborate internationally with amazing projects, teams and non-profit organizations.</p>
                                        
                                        <p>Its April 2022 and Im almost graduating from Digital career Institute aka DCI in Berlin. It has been an amazing experience and Web development is a huge mountain that im surely happy to keep climbing up and to continuously progressing and learn !</p>
                                    </section>
                                    
                                    <section className="about_hobbies">
                                        <h2>hobbies</h2>
                                        <p>At my core I truly believe Im a caring creative person, I love creative thinking processes and to bring some sense of joy to people' lives.</p>
                                        <p>I like to draw and design, nowadays my hobbies are mostly on topics of queer identiy or GAY stuff that end up on my wall or on instagram. I mostly work with drawings and collages, archival materials like photos and videos.</p>
                                    </section>

                                    
                                </section>

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

                        </section>
                </section>
        </section>
    )
}