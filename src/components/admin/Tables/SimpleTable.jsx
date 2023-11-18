import { CTable } from "@coreui/react";
import CSmartDataTable from "./ExampleTable";

const SimpleTable = (props) => {
  const columns = [
    {
      key: "id",
      label: "#",
      _props: { scope: "col"},
    },
    {
      key: "class",
      _props: { scope: "col"},
    },
    {
      key: "heading_1",
      label: "Heading 1",
      _props: { scope: "col" },
    },
    {
      key: "heading_2",
      label: "Heading 2",
      _props: { scope: "col" },
    },
  ];
  const items = [
    {
      id: 1,
      class: "Mark",
      heading_1: "Otto",
      heading_2: "@mdo",
      _cellProps: { id: { scope: "row" } },
    },
    {
      id: 2,
      class: "Jacob",
      heading_1: "Thornton",
      heading_2: "@fat",
      _cellProps: { id: { scope: "row" } },
    },
    {
      id: 3,
      class: "Larry the Bird",
      heading_2: "@twitter",
      _cellProps: { id: { scope: "row" }, class: { colSpan: 2 } },
    },
  ];
  const data = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'janedoe@example.com' },
    { id: 3, name: 'Peter Jones', email: 'peterjones@example.com' },
  ];
  
  const columns2 = [
    { key: 'id', label: 'ID', isFilter: false },
    { key: 'name', label: 'Name', isFilter: true },
    { key: 'email', label: 'Email', isFilter: true },
  ];

  const handleFilteredItemsChange = () => console.log("onchange function call")

  return (
    <>
      <h3>Simple Table</h3>
      <CTable columns={columns} items={items} {...props} color="dark"  striped hover/>
      <br />
      <h3>Filter Option</h3>
      <CSmartDataTable data={data} columns={columns2} itemsPerPage={2} onFilteredItemsChange={handleFilteredItemsChange} />
    </>
  );
};

export default SimpleTable;
