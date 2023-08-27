"use client";

import { useEffect } from "react"; 
import { useCounterStore, useCounterFunctions } from "../store/counter.store";

import ArticleList from "./../components/ArticleList";
import Title from "./../components/Title";
import ButtonActions from "./../components/ButtonActions";
import ArticlesCounter from "./ArticlesCounter";

const Main = () => {
  const { count, posts,title } = useCounterStore();
  const { increment, reset, decrement, getPosts } = useCounterFunctions();

  useEffect(() => {
    console.log("useEffect");
    
    getPosts();
  }, [count, getPosts]);

  return (
    <main>
      <Title title={title}/>
      <ButtonActions
        increment={increment}
        reset={reset}
        decrement={decrement} 
      />
      <ArticlesCounter count={count}/>
      <ArticleList posts={posts} />
    </main>
  );
};

export default Main;
