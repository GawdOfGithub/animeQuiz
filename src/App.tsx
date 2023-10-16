
import './App.css'
import { useMainContext } from './Contexts/MainContext'

export default function App () {
  const {state,dispatch} = useMainContext()     //using the context
  
  return (
    <>
   <div className="items-center justify-center flex flex-col h-screen">
    <div className='text-2xl'> Tailwind context javascript typescript switch mode with context and reducer minimal</div>
    <button onClick={()=>
    dispatch(
      {
        type:"add",
      
      }
    )
    }>+</button>
    <label>{state.number}</label>
    <button  onClick={()=>
    dispatch(
      {
        type:"subtract",
      
      }
    )} >-</button>
    
    </div>
    </>
  )
}


