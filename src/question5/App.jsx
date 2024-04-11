// Återanvändbara komponenter 3p
// 1. Skapa en komponent Button som tar en color och en title som props
// Använd den 2 gånger med olika title och color.

// 2. Skapa en komponent ButtonWithChildren som änvänder children istället
// för en title prop. Använd den 2 gånger med olika title och color.

// 3. Skapa en komponent Article som tar en title och en text som props
// Använd komponenten 2 gånger med olika title och text.

function Button({ title, color }) {
  return <button style={{ color: color }}>{title}</button>;
}

function ButtonWithChildren({ children, color }) {
  return <button style={{ backgroundColor: color }}> {children}</button>;
}

function Article({ title, text }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

function App() {
  return (
    <div className="flex justufy-between align-center flex-col w-[200px]">
      <Button title="tryck här" color="green"></Button>
      <Button title="hej" color="red"></Button>
      <ButtonWithChildren color="blue">tjena</ButtonWithChildren>
      <ButtonWithChildren color="yellow">sho</ButtonWithChildren>
      <Article title="träd" text="träd är fina"></Article>
      <Article title="grönt" text="grönt är skönt"></Article>
    </div>
  );
}

export default App;
