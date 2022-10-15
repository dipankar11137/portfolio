import React from "react";

const ExpPrj = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-52 w-52 bg-gray-900 hover:rounded-2xl hover:bg-gray-800">
          <h1 className="text-8xl text-center p-4 font-bold text-red-600">0</h1>
          <h3 className="text-xl mx-14 text-slate-300">Years Of Experience</h3>
        </div>
        <div className="h-52 w-52 bg-gray-900 hover:rounded-2xl hover:bg-gray-800">
          {" "}
          <h1 className="text-5xl mt-10 text-center p-4 font-bold text-red-600">
            150 +
          </h1>
          <h3 className="text-xl mx-14 text-slate-300">Happy Clients</h3>
        </div>
        <div className="h-52 w-52 bg-gray-900 hover:rounded-2xl hover:bg-gray-800">
          {" "}
          <h1 className="text-7xl text-center p-4 font-bold text-red-600">
            25+
          </h1>
          <h3 className="text-xl mx-14 text-slate-300">Projects Completed</h3>
        </div>
        <div className="h-52 w-52 bg-gray-900 hover:rounded-2xl hover:bg-gray-800">
          {" "}
          <h1 className="text-7xl text-center p-4 font-bold text-red-600">
            5+
          </h1>
          <h3 className="text-xl mx-14 text-slate-300">Awards Won</h3>
        </div>
      </div>
    </div>
  );
};

export default ExpPrj;
