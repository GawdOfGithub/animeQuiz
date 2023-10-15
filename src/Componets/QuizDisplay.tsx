import React from "react";
import data from "../assets/data";
import { useAnime } from "../Contexts/MainContext";
type Props = {};

export default function QuizDisplay({}: Props) {
  const {number,setNumber} = useAnime()
  return (
    <div>
      <div className="items-center align-center ml-20">
        <img src="sasuke.svg" alt="anime image" style={{ width: "200px", height: "200px" }} />
      </div>

      <div className="">
        <div className="text-2xl font-bold ml-3">{data[number].question}</div>
        <div className="items-center flex flex-col mt-3">
          <button className="text-2xl font-bold w-screen mb-5 rounded-3xl hover:bg-blue-600" onClick={()=>
          {
            dispatch({
              type:number,
              payload:data[number].correct,

            })
            setNumber(number+1)}}>
            {data[number].options.a}
          </button>
          <button className="text-2xl font-bold w-screen mb-5 rounded-3xl hover:bg-blue-600">
            {data[number].options.b}
          </button>
          <button className="text-2xl font-bold w-screen mb-5 rounded-3xl hover:bg-blue-600">
            {data[number].options.c}
          </button>
          <button className="text-2xl font-bold w-screen mb-5 rounded-3xl hover:bg-blue-600">
            {data[number].options.d}
          </button>
        </div>
      </div>
    </div>
  );
}ff
efefefefefefewfewfwefwefweffw