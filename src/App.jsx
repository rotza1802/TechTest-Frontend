import "./App.css";
import LeftCard from "./components/LeftCard";
import RightCard from "./components/RightCard";
import { useState } from "react";
import axios from "axios";

function App() {
  const [albums, setAlbums] = useState([]);
  const handleSearch = async (artist) => {
    console.log(artist);
    const response = await axios({
      method: "GET",
      url: `http://localhost:8888/artists/${artist}/album`,
    });
    console.log(response.data.artists);
    setAlbums(response.data.items);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1 className="bg-success text-dark fw-bold text-center py-5">
            SPOTIFY
          </h1>
          <LeftCard handleSearch={handleSearch} />
          <RightCard albums={albums} />
        </div>
      </div>
    </div>
  );
}

export default App;
