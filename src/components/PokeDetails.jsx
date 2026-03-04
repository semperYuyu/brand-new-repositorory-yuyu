import { PokeDetailsContext } from "./context/PokeDetailsContext";
import Loading from "./Loading";

import { useContext, useEffect, useState } from "react";

export default function PokeDetails() {
  let { chosePokemon } = useContext(PokeDetailsContext);
  let [type, setType] = useState([]);
  let [bio, setBio] = useState("");
  console.log(chosePokemon);

  useEffect(() => {
    setType([]);
    fetch(chosePokemon.species.url)
      .then((data) => data.json())
      .then((data) => setBio(data.flavor_text_entries[0].flavor_text));

    chosePokemon.types.forEach((type) => {
      fetch(type.type.url)
        .then((data) => data.json())
        .then((data) => {
          setType((type) => [
            ...type,
            data.sprites["generation-viii"]["sword-shield"].name_icon,
          ]);
        });
    });
  }, []);

  function turnImage() {
    let image = document.querySelector("#bigImage");
    image.src =
      image.src == chosePokemon.sprites.front_default
        ? chosePokemon.sprites.back_default
        : chosePokemon.sprites.front_default;
  }

  console.log(type);
  let name =
    chosePokemon.name.charAt(0).toUpperCase() + chosePokemon.name.substring(1);

  if (bio == "" || type.length == 0) return <Loading />;

  return (
    <div className={"mt-5 flex justify-around"}>
      <div
        className={
          "bg-[url(/pokeCardBackground.gif)] bg-no-repeat bg-cover bg-center bg-gray-400 w-100 h-150 flex flex-col justify-center items-center border-3 rounded-xl shadow-xl/50"
        }
      >
        <h1
          className={
            "font-bold text-white text-2xl bg-gray-800 w-full h-[15%] rounded-4xl border-5 border-black flex justify-center items-center font-[Pokemon-Solid] bg-linear-to-r from-green-500 to-blue-700"
          }
        >
          {" "}
          {name}{" "}
        </h1>
        <img
          id="bigImage"
          src={chosePokemon.sprites.front_default}
          alt={chosePokemon.name}
          width={500}
        />
        <div className={"flex gap-2"}>
          {type.map((sprite) => {
            return (
              <img
                className={"rounded-md"}
                src={sprite}
                alt="type"
                width={150}
              />
            );
          })}
        </div>

        <button
          className={
            "bg-gray-200 w-[20%] rounded-md border-2 mt-2 hover:bg-gray-400"
          }
          onClick={turnImage}
        >
          {" "}
          Turn{" "}
        </button>
      </div>
      <div>
        <div className={"flex flex-col items-center"}>
          <h1 className={"font-bold text-white text-2xl"}> {bio} </h1>
          {chosePokemon.stats.map((stat) => {
            let statNum = stat.base_stat
            let statName = stat.stat.name
            return <h2 className={"font-bold text-white text-2xl"}> {statName}: {statNum} </h2>
          })}
        </div>


        <div className={"mt-10 flex flex-col items-center"}>
          <h2 className={"text-2xl font-bold text-white"}> Moves: </h2>
          <div className={"grid grid-cols-5 grid-"}>
            {chosePokemon.moves.map((move) => {
              return (
                  <h3 className={"bg-gray-400 border-2 border-black rounded-md w-[90%] p-1 m-1 font-bold text-gray-800 self-center text-center"}> {move.move.name} </h3>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
