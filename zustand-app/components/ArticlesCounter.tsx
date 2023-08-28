"use client"; 
import { countFromCounterStore } from "@/store/counter.store";

const ArticlesCounter = () => { 
  const   {count}   = countFromCounterStore();

  return (
    <div key={Math.random()} className="rerender  text-center mb-8">
      Articles showed:{count}
    </div>
  );
};

export default ArticlesCounter;
