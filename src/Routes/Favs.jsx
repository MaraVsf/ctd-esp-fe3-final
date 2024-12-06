import { useContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const {
    state: { favs },
  } = useContextGlobal();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </div>
    </>
  );
};

export default Favs;
