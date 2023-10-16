import React from "react";
import data from "../assets/data";
import { useAnime } from "../Contexts/MainContext";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
type Props = {};

export default function QuizDisplay({}: Props) {
  const {number,setNumber,dispatch,state,start,setStart} = useAnime()
  return (

    <div>
      <div className="items-center align-center ml-20 mt-10">
        <img src="melancholy.jpeg" alt="anime image" style={{ width: "200px", height: "200px" }} />
      </div>

      <div className="">
        <div className="text-3xl font-bold ml-3 mt-5">{number+1}.{data[number].question}</div>
        <div className="items-center flex flex-col mt-3">
          <button className="text-2xl font-bold w-screen mb-5 rounded-3xl hover:bg-blue-600" onClick={()=>
          {
            dispatch({
              type:number,
              payload:data[number].correct,
               buttonNumber:1
            })
            setNumber(number+1)}}>
            {data[number].options.a}
          </button>
          <button className="text-2xl font-bold w-screen mb-5 rounded-3xl 
          hover:bg-blue-600" onClick={()=>
            {
              dispatch({
                type:number,
                payload:data[number].correct,
                 buttonNumber:2
              })
              setNumber(number+1)}}>
              {data[number].options.b}
          </button>
          <button className="text-2xl font-bold w-screen mb-5 rounded-3xl 
          hover:bg-blue-600" onClick={()=>
            {
              dispatch({
                type:number,
                payload:data[number].correct,
                 buttonNumber:3
              })
              setNumber(number+1)}}>
              {data[number].options.c}
          </button>
          <button className="text-2xl font-bold w-screen mb-2 rounded-3xl hover:bg-blue-600 p-3 
        " onClick={()=>
            {
              dispatch({
                type:number,
                payload:data[number].correct,
                 buttonNumber:4
              })
              setNumber(number+1)}}>
              {data[number].options.d}
          </button>
      <span className='font-bold mb-3' > Your current score : {state.points}</span>
      
        </div>
      </div>
    </div>
  );
}