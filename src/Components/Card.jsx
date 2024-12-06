import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

const Card = ({ name, username, id, char }) => {
  const { dispatch, state } = useContextGlobal();

  const findFav = state.favs.some((fav) => fav.id === char.id);
  console.log(findFav);

  const toggleFav = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: char });
  };

  return (
    <div className="card">
      <Link to={`../Detail/${char.id}`}>
        <img src="images/doctor.jpg" alt="doctor" />
        <h3>{char.name}</h3>
        <h4>{char.username}</h4>
        <h4>{char.id}</h4>
      </Link>

      <button onClick={toggleFav} className="favButton">
        {findFav ? "🌟" : "⭐"}
      </button>
    </div>
  );
};

export default Card;
