import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";
import OpenWeatherMap from "./Clima/OpenWeatherMap"

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <OpenWeatherMap />
      <div>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
      </div>
      <div>&#10084;&#65039; {favoritePokemons.length}</div>
    </nav>
  );
};

export default Navbar;