"use client";
import { useCounterStore } from "@/store/counter.store";
import { useEffect } from "react";
import VisualComponent from "./VisualComponent";

const ArticleList = () => {
  const count = useCounterStore((state) => state.count);
  const posts = useCounterStore((state) => state.posts);
  const fetchPosts = useCounterStore((state) => state.fetchPosts);

  useEffect(() => {
    fetchPosts();
  }, [count, fetchPosts]);

  return (
    <VisualComponent>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div
          className="p-4 text-center border hover:bg-slate-900 rounded-lg border-gray-400 text-lg"
          key={post.id}
        >
          <h3 className="text-2xl text-cyan-700 truncate ">{post.title}</h3>
          <p className="mt-2 text-left text-slate-300 text-sm ">{post.body}</p>
        </div>
      ))}
    </div>
     </VisualComponent>
  );
};

export default ArticleList;
