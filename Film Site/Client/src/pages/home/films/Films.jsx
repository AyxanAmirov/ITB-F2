import React, { useEffect, useState } from "react";

function Films({ film }) {
  const [addFav, setAddFav] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/FavList")
      .then(resp => resp.json())
      .then(favList => {
        const isFavorited = favList.some(element => element.imdbID === film.imdbID);
        setAddFav(isFavorited);
      })
      .catch(error => console.error("Error fetching favorite list:", error));
  }, [film.imdbID]);

  
  const removeFav = () => {
    fetch("http://localhost:3000/FavList")
      .then((resp) => resp.json())
      .then((data) => {
        const movie = data.find((element) => element.imdbID == film.imdbID);
        if (movie) {
          fetch(`http://localhost:3000/FavList/${movie.id}`, {
            method: "DELETE",
          }).then(() => {
            setAddFav(!addFav);
          });
        }
      });
  };
  const addFavList = () => {
    setAddFav(!addFav);
    fetch(`http://localhost:3000/FavList`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(film),
    });
  };
  return (
    <div className="col-lg-2">
      <div className="film-card">
        <div className="poster">
          <img src={film.Poster} alt="" className="film-poster" />
        </div>
        <div className="name-year">
          <p className="name">{film.Title}</p>
          <p className="year">{film.Year}</p>
        </div>
        <div className="fav-icons">
          {addFav ? (
            <i className="fa-solid fa-heart remove-fav" onClick={removeFav}></i>
          ) : (
            <i className="fa-regular fa-heart add-fav" onClick={addFavList}></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default Films;
