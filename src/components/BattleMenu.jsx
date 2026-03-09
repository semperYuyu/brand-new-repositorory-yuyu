// contexts
import { PokeHpContext } from "./context/PokeHpContext";
// hooks
import { useContext } from "react";

export default function BattleMenu({ pokemon, id, textID }) {
  let { playerHP, enemyHP } = useContext(PokeHpContext);

  let hp = id == "player" ? playerHP : enemyHP;
  return (
    <div>
      <div
        className={
          "font-bold text-xl border-2 bg-white w-100 h-25 flex flex-col justify-center items-center rounded-2xl animate-spawn-slow"
        }
      >
        <h1> {pokemon.name} </h1>
        <div
          className={
            "bg-green-600 w-75 flex items-center justify-center rounded-2xl border-2"
          }
        >
          <h1 className={""}>
            {hp}/{hp}
          </h1>
        </div>
      </div>

      <p id={textID}></p>
    </div>
  );
}
