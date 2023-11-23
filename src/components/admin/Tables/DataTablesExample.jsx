import DataTable from "react-data-table-component";
import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import FilterComponent from "./FilterComponent";
const DataTablesExample = ({ title, data, columns, pagination }) => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = data.filter(
    (item) =>
       item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      title={title}
      columns={columns}
      data={filteredItems}
      pagination={pagination}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      paginationResetDefaultPage={resetPaginationToggle}
    />
  );
};

export default DataTablesExample;

DataTablesExample.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  columns: PropTypes.array,
  pagination: PropTypes.bool,
};
