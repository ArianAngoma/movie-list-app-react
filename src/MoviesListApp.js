import React, {useState} from "react";
import AddYear from "./components/AddYear";
import MovieGrid from "./components/MovieGrid";

const MoviesListApp = () => {
    const [years, setYears] = useState([]);

    return (
        <div>
            <h2>Movies List App</h2>
            <AddYear setYears={setYears}/>

            <hr/>

            <ol>
                {
                    years.map(year => (
                        <MovieGrid
                            key={year}
                            year={year}
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default MoviesListApp;