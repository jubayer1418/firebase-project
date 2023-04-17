import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvder";

const Home = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      <h1>this is Ho;ms{user && <p>{user.displayName}</p>}</h1>
    </div>
  );
};

export default Home;
