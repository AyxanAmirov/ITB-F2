import React, { useEffect, useState } from "react";
import Navbar from "../../Components/navbar";
import "./style.css";
import Movies from "../../Components/Movies";
function List() {
  const [myFilms, setMyFilms] = useState();
  useEffect(() => {
    fetch(`http://localhost:3000/FavList`)
      .then((resp) => resp.json())
      .then((movie) => setMyFilms(movie));
  }, []);
  const onDelete = (id) => {
    const updatedList = myFilms.filter((film) => film.id !== id);
    setMyFilms(updatedList);
    fetch(`http://localhost:3000/FavList/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <div>
      <Navbar />
      <h2 className="list-heading">My Favorite Films</h2>
      <div className="grid-container">
        {myFilms?.map((films) => {
          return <Movies films={films} key={films.id} onDelete={onDelete}/>;
        })}
      </div>
    </div>
  );
}

export default List;
