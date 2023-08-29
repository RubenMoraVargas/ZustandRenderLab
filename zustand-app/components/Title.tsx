"use client";
import { useCounterStore } from "@/store/counter.store";
import VisualComponent from "./VisualComponent";
 
const Title = () => {  
  const title = useCounterStore((state) => state.title);
  return (
    <VisualComponent> 
    <h1 key={Math.random()} className="text-center text-2xl">
      {title}
    </h1>
    </VisualComponent>
  );
};

export default Title;
