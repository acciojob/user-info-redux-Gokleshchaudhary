import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail } from "./userSlice";
import "./styles.css";

export default function App() {
  const { name, email } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>User Information</h1>

      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => dispatch(updateName(e.target.value))}
            placeholder="Enter your name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => dispatch(updateEmail(e.target.value))}
            placeholder="Enter your email"
          />
        </label>
      </form>

      <section className="output">
        <p>Name - {name || "(not provided)"}</p>
        <p>Email - {email || "(not provided)"}</p>
      </section>
    </div>
  );
}
