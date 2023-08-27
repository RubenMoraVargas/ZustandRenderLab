import { Post } from "@/app/typings";
import React from "react"; 


interface Props {
    posts: Post[];
}
const ArticleList = ({posts}:Props) => {
  console.log("load ArticleList");
  return ( 
      <ul className="rerender"  key={Math.random()}>
      {posts &&
        posts.map((post) => (
            <li className="p-4 m-2 text-center border hover:bg-slate-900 rounded-lg border-gray-400 p-2text-lg"  key={post.id}>
             <h3 className="text-2xl  text-cyan-700 ">{post.title}</h3> 
              <p className=" text-left text-slate-300 text-sm">{post.body}</p>
            </li>
        ))}
          </ul>
    
  );
};

export default ArticleList;
