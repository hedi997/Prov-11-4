// 3. Custom Hook useInput (3p)
// Skapa en hook useInput som tar hand om state för ett input-fält.
// useInput ska returnera funktionen för att uppdatera state och
// själva värdet från state.
// Använd sedan useInput i App-komponenten nedan för att spara det man
// skriver in i ett input-fält. Det man skriver in ska visas under inputfältet.

import { useState } from "react";

function useInput() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return { value, handleChange };
}

function App() {
  const { value, handleChange } = useInput("");

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>{value}</p>
    </div>
  );
}

export default App;
