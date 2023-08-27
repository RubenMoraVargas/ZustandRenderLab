import React from 'react'
 interface Props {
    title:string  
 }
const Rendering = ({ title = 'Component'}:Props) => {
    console.log(`load Rendering ${title}`);
  return (
    <span key={`${title}-${Math.random()}`} className="rerender absolute left-3 top-2 text-xs font-bold text-teal-50">
    Rendering
  </span>
  )
}

export default Rendering
