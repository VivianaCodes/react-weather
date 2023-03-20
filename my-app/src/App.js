import "./App.css";
import Overview from "./Overview";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Overview />
        <Search />
      </div>
      <small>
        <a
          href="https://github.com/VivianaCodes/weather-react-app"
          class="open-code"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Viviana Milone
      </small>
    </div>
  );
}

export default App;
