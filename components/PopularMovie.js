import MovieCard from "./MovieCard";

const PopularMovie = ({ movies }) => {
  return (
    <div className="bg-[#010309] container max-w-7xl mx-auto text-center pb-10 px-4">
      <h1 className="text-white text-3xl my-8 font-bold">What's Popular</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default PopularMovie;
