import React from 'react'
import Datatable from 'react-data-table-component'
function custompagination({paginationProps}) {
    const { rowsPerPage, rowCount, currentPage, setPage, setRowsPerPage } = paginationProps;

    const totalPages = Math.ceil(rowCount / rowsPerPage);

    const handlePrevPage = () => {
        setPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setPage(currentPage + 1);
    };
  return (
    <div className='pagination-container'>
            <button 
                className='pagination-button'
                disabled={currentPage === 1} 
                onClick={handlePrevPage}
            >
                Previous
            </button>
            <span className='current-page'>{currentPage}</span>
            <button 
                className='pagination-button'
                disabled={currentPage === totalPages} 
                onClick={handleNextPage}
            >
                Next
            </button>
        </div>
    
  );
}

export default custompagination