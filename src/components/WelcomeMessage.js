import React, { useState, memo, useCallback } from "react";

export const WelcomeMessage = memo(() => {
  const [counter, setCounter] = useState(0);

  // // DEBUG :
  // const [counter, setCounter] = useState(2);
  const message = (counter < 2) ? "Benvenut*" : "Bentornat*";


  return (
    <>
      <header className="bg-black p-4">
        <div
          className="container-fluid d-flex flex-row justify-content-end"
          id="navbar"
        >
          <button className="btn btn-outline-primary border-2" type="submit" id="my-button-logout">
            Logout
          </button>
        </div>
      </header>
      <h1>{message}</h1>
    </>
  )
})