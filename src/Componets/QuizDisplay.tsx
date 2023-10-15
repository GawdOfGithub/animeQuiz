import React from "react";
import data from "../assets/data";

type Props = {};

export default function QuizDisplay({}: Props) {
  return (
    <div>
    <div className="items-center align-center ml-20">
      <img src="sasuke.svg" alt="anime image" style={{ width: "200px", height: "200px" }} />
      </div>
      <div className="">
        {data.map((item, index) => (
          <div key={index}>
            <div className="text-2xl font-bold ml-3">{item.question}</div>
            <div className="items-center flex flex-col mt-3">
            <button className="text-2xl font-bold w-screen mb-5 rounded-3xl hover:bg-blue-600">{item.options.a}</button>
            <button className="text-2xl font-bold w-screen mb-5 rounded-3xl  hover:bg-blue-600">{item.options.b}</button>
            <button className="text-2xl font-bold w-screen mb-5 rounded-3xl  hover:bg-blue-600">{item.options.c}</button>
            <button className="text-2xl font-bold w-screen mb-5 rounded-3xl  hover:bg-blue-600">{item.options.d}</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
