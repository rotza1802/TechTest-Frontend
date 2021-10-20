import React from "react";

function LeftCard() {
  return (
    <div className="col-sm-6">
      <div className="p-3">
        <p className="fw-bold fs-3 mt-3">Search for your artist</p>
        <input type="text" className="form-control border-dark" />
        <button className="btn btn-success my-3">Search</button>
      </div>
    </div>
  );
}

export default LeftCard;
