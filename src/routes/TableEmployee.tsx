import { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { useSelector } from "react-redux";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function TableEmployee() {
  const employees = useSelector((state: any) => state.employees);

  const [rowData] = useState([...employees]);

  const columnDefs = useMemo(
    () => [
      { field: "firstName", headerName: "firstname", resizable: true },
      { field: "lastName", resizable: true },
      { field: "birthDate", resizable: true },
      { field: "startDate", resizable: true },
      { field: "street", resizable: true },
      { field: "city", resizable: true },
      { field: "state", resizable: true },
      { field: "zipCode", resizable: true },
      { field: "department", resizable: true },
    ],
    []
  );

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}
