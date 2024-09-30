import React from "react";
import Button from "./Button";
function Product({ val }) {
  return (
    <div className="max-w-screen-xl mx-auto rounded w-full hover:py-24 py-20 text-white relative hover:bg-violet-500 hover:opacity-35">
      <img className="productimg absolute rounded-lg right-1/2 h-[12em] w-[14em] py-10 " src={val.url}/>
      <div className="product1 max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="p dets w-1/3">
          <p className="mb-10 opacity-35	">{val.description}</p>
          <div className="button flex items-center gap-5">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
