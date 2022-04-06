import { AnimatePresence } from "framer-motion";
import { Route, Routes, Switch, useLocation } from "react-router-dom";

import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Project from "./components/Project/Project.jsx";
import Work from './components/Work/Work.jsx'


export default function Path(){

    const location = useLocation()

    return(

<section>
        {/* <AnimatePresence exitBeforeEnter> */}
                {/* <Routes key={location.pathname} location={location}> */}
                <Routes>
            
                    <Route path="home" element={<p>home</p>}/>
                    <Route path="about" element={<About/>}/>"
                    <Route path ="contact" element ={<Contact/>}/>
                    <Route path="play" element ={<p>play</p>}/>
                

                    
                    <Route path="work" element={<Work/>}>
                        <Route path=":workName" element={<Project/>}/>
                    </Route>


                    <Route path="*" element={<p>pagenotfound</p>}/>
                </Routes>
        {/* </AnimatePresence> */}

</section>
        
        


    


    )

}