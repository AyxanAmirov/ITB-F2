import React, { useState } from "react";

function Movies({ films, onDelete }) {
  const removeFav = () => {
    onDelete(films.id);
  };
  const share = () => {
    const shareText = `Watch my favorite film: http://localhost:5173/${films.Title}`;
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="grid-element">
      <div className="list-card">
        <div className="poster">
          <img src={films.Poster} alt="" className="film-poster" />
        </div>
        <div className="name-year">
          <p className="name">{films.Title}</p>
          <p className="year">{films.Year}</p>
        </div>
        <i className="fa-solid fa-heart remove-favList" onClick={removeFav}></i>
        <i class="fa-brands fa-whatsapp whatsapp" onClick={share}></i>
      </div>
    </div>
  );
}

export default Movies;
