import ArticleList from "./../components/ArticleList";
import Title from "./../components/Title";
import ButtonActions from "./../components/ButtonActions";
import ArticlesCounter from "./ArticlesCounter";

const Main = () => {
  return (
    <main>
      <Title />
      <ButtonActions />
      <ArticlesCounter />
      <ArticleList />
    </main>
  );
};

export default Main;
