import React from "react";

function RightCard({ albums }) {
  return (
    <>
      {albums === [] ? (
        <div className="col-sm-6">
          <p className="d-flex justify-content-center align-items-center mt-3 fw-bold fs-3">
            No data
          </p>
        </div>
      ) : (
        <div className="col-sm-6">
          <div className="mt-3">
            {albums !== undefined ? (
              albums.map((album) => {
                return (
                  <div className="d-flex justify-content-start align-items-center my-3">
                    <img
                      className="img-fluid albumImg"
                      src={album.images[0].url}
                      alt=""
                    />
                    <div className="ms-5">
                      <p className="fw-bold">Album name: {album.name}</p>
                      <p className="fw-bold">
                        Release date: {album.release_date}
                      </p>
                      <p className="fw-bold">
                        Total tracks: {album.total_tracks}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default RightCard;
