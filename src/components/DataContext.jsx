import React from 'react'
import { useState } from 'react'
import data from '../Data/data.js'



export const DataContext = React.createContext(null)


export default function DataContextProvider(props){




  

    const contextData = { data }
  
  
    return(
        <DataContext.Provider value={contextData}>
            {props.children}
        </DataContext.Provider>
    )
}