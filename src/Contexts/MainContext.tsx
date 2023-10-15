/* eslint-disable */
import React from 'react'
import { useContext,createContext } from 'react'
import { useState } from 'react'
type Props = {}
const MainContext = createContext(null)
export default function Anime({children}: Props) {
const[timer,setTimer] = useState(1)
{children}
  return (
    <MainContext.Provider>
    {children}
    </MainContext.Provider>
  )
}
export function useAnime ()
{
 useContext(MainContext)
}
/* eslint-disable */