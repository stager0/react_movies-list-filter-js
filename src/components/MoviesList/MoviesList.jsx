import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, search }) => {
  let visibleMovies;

  const normalize = str => str.trim().toLowerCase();

  if (search) {
    visibleMovies = movies.filter(
      movie =>
        normalize(movie.title).includes(search.trim().toLowerCase()) ||
        normalize(movie.description).includes(search.trim().toLowerCase()),
    );
  } else {
    visibleMovies = movies;
  }

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
