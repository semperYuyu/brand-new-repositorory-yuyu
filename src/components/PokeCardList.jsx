
//hooks
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";

//components
import Loading from "./Loading";
import PokemonCard from "./PokemonCard";

//contexts
import { PokeBattleContext } from "./context/PokeBattleContext";

export default function PokeCardList() {
  let [pokemonList, setPokemonList] = useState([]);
  let [input, setInput] = useState("");
  let navigate = useNavigate();
  let { battleList, setBattleList } = useContext(PokeBattleContext);
  console.log(battleList);

  let image1 = battleList[0] ? battleList[0].sprites.front_default : " ";

  let image2 = battleList[1] ? battleList[1].sprites.front_default : " ";

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=504&offset=0`)
      .then((data) => data.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  if (pokemonList.length == 0) return <Loading />;

  let filterPoke = pokemonList.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(input.toLowerCase());
  });

  let changeHandle = (event) => {
    setInput(event.target.value);
  };

  let display = () => {
    console.log(input.length == 0 ? "pokeList" : "filterPOke");
    return input.length == 0 ? pokemonList : filterPoke;
  };

  let battle = () => {
    if (battleList.length != 2) {
      let error = document.querySelector("#error");
      error.innerHTML = "Pick 2 pokemon !";
      console.log("no ! :3");
      return;
    }

    navigate("/battle");
  };

  return (
    <div className={`flex flex-col justify-center items-center m-4`}>
      <h1
        className={`
        font-bold
        text-white
        text-3xl
        mt-3
        bg-linear-to-r from-gray-500 to-amber-500
        rounded-4xl
        p-3
        sticky top-28`}
      >
        {` `}
        YAPPA - Yet Another Pokemon Playground App
      </h1>

      {/* - Search Bar - */}
      <div className={`p-4`}>
        <input
          type="text"
          className={`bg-white rounded-xl border-2 border-gray-900 h-9`}
          placeholder=" Search Pokemon..."
          onChange={changeHandle}
        />
      </div>
      {/* - Search Bar - */}

      <div className={"flex"} id="imageDiv">
        <img id={"poke1"} src={image1} alt="" width={150} />
        <img id={"poke2"} src={image2} alt="" width={150} />
      </div>
      <button
        className={`flex items-center bg-white rounded-xl border-2 border-gray-900 h-8 p-2 hover:cursor-pointer hover:bg-gray-400`}
        onClick={() => setBattleList([])}
      >
        {" "}
        Clear Selections{" "}
      </button>
      <p id="error" className={"font-bold text-red-600 text-2xl"}></p>
      <button
        className={`flex items-center bg-white rounded-xl border-2 border-gray-900 h-8 p-2 mt-1 hover:cursor-pointer hover:bg-gray-400`}
        onClick={battle}
      >
        {" "}
        Do Battle !{" "}
      </button>
      <div
        className={`
          grid
          md: grid-cols-2
          xl:grid-cols-8
          gap-2 mt-10`}
      >
        {display().map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
