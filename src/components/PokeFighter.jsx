//components
import BattleMenu from "./BattleMenu";

export default function PokeFighter({ pokemon, turn }) {
  let img = turn ? pokemon.sprites.back_default : pokemon.sprites.front_default;

  if (turn) {
    return (
      <div className={"flex animate-spawn"}>
        <img src={img} alt={pokemon.name} className={"w-90"} />
        <BattleMenu pokemon={pokemon} id={"player"} textID={"#playerID"} />
      </div>
    );
  } else {
    return (
      <div className={"flex animate-spawn"}>
        <BattleMenu pokemon={pokemon} id={"enemy"} textID={"#enemyID"} />
        <img src={img} alt={pokemon.name} className={"w-90"} />
      </div>
    );
  }
}
