import React from 'react';
import './pagination.css';

const Pagination = ({currentPage, setCurrentPage}) =>{
    return(
        <div className="pagination">
            <button id="previous-page" disabled={currentPage === 1} className="button" onClick={() => {setCurrentPage(currentPage-1)}}>Previous</button>
            <button id="next-page" disabled={currentPage === 250} className="button" onClick={() => {setCurrentPage(currentPage+1)}}>Next</button>
        </div>
    )
}

export default Pagination;