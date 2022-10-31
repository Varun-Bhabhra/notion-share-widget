import React from "react";
import Widget from "./Widget";

const App = () => {

  const showWidget = () => document.querySelector(".container_div").classList.toggle('show')

  return (
    <section id="" className="container">
      <header className="container_header">Click on the share button</header>

      <button className="share_btn" onClick={showWidget}>Share <i className="fa-solid fa-share-nodes"></i></button>

      <div className="container_div hidden">
        <Widget/>
      </div>

    </section>
  )
};

export default App;