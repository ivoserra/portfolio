import { NavLink } from 'react-router-dom'
import Work from './Work/Work.jsx'
import { useContext } from 'react'
import DataContextProvider from './DataContext'
import mountain from '../images/mountainF.png'

import './Header.scss'




export default function Header(){


    return(
        <section className="header">

        <section className='brand'>
        <h1>SERRA</h1>
        <p>M.E.R.N. stack </p>
        
        </section>

        <section className="sub-header">
        <nav className="nav-sub-header">
                <NavLink to="home" className="subLinkOne">home</NavLink>
                <NavLink to="about" className="subLinkTwo">about</NavLink>
                <NavLink to="work" className="subLinkThree">work</NavLink>
        </nav>
        </section>
      

        </section>
    )
}