import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, search }) => {
  let filteredMovies;

  if (search) {
    filteredMovies = movies.filter(
      movie =>
        movie.title
          .trim()
          .toLowerCase()
          .includes(search.trim().toLowerCase()) ||
        movie.description
          .trim()
          .toLowerCase()
          .includes(search.trim().toLowerCase()),
    );
  } else {
    filteredMovies = movies;
  }

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
