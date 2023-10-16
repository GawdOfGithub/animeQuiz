import React from 'react'
import { useAnime } from '../Contexts/MainContext'
export default function () {
    const {start,setStart} = useAnime()
  return (
    <>
    <div className='flex flex-col justify-center items-center ' >
      <div>
    <img src='waifu3.jpeg' style={{width:"200px",height:"200px"}}/>
    </div>
    <div className='font-bold text-2xl'>Check how much of an Anime lover you are by taking this 🐻‍❄️ <span className='text-red-600'  style={{ marginLeft: '3.0rem' }}> simple Anime quiz</span></div>
    <div>
    <button className="text-2xl font-bold w-screen mb-5 rounded-3xl mt-4
          hover:bg-blue-600" onClick={()=>setStart(false)}>Start the quiz</button>
          </div>
          </div>
    </>
  )
}
