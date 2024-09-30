import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover="none" }) {
  return (
    <div className={`card1 bg-zinc-800 border-2 p-5 rounded-xl hover:bg-violet-500 ${width} min-h-[30rem] flex flex-col justify-between hover:skew-y-3 skew-y-0`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>sddjsk</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="h111 text-3xl font-medium mt-5 h-10">whatever heading</h1>
      </div>
      <div className="down w-full ">
        {start === true && (
          <>
            <h1 className="text-6xl min-sm-text-xl font-semibold tracking-tight leading-none">
              start project
            </h1>
            <button className="rounded-full py-2 px-5 border-[1px] border-zinc-50 mt-5">
              contact us
            </button>
          </>
        )}
        {
            para && <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p> 
        }
        
      </div>
    </div>
  );
}

export default Card;
