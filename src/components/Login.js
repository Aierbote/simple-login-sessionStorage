import React from "react";
import { useState } from "react";
import { memo, useCallback } from "react";

export const Login = memo(({ style }) => {
  // state variable
  const [textFilled, setTextFilled] = useState(false);

  const checkIsFilled = useCallback(
    (event) => {
      event.target.value !== ""
        ? setTextFilled(true)
        : setTextFilled(false);
    }
    ,
    [textFilled]
  )

  return (
    <div className="col-6 col-lg-4 card">
      <form
        id="my-form-login"
        className="d-flex justify-content-center align-items-center flex-column p-2"
        style={style}
        // onsubmit="event.preventDefault()"
        action="#"
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={checkIsFilled}
            required
          />
        </div>
        <div className="mb-3 flex-grow-0">
          <button
            type="submit"
            className={textFilled ? "btn btn-primary" : "btn btn-primary disabled"}
            onClick={() => { console.log("click");/* TODO : FIXME : isLogged = true */ }}
            id="my-button-login"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
})