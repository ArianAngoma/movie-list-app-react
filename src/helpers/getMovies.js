export const getMovies = async (year) => {
    const url = `https://jsonmock.hackerrank.com/api/movies?Year=${encodeURI(year)}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    return data.map(movie => {
        return {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year
        }
    });
}