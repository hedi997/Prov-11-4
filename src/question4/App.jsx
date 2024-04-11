// 4. Uppdatera ett namn med callback 3p
// En namn ska visas på sidan och namnet ska vara kopplat till useState i App-komponenten.
// Skapa en komponent: ChangeName som har ett inputfält som ska användas för att ändra
// namnet i App-komponenten via en callback-funktion.

import { useState } from "react";

function ChangeName({ name, setName }) {
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

function App() {
  const [name, setName] = useState("Hedi");

  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Change name here:</p>
      <ChangeName name={name} setName={setName} />
    </div>
  );
}

export default App;
