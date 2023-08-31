import { useCallback, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { useSelector } from "react-redux";
import { ColDef, GridOptions } from "ag-grid-community";
import { type Employee } from "../enum/types";
import { Select } from "select-component-oc";
import entries from "../utils/entries.json";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

export default function TableEmployee() {
  const employees = useSelector((state: any) => state.employees);
  const [rowData] = useState<Employee[]>([...employees]);
  const defaultColDefs = useMemo(() => {
    return {
      width: 155,
      editable: false,
      resizable: true,
      sortable: true,
      unSortIcon: true,
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

  const onFilterTextBoxChanged = useCallback(() => {
    gridOptions.api?.setQuickFilter((document.getElementById("filter-text-box") as HTMLInputElement).value);
  }, []);

  const onFilterNumberEntries = useCallback((e: any) => {
    gridOptions.api?.paginationSetPageSize(e.target.value);
  }, []);

  return (
    <div className="w-full">
      <div className="mb-5 flex justify-between items-center">
        <input
          className="rounded-xl border-2 border-primary p-2 placeholder-primary placeholder-opacity-70"
          type="text"
          id="filter-text-box"
          placeholder="Filter..."
          onInput={onFilterTextBoxChanged}
        />
        <p className="text-secondary">
          Show <Select name="pagination" options={entries} onChange={onFilterNumberEntries} style={{color: "black"}} /> entries
        </p>
      </div>
      <div className="ag-theme-material" style={{ height: 600, width: "100%" }}>
        <AgGridReact gridOptions={gridOptions}></AgGridReact>
      </div>
    </div>
  );
}
