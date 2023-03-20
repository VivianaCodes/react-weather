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
    </div>
  );
}

export default App;
