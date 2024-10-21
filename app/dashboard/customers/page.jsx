"use client"

import Header from "@components/Header"
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from "@mui/material";
import { Delete, MinimizeTwoTone } from "@mui/icons-material";
import Paper from '@mui/material/Paper';
import { customersData } from '@data/dummyData';
import { useState } from "react";





function Customers() {
  const [rows, setRows] = useState(customersData)
  function handleDelete(id){
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  }

  const columns = [
    { field: 'id', headerName: 'Customer ID', flex: 1.3,  minWidth: 100 },
    { field: 'CustomerName', headerName: 'Customer Name', flex: 2,  minWidth: 170 },
    { field: 'CustomerEmail', headerName: 'Customer Email', flex: 2,  minWidth: 170 },
    { field: 'ProjectName', headerName: 'Project Name', flex: 2,  minWidth: 180 },
    { field: 'Budget', headerName: 'Budget', flex: 1, minWidth: 100 },
    { field: 'Status', headerName: 'Status', flex: 1,  minWidth: 100 },
    { field: 'Location', headerName: 'Location', flex: 1,  minWidth: 100 },
    { field: 'delete', headerName: 'Delete', flex: 1, minWidth: 100, sortable: false, renderCell: (params) => (
      <IconButton aria-label="Delete" onClick={() => handleDelete(params.id)}>
        <Delete className="text-red-600"/>
      </IconButton>
    )}
  ];




  return (
    <div className="w-[90%] mx-auto m-5 md:my-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers"/>
      <Paper sx={{ height: 800 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel: {pageSize: 15,} } }}
          pageSizeOptions={[15, 20]}
          sx={{ border: 0 }}
          disableColumnResize
        />
      </Paper>
    </div>
  )
}

export default Customers