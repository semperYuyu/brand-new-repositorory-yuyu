//contexts
import { PokeBattleContext } from "./context/PokeBattleContext";
import { PokeHpContext } from "./context/PokeHpContext";

//components
import PokeFighter from "./PokeFighter";

//hoooks
import { useNavigate } from "react-router";
import { useContext } from "react";

export default function PokeBattle() {
  let { battleList } = useContext(PokeBattleContext);
  let nav = useNavigate();
  let player = battleList[1];
  let enemy = battleList[0];

  battleList[1].type = "player";
  battleList[0].type = "enemy";
  // above two lines are necessary, ignore red lines they work as intended

  let { playerHP, setPlayerHP } = useContext(PokeHpContext);
  let { enemyHP, setEnemyHP } = useContext(PokeHpContext);
  let pokeEnemyHP = enemy.stats[0].base_stat || 0;
  let pokePlayerHP = player.stats[0].base_stat || 0;
  setPlayerHP(pokePlayerHP);
  setEnemyHP(pokeEnemyHP);

  setTimeout(() => {
    let music = document.querySelector("#Battle");
    music.volume = 0.2;
  }, 1000);

  setTimeout(() => {
    nav("/noBattle");
  }, 6000);

  return (
    <div
      className={
        "animate-scene-start h-183 flex flex-col justify-center items-center bg-[url('/battleScene.png')] bg-center bg-no-repeat bg-cover"
      }
    >
      {battleList.map((pokemon) => {
        if (pokemon.type == "player") {
          return (
            <div
              className={
                "w-[70%] flex justify-start items-start animate-fade-slow"
              }
            >
              <PokeFighter id="player" pokemon={player} turn={true} />
            </div>
          );
        } else {
          return (
            <div
              className={
                "w-[75%] h-[70%] flex justify-end items-start mt-40 animate-fade-slow"
              }
            >
              <PokeFighter id="enemy" pokemon={enemy} />
            </div>
          );
        }
      })}
      <audio id="Battle" autoPlay hidden loop>
        <source src="/battleMusic.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}
