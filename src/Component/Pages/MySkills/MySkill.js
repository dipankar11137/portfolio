import React from "react";

const MySkill = ({ skill }) => {
  return (
    <div className=" bg-slate-700 hover:bg-indigo-900 shadow-2xl rounded-2xl h-32">
      <div className="flex align-center p-3">
        <img className="w-20 h-24 pt-3 rounded-3xl" src={skill?.img} alt="" />
        <h1 className="pl-3 mt-8 text-3xl font-bold text-white">
          {skill?.name}
        </h1>
      </div>
    </div>
  );
};

export default MySkill;
