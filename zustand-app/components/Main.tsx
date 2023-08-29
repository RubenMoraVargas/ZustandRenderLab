import ArticleList from "./../components/ArticleList";
import Title from "./../components/Title";
import ButtonActions from "./../components/ButtonActions";
import ArticlesCounter from "./ArticlesCounter";
import Navbar from "./Navbar";

export const Main = () => {
  return (
    <main>
      <Navbar />
      <div className="mt-32 md:mt-24">
      <Title />
      <ButtonActions />
      <ArticlesCounter />
      <ArticleList />
         </div>
    </main>
  );
};

export default Main;
