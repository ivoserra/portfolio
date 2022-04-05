import { NavLink, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import DataContextProvider, { DataContext } from '../DataContext'

import './work.scss'


export default function Work(){

const {data} = useContext(DataContext)


      
    return ( 
          <section className="workNav">
              {data.map(item => <NavLink key={item.name} to={item.name} >{item.title}</NavLink>)}

              {/* <NavLink to ="dadesignshop">Dad design shop</NavLink>
              <NavLink to="barbershop">BarberShop</NavLink>
              <NavLink to="ideascometogether">Ideas come together</NavLink> */}
              <Outlet/>
          </section>
            
            

    )
}
