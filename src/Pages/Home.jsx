import React from "react";
import Movies from "../Components/Movies";

const Home = (props) => {
  const data = props.data
  return (
    <div className="overflow-hidden">
    <div className="w-full bg-cyan-400 text-center text-slate-800 font-extrabold mb-5">
    <h1 className="text-5xl py-5">Web Series</h1>
    </div>
      <div className="flex w-full flex-wrap gap-5 p-2 overflow-hidden justify-center">
        {data && data.map((obj,index)=>(<Movies data={obj} idx={index} key={index}/>))}
      </div>
    </div>
  );
};

export default Home;
