import {React, useState} from "react";
import ComponenteUno from "./components/ComponenteUno";
import ComponenteDos from "./components/ComponenteDos";



function App() {

  return (
    <div className="App">
      <ComponenteUno telefono="605785642" />
      <ComponenteDos telefono="724647249" />
    </div>
  )
}

export default App
