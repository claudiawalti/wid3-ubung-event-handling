import "./styles.css";

export default function App() {
  return (
    <div className="App">
      
      <h1>Event Handling</h1>

      <button id="meinButton" onClick={(e) => console.log(e.target.value)} 
      onMouseEnter = {(mauson) => console.log("Halllllllooooo")} 
      onMouseLeave = {(mausdown) => console.log("Tschüss :(")} >
        Klick mich
      </button>

      <input type="checkbox" onChange = {(e) => console.log(e.target.checked)}></input>
      <input type="text" onKeyDown = {(e) => console.log(e.key)}></input>
    </div>
  );
}
