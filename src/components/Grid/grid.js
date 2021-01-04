import React from 'react';
import Pagination from "../Pagination/pagination";
import './grid.css';

const Grid = ({thumbnails, currentPage, setCurrentPage}) =>{
    return(
        <div>
            <div className="headline"><hi>Photobrowser App</hi></div>
            <div className="grid">{thumbnails}</div>
            <div>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
      </div>
    )
}

export default Grid;