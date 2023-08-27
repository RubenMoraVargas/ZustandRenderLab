interface Props{
    title:string;
}
  
const Title =  ({title}:Props) =>  {
  console.log("load Title");
  return (
    <h1  key={Math.random()} className="rerender text-center text-2xl mb-8">{title}</h1>
  )
} 

export default Title
