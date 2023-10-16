/* eslint-disable */
import React from 'react'
import { useContext,createContext } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import data from '../assets/data'

type Props = {}
const MainContext = createContext(null)
export default function Anime({children}) {
  
  const initialState = {points:0}
  const[number,setNumber] = useState(0)
  const[start,setStart] = useState(true)
 const[state,dispatch] = useReducer(handleAnime,initialState)

 function handleAnime(state,action)
 {
  
   switch(action.type)
   {
    
    case 0:
    
        if(action.payload == action.buttonNumber)
        {
           return {...state, points:state.points+10}
        }
        else 
        return state 

        case 1:
    
        if(action.payload == action.buttonNumber)
        {
           return {...state, points:state.points+10}
        }
        else 
        return state 
        case 2:
    
        if(action.payload == action.buttonNumber)
        {
           return {...state, points:state.points+10}
        }
        else 
        return state 
        case 3:
    
        if(action.payload == action.buttonNumber)
        {
           return {...state, points:state.points+10}
        }
        else 
        return state 
        case 4:
    
        if(action.payload == action.buttonNumber)
        {
           return {...state, points:state.points+10}
        }
        else 
        return state 
        case 5:
    
        if(action.payload == action.buttonNumber)
        {
           return {...state, points:state.points+10}
        }
        else 
        return state 
        case 6:
    
        if(action.payload == action.buttonNumber)
        {
           return {...state, points:state.points+10}
        }
        else 
        return state 
        case 7:
    
        if(action.payload == action.buttonNumber)
        {
           return {...state, points:state.points+10}
        }
        else 
        return state 
        case 8:
        if(action.payload == action.buttonNumber)
        {
           return {...state, points:state.points+10}
        }
        else 
        return state 
        case 9:
        if(action.payload == action.buttonNumber)
        {
           return {...state, points:state.points+10}
        }
        else 
        return state 
      case "restart":
        return {...state,points:0}
       
      }
   }
 
      
{children}
  return (
    <MainContext.Provider value={{number,setNumber,dispatch,state,start,setStart}}>
    {children}
    </MainContext.Provider>
  )
}
export function useAnime ()
{
 return useContext(MainContext)
}
/* eslint-disable */