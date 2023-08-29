"use client";
import { ReactNode } from "react";

export interface VisualComponentProps {
  children?: ReactNode;
}
export const VisualComponent = ({ children }: VisualComponentProps) => {
  return (
    <div
      className={
        "text-center component bg-slate-800 rounded-md text-white p-4 pt-8 m-4 border border-slate-700 relative mt-4 "
      }
    >
      <span
        key={`${Math.random()}`}
        className="rerender absolute left-3 top-2 text-xs font-bold text-teal-50"
      >
        Rendering
      </span>

      {children}
    </div>
  );
};
export default VisualComponent;
