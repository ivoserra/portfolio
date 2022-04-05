import { NavLink } from 'react-router-dom'
import Work from './Work/Work.jsx'
import { useContext } from 'react'
import DataContextProvider from './DataContext'



export default function Header(){





    return(
        <nav>
            <ul>
                <li><NavLink to="home">Home</NavLink></li>
                <li><NavLink to="about">About</NavLink></li>
                <li><NavLink to="contact">contact</NavLink></li>
                <li><NavLink to="work">work</NavLink></li>
                <li><NavLink to="play">play</NavLink></li>
            </ul>

            
        </nav>
    )
}