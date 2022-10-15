import React from "react";

import Zoom from "react-reveal/Zoom";

const MySkill = ({ skill }) => {
  return (
    <Zoom>
      <div className=" bg-slate-800 hover:bg-red-900 shadow-2xl rounded-2xl h-32">
        <div className="flex align-center p-3">
          <img className="w-20 h-24 pt-3 rounded-3xl" src={skill?.img} alt="" />
          <h1 className="pl-3 mt-9 text-xl font-bold text-white">
            {skill?.name}
          </h1>
        </div>
      </div>
    </Zoom>
  );
};

export default MySkill;
