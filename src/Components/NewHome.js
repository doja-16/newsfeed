import React from 'react';
import '../styles/NewHome.css'
function NewHome() {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <h1>The New York Times</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">U.S.</a>
            </li>
            <li>
              <a href="#">World</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Arts</a>
            </li>
            <li>
              <a href="#">Lifestyle</a>
            </li>
            <li>
              <a href="#">Opinion</a>
            </li>
            <li>
              <a href="#">Audio</a>
            </li>
            <li>
              <a href="#">Games</a>
            </li>
            <li>
              <a href="#">Cooking</a>
            </li>
            <li>
              <a href="#">Wirecutter</a>
            </li>
            <li>
              <a href="#">The Athletic</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="article">
          <h2>Two Top Leaders of Sinaloa Drug Cartel Are Arrested by U.S. Authorities</h2>
          <p>
            The two men, Ismael Zambada García (pictured) and Joaquín Guzmán
            López, helped run the cartel, one of the most dominant criminal
            groups in Mexico.
          </p>
          <p>
            <a href="#">Leer en español. (Read in Spanish.)</a>
          </p>
          <img
            src="https://static01.nyt.com/images/2024/07/25/world/americas/mexico-cartel-ismael-zambada-garcia-joaquin-guzman-lopez/mexico-cartel-ismael-zambada-garcia-joaquin-guzman-lopez-articleLarge.jpg"
            alt="Ismael Zambada García"
          />
        </div>

        <div className="article">
          <h2>A Culture War on Wheels</h2>
          <p>
            More than any other Tesla, the Cybertruck seems to represent Elon
            Musk himself. It has proved to be a love-it-or-hate-it proposition.
          </p>
          <img
            src="https://static01.nyt.com/images/2024/07/25/world/americas/mexico-cartel-ismael-zambada-garcia-joaquin-guzman-lopez/mexico-cartel-ismael-zambada-garcia-joaquin-guzman-lopez-articleLarge.jpg"
            alt="Tesla Cybertruck"
          />
        </div>
      </main>

      <footer>
        <p>&copy; 2024 The New York Times</p>
      </footer>
    </div>
  );
}

export default NewHome;
