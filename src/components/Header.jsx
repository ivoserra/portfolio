import { NavLink } from 'react-router-dom'
import Work from './Work/Work.jsx'
import { useContext } from 'react'
import DataContextProvider from './DataContext'

import './Header.scss'



export default function Header(){





    return(
        <nav>
                <NavLink to="home">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact">contact</NavLink>
                <NavLink to="work">work</NavLink>
                <NavLink to="play">play</NavLink>
        </nav>
    )
}