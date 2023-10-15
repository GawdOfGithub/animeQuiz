import React from "react";
import data from "../assets/data";
import { useAnime } from "../Contexts/MainContext";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
type Props = {};

export default function QuizDisplay({}: Props) {
  const {number,setNumber,dispatch,state} = useAnime()
  return (
    <div>
      <div className="items-center align-center ml-20">
        <img src="melancholy.jpeg" alt="anime image" style={{ width: "200px", height: "200px" }} />
      </div>

      <div className="">
        <div className="text-2xl font-bold ml-3">{data[number].question}</div>
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
          <button className="text-2xl font-bold w-screen mb-5 rounded-3xl 
          hover:bg-blue-600" onClick={()=>
            {
              dispatch({
                type:number,
                payload:data[number].correct,
                 buttonNumber:4
              })
              setNumber(number+1)}}>
              {data[number].options.d}
          </button>
        {state.points}
       { number>0 ? (<button className="px-12" onClick={()=>setNumber(number-1)} ><ArrowBackIcon/>Previous Question</button>) :null}

        </div>
      </div>
    </div>
  );
}