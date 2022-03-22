import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`} passHref>
      <div className="bg-white text-left bg-opacity-10 text-white rounded-2xl cursor-pointer rounded-2xl p-2 transition hover:-translate-y-1 hover:border  hover:border-red-700 hover:duration-300">
        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={700} height={800} className="rounded-2xl" alt={movie.title} />
        <div className="px-1 opacity-80">
          <div className="font-bold text-xl mb-1">{movie.title}</div>
          <p className=" text-base mb-1">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
