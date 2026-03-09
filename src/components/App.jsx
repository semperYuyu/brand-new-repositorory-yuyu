// styles
import "../styles/App.css";

// components
import Loading from "./Loading";
import PokemonCard from "./PokemonCard";
import PokeCardList from "./PokeCardList";
import PokeDetails from "./PokeDetails";
import PokeBattle from "./PokeBattle";
import YAPPAInfo from "./YAPPAInfo";
import NoBattle from "./NoBattle";
import { Route, Routes } from "react-router";

// contexts
import { PokeDetailsContext } from "./context/PokeDetailsContext";
import { PokeBattleContext } from "./context/PokeBattleContext";
import { PokeHpContext } from "./context/PokeHpContext";

// hooks
import { useState } from "react";

function App() {
  let [chosePokemon, setChosePokemon] = useState(null);
  let [battleList, setBattleList] = useState([]);
  let [playerHP, setPlayerHP] = useState(0);
  let [enemyHP, setEnemyHP] = useState(0);

  let hpContext = { playerHP, enemyHP, setPlayerHP, setEnemyHP };
  let battleContext = { battleList, setBattleList };
  let pokeContext = { chosePokemon, setChosePokemon };

  return (
    <>
      <PokeDetailsContext.Provider value={pokeContext}>
        <PokeBattleContext.Provider value={battleContext}>
          <PokeHpContext.Provider value={hpContext}>
            <Routes>
              <Route path="/" element={<PokeCardList />} />
              <Route path="/details" element={<PokeDetails />} />
              <Route path="/battle" element={<PokeBattle />} />
              <Route path="/info" element={<YAPPAInfo />} />
              <Route path="/noBattle" element={<NoBattle />} />
            </Routes>
          </PokeHpContext.Provider>
        </PokeBattleContext.Provider>
      </PokeDetailsContext.Provider>
    </>
  );
}

export default App;
