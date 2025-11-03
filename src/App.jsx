import { useState } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  

  return (
    <>
      <main class="container">
        <h1>THE SIMSPSON</h1>
        <section class="card">
          <div class="card-item">
           <a href="https://movieplayer.it/serietv/i-simpson_73/stagione-1/" target="blank"> <img className="img-card" src="https://mr.comingsoon.it/rsz/serietv/serie/123/123.jpg?preset=pstr300" alt="" /></a>
          </div>
          <div class="card-item"></div>
          <div class="card-item"></div>
          <div class="card-item"></div>
          <div class="card-item"></div>
        </section>
      </main>
    </>
  );
}

export default App;
