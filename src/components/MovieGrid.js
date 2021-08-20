import React from "react";
import MovieGridItem from "./MovieGridItem";
import {useFetchMovies} from "../hooks/useFetchMovies";

const MovieGrid = ({year}) => {
    const {data: movies, loading} = useFetchMovies(year);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">Movies of the year {year}</h3>

            {loading && <p className="animate__animated animate__flash">Cargando...</p>}

            <div className="card-grid">
                {
                    movies.map(movie => (
                        <MovieGridItem
                            key={movie.id}
                            {...movie}/>
                    ))
                }
            </div>
        </>
    )
}

export default MovieGrid;