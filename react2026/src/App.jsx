import React, { useState } from "react";
import Hero from "./assets/hero.png";
import Product from "./Product";
import Form from "./Form"

const App = () => {
  const [username, setUsername] = useState(69);
  return (
    <>
      <div className="bg-zinc-900 w-full h-screen flex flex-col items-center  justify-start gap-3">
       
        <Product username={username} />

        <Form objs={{setUsername}}/>
      </div>s
    </>
  );
};

export default App;
