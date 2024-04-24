import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../../Components/navbar";
import Films from "./films/Films";
function Home() {
  const [movies, setMovies] = useState();
  
  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=spider&apikey=278924d5")
      .then((res) => res.json())
      .then((films) => {
        setMovies(films);
      });
  }, []);
  const searchFilms = (filmName)=>{
    fetch(`https://www.omdbapi.com/?s=${filmName}&apikey=278924d5`)
    .then((res) => res.json())
    .then((films) => {
      setMovies(films);
    });
  }
  return (
    <>
      <Navbar searchFilms={searchFilms}/>
      {movies ? (
        <div className="container mt-40">
          <div className="d-flex flex-wrap justify-center gap-30">
            {movies?.Search?.map((film) => (
              <Films key={film.imdbID} film={film} />
            ))}
          </div>
        </div>
      ) : (
        <div className="loader-body">
          {" "}
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}

export default Home;
