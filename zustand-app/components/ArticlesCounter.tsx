interface Props {
  count: number;
}
const ArticlesCounter = ({ count }: Props) => {
  return (
    <div key={Math.random()} className="rerender  text-center mb-8">
      {" "}
      Articles showed:{count}{" "}
    </div>
  );
};

export default ArticlesCounter;
