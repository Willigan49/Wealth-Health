import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { useSelector } from "react-redux";
import { ColDef, GridOptions } from "ag-grid-community";
import { type Employee } from "../enum/types";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function TableEmployee() {
  const employees = useSelector((state: any) => state.employees);
  const [rowData] = useState<Employee[]>([...employees]);
  const defaultColDefs = useMemo(() => {
    return {
      width: 155,
      editabkle: false,
      resizable: true,
    };
  }, []);
  const [colDefs] = useState<ColDef<Employee>[]>([
    { field: "firstName" },
    { field: "lastName" },
    { field: "birthDate" },
    { field: "startDate" },
    { field: "street" },
    { field: "city" },
    { field: "state" },
    { field: "zipCode" },
    { field: "department" },
  ]);

  const gridOptions: GridOptions<Employee> = {
    rowData: rowData,
    columnDefs: colDefs,
    defaultColDef: defaultColDefs,
    pagination: true,
    paginationPageSize: 10,
    rowSelection: "single",
    suppressMovableColumns: true,
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
      <AgGridReact gridOptions={gridOptions}></AgGridReact>
    </div>
  );
}
