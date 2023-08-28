"use client"; 
import { actionsFromCounterStore } from "@/store/counter.store";
import React, { useEffect } from "react";
import { countFromCounterStore } from "@/store/counter.store";
import { postsFromCounterStore } from "@/store/counter.store";
const ArticleList = () => { 
  const   {count} = countFromCounterStore();
  const  {posts}  = postsFromCounterStore();
  const { fetchPosts } = actionsFromCounterStore();

  useEffect(() => { 
    fetchPosts();
  }, [count, fetchPosts]);

 
  return (
    <ul className="rerender" key={Math.random()}>
      {posts &&
        posts.map((post) => (
          <li
            className="p-4 m-2 text-center border hover:bg-slate-900 rounded-lg border-gray-400 p-2text-lg"
            key={post.id}
          >
            <h3 className="text-2xl  text-cyan-700 ">{post.title}</h3>
            <p className=" text-left text-slate-300 text-sm">{post.body}</p>
          </li>
        ))}
    </ul>
  );
};

export default ArticleList;
