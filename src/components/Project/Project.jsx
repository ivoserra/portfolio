import {NavLink, useParams} from 'react-router-dom'
import { useContext } from 'react'

// import data from '../../Data/data.js'

import './project.scss'
import { DataContext } from '../DataContext.jsx'
import Work from '../Work/Work.jsx'


export default function Project(){

    const { data } =useContext(DataContext)

    const { workName }=useParams()

    const project= data.find(item => item.name === workName)
   





    return (
        <section className="container">
        
            <h1>{project.title}</h1>
            <h2>{project.year}</h2>
            <span>{project.languages}</span>


        </section>

       
       

    )
}