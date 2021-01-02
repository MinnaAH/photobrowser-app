import React from 'react';
import './pagination.css';

const Pagination = ({currentPage, setCurrentPage}) =>{
    return(
        <div className="pagination">
            <button disabled={currentPage === 1} className="button" onClick={() => {setCurrentPage(currentPage-1)}}>Previous</button>
            <button disabled={currentPage === 50} className="button" onClick={() => {setCurrentPage(currentPage+1)}}>Next</button>
        </div>
    )
}

export default Pagination;