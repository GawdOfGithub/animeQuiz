import React from 'react'
import { useAnime } from '../Contexts/MainContext'
export default function QuizComplete() {
    const {dispatch,setNumber,state} = useAnime()
  return (
    <>
    <div className= "flex flex-col justify-start items-center" >
        <div>
        <img className="mb-4 ml-10"src="QuizOver.jpeg" style={{ width: "300px", height: "300px" }}/>
        </div>
        <div className='text-3xl ml-12 '><span className='mt-5'>Congrats Otaku you have completed the quiz🎊🎊</span> <span className='ml-28 mt-20 font-bold text-5xl '>🌟🌟🌟</span></div>


        <label className='text-2xl font-bold text-cyan-400  mb-5 ml-5rounded-3xl hover:bg-red-600'>You scored {state.points} points cheers</label>
        <button className='text-2xl font-bold w-screen mb-5 rounded-3xl mt-5 hover:bg-blue-600' onClick={()=>
        {
        dispatch({
            type:"restart",
            payload:0,
        })
        setNumber(0)}}
        
        >Restart Quiz</button>
        <button className='text-2xl font-bold w-screen mb-5 rounded-3xl hover:bg-blue-600'>Check LeaderBoard</button>
        
    </div>
    </>
  )
}
