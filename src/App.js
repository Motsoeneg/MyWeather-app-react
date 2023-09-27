import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Coded by Sinqobile, open sourced on {""}
          <a
            href="https://github.com/Motsoeneg/MyWeather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
