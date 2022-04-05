import { Route, Routes } from "react-router-dom";

import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Project from "./components/Project/Project.jsx";
import Work from './components/Work/Work.jsx'


export default function Path(){


    return(
        <Routes>
            <Route index element={<div/>}/>
            <Route path="about" element={<About/>}/>"
            <Route path ="contact" element ={<Contact/>}/>
            <Route path="play" element ={<p>play</p>}/>


            <Route path="work" element={<Work/>}>
                <Route index element={<p>projectpage</p>}/>
                <Route path=":workName" element={<Project/>}/>
            </Route>


            <Route path="*" element={<p>pagenotfound</p>}/>
        </Routes>
    )

}