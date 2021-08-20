import React from "react";
const MovieGridItem = ({id, title, year}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <p>{title}</p>
        </div>
    )
}

export default MovieGridItem;