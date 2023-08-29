"use client";
import { useCounterStore } from "@/store/counter.store";
import {
  RiRefreshLine,
  RiAddCircleLine,
  RiIndeterminateCircleLine,
  RiArrowUpCircleLine,
} from "react-icons/ri";
import VisualComponent from "./VisualComponent";
import { minPostCount, maxPostCount } from "@/consts/postCount";

const style = { color: "white", fontSize: "1.5em", marginRight: "0.5em" };
function ButtonActions() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const reset = useCounterStore((state) => state.reset);
  
  const decrement = useCounterStore((state) => state.decrement);
  const changeTitle = useCounterStore((state) => state.changeTitle);

  const disableDecrement = (count<= minPostCount) ? "cursor-not-allowed" : "";
  const disableIncrement = (count>= maxPostCount) ? "cursor-not-allowed" : "";
 
  return (
    <VisualComponent>
      <div
        key={Math.random()}
        className="md:flex justify-center  shadow-sm"
        role="group"
      >
        <button
          type="button"
          className={`inline-flex ${disableDecrement} items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 md:rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700`}
          onClick={() => {
            decrement(3);
          }}
        >
          <RiIndeterminateCircleLine style={style} color="white" />
          Show 3 less
        </button>
        <button
          type="button"
          className={`inline-flex ${disableIncrement} items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700`}
          onClick={() => {
            increment(3);
          }}
        >
          <RiAddCircleLine style={style} />
          Show 3 more
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900   hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          onClick={() => {
            reset();
          }}
        >
          <RiRefreshLine style={style} />
          Reset
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 md:rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          onClick={() => {
            changeTitle();
          }}
        >
          <RiArrowUpCircleLine style={style} />
          Change title
        </button>
      </div>
    </VisualComponent>
  );
}

export default ButtonActions;
