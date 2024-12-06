import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const {
    state: { chars },
  } = useContextGlobal();
  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {chars.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </div>
    </main>
  );
};

export default Home;
