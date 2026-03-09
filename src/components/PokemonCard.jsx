// hooks
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";

// components
import Loading from "./Loading";

// context
import { PokeDetailsContext } from "./context/PokeDetailsContext";

export default function PokemonCard({ pokemon }) {
  let [currentPoke, setCurrentPoke] = useState(null);
  let { setChosePokemon } = useContext(PokeDetailsContext);
  let navigate = useNavigate();

  useEffect(() => {
    fetch(pokemon.url)
      .then((data) => data.json())
      .then((data) => setCurrentPoke(data));
  }, [pokemon.url]);

  function clickHandler() {
    setChosePokemon(currentPoke);
    navigate(`/details`);
  }

  if (!currentPoke) return <Loading />;

  let name =
    currentPoke.name.charAt(0).toUpperCase() + currentPoke.name.substring(1);
  let image = currentPoke.sprites.front_default;

  return (
    <div
      className={`cursor-pointer bg-[url(/pokeDexBackground.jpg)] bg-no-repeat bg-cover bg-center bg-gray-400 w-full h-75 flex flex-col justify-between items-center border-3 rounded-xl hover:scale-120 transition-all ease-in-out shadow-xl/50
        hover:animate-wiggle ;
        `}
      onClick={() => clickHandler()}
    >
      <h1
        className={`font-bold text-white text-2xl bg-gray-600 w-[101%] flex justify-center rounded-t-lg font-[Pokemon-Solid] `}
      >
        {` `}
        {name}
        {` `}
      </h1>
      <img src={image} alt={name} className={`h-50 mb-2`} />
    </div>
  );
}
