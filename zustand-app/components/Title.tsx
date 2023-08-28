"use client"; 
import { titleFromCounterStore } from "@/store/counter.store";

const Title = () => { 
  const  {title}   =  titleFromCounterStore();

  return (
    <h1 key={Math.random()} className="rerender text-center text-2xl mb-8">
      {title}
    </h1>
  );
};

export default Title;
