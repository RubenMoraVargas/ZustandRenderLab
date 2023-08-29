"use client";
import { useCounterStore } from "@/store/counter.store";
import VisualComponent from "./VisualComponent";

const ArticlesCounter = () => {
  const count = useCounterStore((state) => state.count);
  return (
    <VisualComponent>
    <div key={Math.random()} className="text-center">
      Articles showed:{count}
    </div>
     </VisualComponent>
  );
};

export default ArticlesCounter;
