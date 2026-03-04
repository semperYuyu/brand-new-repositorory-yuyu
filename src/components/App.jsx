// styles
import "../styles/App.css";

// components
import Loading from "./Loading";
import PokemonCard from "./PokemonCard";
import PokeCardList from "./PokeCardList";
import PokeDetails from "./PokeDetails";
import PokeBattle from "./PokeBattle";
import YAPPAInfo from "./YAPPAInfo";
import { Route, Routes } from "react-router";

// contexts
import { PokeDetailsContext } from "./context/PokeDetailsContext";

// hooks
import { useState } from "react";

function App() {
  let [chosePokemon, setChosePokemon] = useState(null);
  let pokeContext = { chosePokemon, setChosePokemon };

  return (
    <>
      <PokeDetailsContext.Provider value={pokeContext}>
        <Routes>
          <Route path="/" element={<PokeCardList />} />
          <Route path="/details" element={<PokeDetails />} />
          <Route path="/battle" element={<PokeBattle />} />
          <Route path="/info" element={<YAPPAInfo />} />
        </Routes>
      </PokeDetailsContext.Provider>
    </>
  );
}

export default App;
