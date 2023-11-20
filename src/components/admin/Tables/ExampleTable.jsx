import { useState } from "react";
import PropTypes from "prop-types";
import {
  CCol,
  CFormInput,
  CPagination,
  CPaginationItem,
  CRow,
  CTable,
} from "@coreui/react";


const CSmartDataTable = ({
  data,
  columns,
  itemsPerPage,
  onFilteredItemsChange,
}) => {
  const [filteredItems, setFilteredItems] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (event) => {
    const { value } = event.target;
    const filteredData = onFilteredItemsChange(value);
    setFilteredItems(filteredData);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const pageItem = [];
  for (let i = 1; i <= Math.ceil(filteredItems.length / itemsPerPage); i++) {
    pageItem.push(
      <CPaginationItem active={i === currentPage} onClick={() => setCurrentPage(i)} key={`pageItem-${i}`}>{i}</CPaginationItem>
    );
  }
  const paginatedData = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <CRow className="mb-3 mt-4">
        <CCol xs="auto">
          <CFormInput
            type="text"
            placeholder="Search..."
            onChange={handleFilterChange}
            size="sm"
            style={{padding: '0.4rem 0.65rem'}}
          />
        </CCol>
      </CRow>
      <CTable columns={columns} items={paginatedData} />
      <CPagination
        activePage={currentPage}
        totalPages={Math.ceil(filteredItems.length / itemsPerPage)}
        onChange={handlePageChange}
        onActivePageChange={(i) => setCurrentPage(i)}
      >
        {pageItem}
      </CPagination>
    </>
  );
};

export default CSmartDataTable;

CSmartDataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  itemsPerPage: PropTypes.number,
  onFilteredItemsChange: PropTypes.func,
};
