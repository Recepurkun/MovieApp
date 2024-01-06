import React, { useState, useEffect } from "react";
import movieData from "../data/movies.json";
import "../css/Movies.css";

function Movies() {
  const [movies, setMovies] = useState([]); // Filmleri saklamak için state tanımlıyoruz

  // Veriyi bileşen yüklendiğinde yükleme işlemini gerçekleştiriyoruz
  useEffect(() => {
    setMovies(movieData); // JSON verisini state'e atıyoruz
  }, []);

  return (
    <div>
      <div className="mainContent">
        {/* Her film için bir kart oluşturuyoruz */}
        {movies.map((movie, index) => (
          <div className="cardStyle" key={index}>
            <h4 className="movieName"> <small><ins> {movie.title} <hr /></ins> </small></h4>
            <img
              className="imgStyle"
              src={movie.image}
              alt=""
              style={{ width: "100%"}}
            />
            <hgroup>
              <h5> <small><b>Yönetmen: {movie.director}</b></small></h5>
              <h6> <small><i>Yıl: {movie.year}</i></small></h6>
              <h6> <small>Tür: {movie.genre.join(", ")}</small></h6>
            </hgroup>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
