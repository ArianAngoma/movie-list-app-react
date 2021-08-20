import {useEffect, useState} from "react";
import {getMovies} from "../helpers/getMovies";

export const useFetchMovies = (year) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Hook para que la funcion getMovies() solo se ejecute una vez a pesar de haber cambios en el estado del componente
    useEffect(() => {
        getMovies(year).then(movies => {
            setState({
                data: movies,
                loading: false
            })
        });
    }, [year]);

    return state; // {data: [], loading: true}
}