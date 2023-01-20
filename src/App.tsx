import React from "react";
import { ModalProvider } from "./context/ModalContext";
import { PokeProvider } from "./context/PokeContext";
import { PokePage } from "./pages/pokePage";

function App() {
  return (
    <ModalProvider>
      <PokeProvider>
        <PokePage />
      </PokeProvider>
    </ModalProvider>
  );
}

export default App;
