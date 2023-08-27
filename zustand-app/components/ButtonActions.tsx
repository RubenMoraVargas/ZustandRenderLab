import React from "react";
import { RiRefreshLine, RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri";

interface Props {
  decrement: (value: number) => void;
  increment: (value: number) => void;
  reset: () => void; 
}
const style = { color: "white", fontSize: "1.5em", "marginRight": "0.5em" };
function ButtonActions({ decrement, increment, reset }: Props) {
  console.log("load ButtonActions");
  return (
     
      <div  key={Math.random()} className=" rerender flex justify-center rounded-md shadow-sm mb-8" role="group">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          onClick={() => {
            decrement(3);
          }}
        >
          <RiIndeterminateCircleLine style={style} color="white" />
          Show 3 less
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          onClick={() => {
            increment(3);
          }}
        >
          <RiAddCircleLine style={style} />
          Show 3 more
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          onClick={() => {
            reset();
          }}
        >
          <RiRefreshLine style={style} />
          Reset
        </button>
      </div>
      
 
  );
}

export default ButtonActions;
