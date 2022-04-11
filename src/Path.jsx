
import { AnimatePresence } from "framer-motion";
import { Route, Routes, Switch, useLocation } from "react-router-dom";

import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Home from "./components/Home/Home.jsx";
import Project from "./components/Project/Project.jsx";
import Work from './components/Work/Work.jsx'
import Error from './components/Error/Error.jsx'


export default function Path(){

    const location = useLocation()

    return(

<section>
       <AnimatePresence exitBeforeEnter>
                 <Routes key={location.pathname} location={location}>
              
            
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>"

                    <Route path="/work" element={<Work/>}>
                        <Route path=":workName" element={<Project/>}/>
                        
                    </Route>


                    <Route path="*" element={<Error/>}/>
                </Routes>
        </AnimatePresence>

</section>
        
        


    


    )

}