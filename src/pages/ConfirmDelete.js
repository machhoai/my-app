import { useParams } from "react-router-dom";
import movies from "../movies";
import Button from 'react-bootstrap/Button';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return <h1 className="text-center text-2xl mt-10">Movie not found</h1>;
  }

  console.log(movie);
  
  const handleDelete = () => {
    fetch("http://localhost:8000/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: movie.id }),
    }) // Fetch data from the server
      .then((response) => response.json())  // Parse the JSON data
      .then((data) => {                   
        alert("Success! Movie is deleted")
        window.history.back()
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
        <button type="button" class="btn btn-outline-light text-black absolute">Back</button>
        <h1 className="text-3xl text-center font-bold mb-6">Confirm to delete this movie?</h1>
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
                <div className="w-full flex gap-2 mt-10">
                    <Button onClick={() => window.history.back()} className="w-full" variant="secondary">Cancle</Button>
                    <Button onClick={() => handleDelete()} className="w-full" variant="outline-danger">Delete</Button>
                </div>
            </div>
        </div>
        
    </div>
  );
};

export default MovieDetail;