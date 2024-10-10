"use client"
import Image from 'next/image';
import Header from "@components/Header"
import { useState } from 'react';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import { employeesData } from '@data/dummyData';



function Employees() {
  const [searchArray, setSearchArray] = useState(employeesData)

  function handleChange(e){
    const searchTerm = e.target.value
    const filteredRows = employeesData.filter((item) => item.Name.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
    setSearchArray(filteredRows)
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ">
      <Header category="Page" title="Employees" />

      <TableContainer component={Paper}>
        <TextField label="Search by name" variant='outlined' fullWidth margin='normal' onChange={handleChange}/>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="font-bold text-lg">Employee</TableCell>
              <TableCell className="font-bold text-lg">Designation</TableCell>
              <TableCell className="font-bold text-lg">Country</TableCell>
              <TableCell className="font-bold text-lg">Hire Date</TableCell>
              <TableCell className="font-bold text-lg">Employee ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchArray.length > 0 ?
              searchArray.map((employeeData) => (
                <TableRow key={employeeData.EmployeeID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                  <TableCell className='flex gap-2 items-center'><Image src={employeeData.EmployeeImage} width={30} className='rounded-full'/><p>{employeeData.Name}</p></TableCell>
                  <TableCell>{employeeData.Title}</TableCell>
                  <TableCell>{employeeData.Country}</TableCell>
                  <TableCell>{employeeData.HireDate}</TableCell>
                  <TableCell>{employeeData.EmployeeID}</TableCell>
                </TableRow>
            )) : <p>No results found for your search...</p>}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    )
}

export default Employees