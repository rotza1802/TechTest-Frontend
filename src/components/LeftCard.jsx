import React from "react";
import { useState } from "react";

function LeftCard({ handleSearch }) {
  const [artistName, setArtistName] = useState("");

  function handledArtistName(ev) {
    console.log();
    setArtistName(String(ev.target.value));
  }

  return (
    <div className="col-sm-6">
      <div className="p-3">
        <p className="fw-bold fs-3 mt-3">Search for your artist</p>
        <input
          type="text"
          className="form-control border-dark"
          name="artistName"
          value={artistName}
          onChange={handledArtistName}
          placeholder="Artist name"
        />
        <button
          onClick={() => handleSearch(artistName)}
          className="btn btn-success my-3"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default LeftCard;
