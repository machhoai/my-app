import { useParams } from "react-router-dom";
import movies from "../movies";
import Button from 'react-bootstrap/Button';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return <h1 className="text-center text-2xl mt-10">Movie not found</h1>;
  }

  
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-1 flex">
        <img src={`/images/${movie.image}`} alt={movie.title} className="w-full rounded-lg" />
        <div className="mx-2 w-[100%]">
          <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>
          <p className="text-gray-700 text-lg mt-2">Directed by {movie.director}</p>
          <p className="text-gray-600 mt-2">Released: {movie.releaseYear}</p>
          <p className="text-gray-600">Duration: {movie.duration} minutes</p>
          <p className="text-gray-600">Box Office: {movie.boxOffice}</p>
          <p className="mt-4"><strong>Genres:</strong> {movie.genre.join(", ")}</p>
          <p className="mt-2"><strong>Cast:</strong> {movie.cast.join(", ")}</p>
        </div>
      </div>
      <div className="w-full justify-center flex mt-2">
        <Button onClick={() => window.history.back()} className="mx-auto" variant="secondary">Back</Button>
      </div>
    </div>
  );
};

export default MovieDetail;