import Header from "@components/Header"
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { ordersData } from '@data/dummyData';


const columns = [
  { field: 'id', headerName: 'Order ID', flex: 1.3, minWidth: 100 },
  { field: 'OrderItems', headerName: 'Order Items', flex: 2, minWidth: 200 },
  { field: 'CustomerName', headerName: 'Customer Name', flex: 2, minWidth: 140 },
  { field: 'TotalAmount', headerName: 'Total Amount', flex: 1.2, minWidth: 100 },
  { field: 'Status', headerName: 'Status', flex: 1.3, minWidth: 100 },
  { field: 'Location', headerName: 'Location', flex: 1, minWidth: 90 },
];

function orders() {
  return (
    <div className="w-[90%] mx-auto m-5 md:my-10 mt-24 p-2 md:p-10 bg-white rounded-3xl max-md:mt-12">
      <Header category="Page" title="Orders"/>
      <Paper sx={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={ordersData}
          columns={columns}
          initialState={{ pagination: { paginationModel: {pageSize: 15,} } }}
          pageSizeOptions={[15, 20]}
          checkboxSelection
          sx={{ border: 0 }}
          disableColumnResize
        />
      </Paper>
    </div>
  )
}

export default orders