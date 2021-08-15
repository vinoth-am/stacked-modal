import React from "react";
import { ModalContex } from "./context/ModalContext";
import { Home } from "./app/screens/Home/Home";

const App = () => {
  return (
    <ModalContex>
      <Home />
    </ModalContex>
  );
};

export default App;
