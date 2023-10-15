/* eslint-disable */
import React from 'react'
import { useContext,createContext } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import data from '../assets/data'
type Props = {}
const MainContext = createContext(null)
export default function Anime({children}) {
  
  const initialState = {}
  const[number,setNumber] = useState(0)
 const[state,dispatch] = useReducer(handleAnime,initialState)

 function handleAnime(state,action)
 {
  switch(action.type){
  case 0:
    return {
      
    }
  }
 }
{children}
  return (
    <MainContext.Provider value={{number,setNumber}}>
    {children}
    </MainContext.Provider>
  )
}
export function useAnime ()
{
 return useContext(MainContext)
}
/* eslint-disable */