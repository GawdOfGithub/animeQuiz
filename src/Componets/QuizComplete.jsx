import React from 'react'
import { useAnime } from '../Contexts/MainContext'
export default function QuizComplete() {
    const {dispatch,setNumber} = useAnime()
  return (
    <>
    <div>
        <div> 🎊🎊Congrats otaku you have successfully completed the quiz🌟🌟 </div>
        <button onClick={()=>
        {
        dispatch({
            type:"restart",
            payload:0,
        })
        setNumber(0)}}
        
        >Restart Quiz</button>
        <button>Check LeaderBoard</button>
    </div>
    </>
  )
}
