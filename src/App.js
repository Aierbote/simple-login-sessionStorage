import React, { useState } from "react";
// import './App.css';
import { Login } from './components/Login';
import { WelcomeMessage } from "./components/WelcomeMessage";


function App() {
  const [isLogged, setLogged] = useState(false);
  // // DEBUG :
  // const [isLogged, setLogged] = useState(true);

  // const style = { height: "100%", width: "100%" }


  return (
    <>
      {!isLogged
        ? <Login style={style} />
        : <WelcomeMessage />
      }
    </>
  );
}

export default App;
