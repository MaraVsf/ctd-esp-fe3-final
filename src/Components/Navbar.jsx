import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const handleThemeToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  return (
    <nav className={state.theme}>
      <Link to="/">Home</Link>
      <Link to="/Favs">Favs</Link>
      <Link to="/Contact">Contact</Link>
      <button onClick={handleThemeToggle}>
        {state.theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
