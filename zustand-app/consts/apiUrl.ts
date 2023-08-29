import { randomRange } from "./postCount";

export const getUrl = ( limit: number) =>{
const startRandom = Math.floor(Math.random() * randomRange);
  return `https://jsonplaceholder.typicode.com/posts?_start=${startRandom}&_limit=${limit}`;
}
  
