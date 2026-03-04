import PokemonCard from "./PokemonCard";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function PokeCardList() {
  let [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=504&offset=0")
      .then((data) => data.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  if (pokemonList.length == 0) return <Loading />;

  return (
    <div className={"flex flex-col justify-center items-center"}>
      <h1 className={"font-bold text-white text-3xl mt-3"}>
        {" "}
        YAPPA - Yet Another Pokemon Playground App
      </h1>
      <div
        className={
          "grid grid-cols-1 md: grid-cols-4 xl:grid-cols-8 gap-2 mt-10"
        }
      >
        {pokemonList.map((pokemon, key) => (
          <PokemonCard pokemon={pokemon} key={key} />
        ))}
      </div>
    </div>
  );
}
