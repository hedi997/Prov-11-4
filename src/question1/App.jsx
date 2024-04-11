// 1. En lista med filmer (3p)
// Sidan ska visa en lista med filmer
// Användaren ska kunna lägga till nya filmer i listan genom att skriva in filmens namn
// i ett inputfält och sedan klicka på en "Lägg till"-knapp.
// Varje film i listan ska ha en ta bort knapp som tar bort den filmen ur listan

import { useState } from "react";

let count = 1;

function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  function handleAdd() {
    const movie = {
      id: count++,
      text: input,
    };

    setMovies([...movies, movie]);
  }

  function handleRemove(id) {
    const filteredMovies = movies.filter((movie) => movie.id != id);

    setMovies(filteredMovies);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add movie to the list</button>
      <h2>My movies</h2>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              {movie.text}
              <button onClick={() => handleRemove(movie.id)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
