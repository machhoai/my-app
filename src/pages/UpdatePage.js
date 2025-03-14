import React from "react";
import movies from "../movies";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FilterMovie from "../components/FilterBar";
import Search from "../components/SearchBar";
import ScrollToTopButton from "../components/BtnScrollToTop";
const styles = {
  card: {
    borderRadius: "16px",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "black",
    border: "1px solid transparent",
    position: "relative",
    zIndex: 20,
    padding: "16px",
    color: "white",
    display: "grid",
    gridTemplateRows: "10rem 5rem auto auto",
  },
  cardImage: {
    height: "10rem",
    width: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "12px",
  },
  movieDetails: {
    marginTop: "12px",
    fontSize: "0.875rem",
    color: "#d4d4d8",
  },
  cardButton: {
    marginTop: "16px",
    padding: "8px 16px",
    height: "40px",
    borderRadius: "12px",
    backgroundColor: "#1f2937",
    color: "white",
    textAlign: "center",
    width: "100%",
    cursor: "pointer",
  },
  formContainer: {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
  },
  formButton: {
    width: "100%",
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }
};
let Movies = movies

const MovieCards = () => {
  const [renderMovies, setRenderMovies] = useState(Movies);
  
  const [searchTerm, setSearchTerm] = useState({
    title: "",
    genre: [],
  });

  const moviesPerLoad = 8; // Số phim tải thêm mỗi lần
  const [visibleMovies, setVisibleMovies] = useState(renderMovies.slice(0, moviesPerLoad));

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        setTimeout(() => {
          loadMoreMovies();
        }, 1000);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleMovies]);

  const loadMoreMovies = () => {
    if (visibleMovies.length < renderMovies.length) {
      const nextMovies = renderMovies.slice(visibleMovies.length, visibleMovies.length + moviesPerLoad);
      setVisibleMovies([...visibleMovies, ...nextMovies]);
    }
  };

  const getAllGenres = (movies) => {
    const genres = movies.reduce((acc, movie) => {
      movie.genre.forEach((genre) => {
        if (!acc.includes(genre)) {
          acc.push(genre);
        }
      });
      return acc;
    }, []);
    return genres;
  };

  const handleFilterChange = (selectedGenres) => {
    setSearchTerm((prev) => ({ ...prev, genre: selectedGenres }));
  };

  const handleSearchChange = (title) => {
    setSearchTerm((prev) => ({ ...prev, title: title }));
  };

  React.useEffect(() => {
    setRenderMovies(searchMovies(Movies, searchTerm));
  }, [searchTerm]);

  return (
    <div>
      <h1 className="font-bold text-3xl" style={{ textAlign: "center", color: "black" }}>Delete Page</h1>

      <ScrollToTopButton></ScrollToTopButton>
      
      <Search onSearchChange={handleSearchChange} />

      <FilterMovie onFilterChange={handleFilterChange} allGenres={getAllGenres(Movies)} />

      {renderMovies.length <= 0 && <h2 style={{ textAlign: "center", color: "black" }}>No movies found</h2>}

      <div className="my-4" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
        {visibleMovies.map((movie) => {
          return (
            <div style={styles.card} key={movie.id}>
              <img style={styles.cardImage} src={`/images/${movie.image}`} alt={movie.title} />
              <h2 style={styles.cardTitle}>{movie.title}</h2>
              {/* <p style={styles.cardDescription}>{movie.description}</p> */}
              <div style={styles.movieDetails}>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Genre:</strong> {movie.genre.join(", ")}</p>
                <p><strong>Cast:</strong> {movie.cast.join(", ")}</p>
                <p><strong>Release Year:</strong> {movie.releaseYear}</p>
                <p><strong>Duration:</strong> {movie.duration} minutes</p>
                <p><strong>Box Office:</strong> {movie.boxOffice}</p>
              </div>
              <div style={{display:"flex", justifyContent:"end", alignItems:"end"}}>
                <Link className="w-full" to={`/movies/${movie.id}`}>
                  <div className="h-10 w-full mt-4 overflow-hidden relative rounded-xl px-6 py-2 bg-white text-black flex justify-center items-end group/modal-btn">
                    <span
                      className="group-hover/modal-btn:translate-x-52 text-center transition duration-500">
                      Play now
                    </span>
                    <div
                      className=" -translate-x-52 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                      🍿
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex w-full gap-1">
                <Link className="w-full" to={`/update-movie/${movie.id}`}>
                  <div className="h-10 w-full mt-1 overflow-hidden relative rounded-xl px-6 py-2 bg-cyan-700 text-white flex justify-center items-end group/modal-btn">
                    <span
                      className="text-center transition duration-500">
                      Edit
                    </span>
                  </div>
                </Link>
                <Link className="" to={`/delete-movie/${movie.id}`}>
                  <button type="button" class="btn btn-outline-danger rounded-xl mt-1 h-10 px-4">Del</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {visibleMovies.length < movies.length && (
        <div className="text-center my-4">
          <span className="text-gray-500">Loading more movies...</span>
        </div>
      )}
    </div>
  );
};

const searchMovies = (movies, searchTerm) => {
  const filteredMovies = searchTerm.title || searchTerm.genre.length > 0
    ? movies.filter((movie) =>
        (searchTerm.title ? movie.title.toLowerCase().includes(searchTerm.title) : true) &&
        (searchTerm.genre.length > 0 ? searchTerm.genre.some((g) => movie.genre.includes(g)) : true)
      )
    : movies;
  return filteredMovies;
}

export default MovieCards;
