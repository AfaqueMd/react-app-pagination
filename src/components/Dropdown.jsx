import usePagination from "../customHooks/usePagination"
import { useRef } from "react"

const Dropdown = ({setPage, pokemons,dropDownRef})=>{


    function handleSelectChange(){
        setPage(dropDownRef?.current?.value)
    }

    return (
        <>
        {
            pokemons.length
            ?
            <select ref={dropDownRef} onChange={handleSelectChange} style={{width:"100%", padding:"8px", fontSize:"18px"}}>
                {
                    pokemons.map((pokemon)=>{
                        return(
                            <option key={pokemon.id} value={pokemon.id}>{pokemon.name}</option>
                        )
                    })
                }
            </select>
            :
            <></>
        }
        </>
    )

}

export default Dropdown;