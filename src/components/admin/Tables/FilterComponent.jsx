import { CButton, CFormInput, CInputGroup } from '@coreui/react';
import PropTypes from 'prop-types'

const FilterComponent = ({ onFilter, onClear, filterText }) => {

  return (
    <div className="filter-component">
        <CInputGroup size="sm" className="mb-3">
            <CFormInput type="text" placeholder="Search..." value={filterText} onChange={onFilter} />
            <CButton onClick={onClear}>Clear</CButton>
        </CInputGroup>
    </div>
    );
};

export default FilterComponent;

FilterComponent.propTypes = {
    onFilter: PropTypes.func,
    onClear: PropTypes.func,
    filterText: PropTypes.string
}