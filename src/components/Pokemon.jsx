import { useEffect, useState } from "react";
import usePagination from "../customHooks/usePagination";
import Dropdown from "./Dropdown";
import Pagination from "./Pagination";

function Pokemon() {
    // get states from custom hook
    const { page, pokemons, setPage, dropDownRef } = usePagination()
    let [pokemon, setPokemon] = useState([])


    // extract the current page and pokemon selected
    useEffect(() => {
        // console.log("page", page)
        let res = pokemons.filter((pokemon) => pokemon.id == page)
        setPokemon(res[0])
    }, [page])

    return (
        <>
            <Dropdown page={page} setPage={setPage} pokemons={pokemons} dropDownRef={dropDownRef} />
            <div style={{ width: "20em", }}>

                <div key={pokemon.id}>
                    <div>
                        <img src={pokemon.image} alt={pokemon.name} />
                    </div>
                    <div>
                        <h1>{pokemon.name}</h1>
                        <p>{pokemon.description}</p>
                    </div>
                </div>
            </div>
            <Pagination page={page} setPage={setPage} dropDownRef={dropDownRef} />
        </>
    )
}

export default Pokemon;