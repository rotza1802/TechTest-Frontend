import "./App.css";
import LeftCard from "./components/LeftCard";
import RightCard from "./components/RightCard";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1 className="bg-success text-dark fw-bold text-center py-5">
            SPOTIFY
          </h1>
          <LeftCard />
          <RightCard />
        </div>
      </div>
    </div>
  );
}

export default App;
