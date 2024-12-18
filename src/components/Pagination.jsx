import usePagination from "../customHooks/usePagination";


function Pagination({page, setPage, dropDownRef }){

    function handlePageChange(val){
        dropDownRef.current.value = page+val>0? page+val<19?page+val:18: 1
        setPage((prev)=> prev+val>0? prev+val<19?prev+val:18: 1)
    }

    return (
        <div className="btn-div">
            <button onClick={()=> handlePageChange(-1)}>Previous</button>
            <button onClick={()=> handlePageChange(1)}>Next</button>
        </div>
    )
}


export default Pagination;