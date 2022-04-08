import { NavLink } from 'react-router-dom'
import Work from './Work/Work.jsx'
import { useContext } from 'react'
import DataContextProvider from './DataContext'

import './Header.scss'
import Brand from './Brand/Brand.jsx'



export default function Header(){





    return(
        <section className="header">
        <section className="sub-header">
        <Brand/>
        <nav className="nav-sub-header">
                <NavLink to="home">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact">contact</NavLink>
                <NavLink to="work">work</NavLink>
        </nav>
        </section>
      

        </section>
    )
}