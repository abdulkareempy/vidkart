import React, { useState } from "react";
import moviesData from "../moviesData";

function Movies() {
    const [movies, setMovies] = useState(moviesData);
    const handleDelete = (movie) =>{
        const updatedMovies = movies.filter(m=>m.id!=movie.id);
        setMovies(updatedMovies);
    }

    if (!movies.length) return <p>no movies in database</p>;
    return (
        <>
            <p>there are {movies.length} in the database</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => {
                       return <tr key={movie.id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.rating}</td>
                            <td>{movie.price}</td>
                            <td><button className="btn btn-danger" onClick={()=>handleDelete(movie)}>Delete</button></td>
                        </tr>;
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Movies;
