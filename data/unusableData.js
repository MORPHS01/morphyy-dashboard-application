
// import React from 'react';
// // import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
// // import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';

// // import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
// // import { BiColorFill } from 'react-icons/bi';
// // import { IoMdContacts } from 'react-icons/io';
// // import { RiContactsLine, RiStockLine } from 'react-icons/ri';
// // import { MdOutlineSupervisorAccount } from 'react-icons/md';
// // import { HiOutlineRefresh } from 'react-icons/hi';
// // import { TiTick } from 'react-icons/ti';
// // import { GiLouvrePyramid } from 'react-icons/gi';
// // import { GrLocation } from 'react-icons/gr';



// export const gridOrderImage = (props) => (
//   <div>
//     <img
//       className="rounded-xl h-20 md:ml-3"
//       src={props.ProductImage}
//       alt="order-item"
//     />
    
//   </div>
// );

// export const gridOrderStatus = (props) => (
//   <button
//     type="button"
//     style={{ background: props.StatusBg }}
//     className="text-white py-1 px-2 capitalize rounded-2xl text-md"
//   >
//     {props.Status}
//   </button>
// );


// const gridEmployeeProfile = (props) => (
//   <div className="flex items-center gap-2">
//     <img
//       className="rounded-full w-10 h-10"
//       src={props.EmployeeImage}
//       alt="employee"
//     />
//     <p>{props.Name}</p>
//   </div>
// );

// const gridEmployeeCountry = (props) => (
//   <div className="flex items-center justify-center gap-2">
//     <GrLocation />
//     <span>{props.Country}</span>
//   </div>
// );

// const customerGridImage = (props) => (
//   <div className="image flex gap-4">
//     <img
//       className="rounded-full w-10 h-10"
//       src={props.CustomerImage}
//       alt="employee"
//     />
//     <div>
//       <p>{props.CustomerName}</p>
//       <p>{props.CustomerEmail}</p>
//     </div>
//   </div>
// );

// const customerGridStatus = (props) => (
//   <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
//     <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
//     <p>{props.Status}</p>
//   </div>
// );
// export const areaPrimaryXAxis = {
//   valueType: 'DateTime',
//   labelFormat: 'y',
//   majorGridLines: { width: 0 },
//   intervalType: 'Years',
//   edgeLabelPlacement: 'Shift',
//   labelStyle: { color: 'gray' },
// };

// export const areaPrimaryYAxis = {
//   labelFormat: '{value}%',
//   lineStyle: { width: 0 },
//   maximum: 4,
//   interval: 1,
//   majorTickLines: { width: 0 },
//   minorTickLines: { width: 0 },
//   labelStyle: { color: 'gray' },

// };
// export const barPrimaryXAxis = {
//   valueType: 'Category',
//   interval: 1,
//   majorGridLines: { width: 0 },
// };
// export const barPrimaryYAxis = {
//   majorGridLines: { width: 0 },
//   majorTickLines: { width: 0 },
//   lineStyle: { width: 0 },
//   labelStyle: { color: 'transparent' },
// };
// const areaChartData = [
//   [
//     { x: new Date(2002, 0, 1), y: 2.2 },
//     { x: new Date(2003, 0, 1), y: 3.4 },
//     { x: new Date(2004, 0, 1), y: 2.8 },
//     { x: new Date(2005, 0, 1), y: 1.6 },
//     { x: new Date(2006, 0, 1), y: 2.3 },
//     { x: new Date(2007, 0, 1), y: 2.5 },
//     { x: new Date(2008, 0, 1), y: 2.9 },
//     { x: new Date(2009, 0, 1), y: 3.8 },
//     { x: new Date(2010, 0, 1), y: 1.4 },
//     { x: new Date(2011, 0, 1), y: 3.1 },
//   ],
//   [
//     { x: new Date(2002, 0, 1), y: 2 },
//     { x: new Date(2003, 0, 1), y: 1.7 },
//     { x: new Date(2004, 0, 1), y: 1.8 },
//     { x: new Date(2005, 0, 1), y: 2.1 },
//     { x: new Date(2006, 0, 1), y: 2.3 },
//     { x: new Date(2007, 0, 1), y: 1.7 },
//     { x: new Date(2008, 0, 1), y: 1.5 },
//     { x: new Date(2009, 0, 1), y: 2.8 },
//     { x: new Date(2010, 0, 1), y: 1.5 },
//     { x: new Date(2011, 0, 1), y: 2.3 },
//   ],
//   [
//     { x: new Date(2002, 0, 1), y: 0.8 },
//     { x: new Date(2003, 0, 1), y: 1.3 },
//     { x: new Date(2004, 0, 1), y: 1.1 },
//     { x: new Date(2005, 0, 1), y: 1.6 },
//     { x: new Date(2006, 0, 1), y: 2 },
//     { x: new Date(2007, 0, 1), y: 1.7 },
//     { x: new Date(2008, 0, 1), y: 2.3 },
//     { x: new Date(2009, 0, 1), y: 2.7 },
//     { x: new Date(2010, 0, 1), y: 1.1 },
//     { x: new Date(2011, 0, 1), y: 2.3 },
//   ],
// ];

// export const areaCustomSeries = [
//   {
//     dataSource: areaChartData[0],
//     xName: 'x',
//     yName: 'y',
//     name: 'USA',
//     opacity: '0.8',
//     type: 'SplineArea',
//     width: '2',

//   },
//   {
//     dataSource: areaChartData[1],
//     xName: 'x',
//     yName: 'y',
//     name: 'France',
//     opacity: '0.8',
//     type: 'SplineArea',
//     width: '2',
//   },
//   {
//     dataSource: areaChartData[2],
//     xName: 'x',
//     yName: 'y',
//     name: 'Germany',
//     opacity: '0.8',
//     type: 'SplineArea',
//     width: '2',
//   },
// ];

// export const barChartData = [
//   [
//     { x: 'USA', y: 46 },
//     { x: 'GBR', y: 27 },
//     { x: 'CHN', y: 26 },
//   ],
//   [
//     { x: 'USA', y: 37 },
//     { x: 'GBR', y: 23 },
//     { x: 'CHN', y: 18 },
//   ],
//   [
//     { x: 'USA', y: 38 },
//     { x: 'GBR', y: 17 },
//     { x: 'CHN', y: 26 },
//   ],
// ];

// export const barCustomSeries = [
//   {
//     dataSource: barChartData[0],
//     xName: 'x',
//     yName: 'y',
//     name: 'Gold',
//     type: 'Column',
//     marker: {
//       dataLabel: {
//         visible: true,
//         position: 'Top',
//         font: { fontWeight: '600', color: '#ffffff' },
//       },
//     },
//   },
//   {
//     dataSource: barChartData[1],
//     xName: 'x',
//     yName: 'y',
//     name: 'Silver',
//     type: 'Column',
//     marker: {
//       dataLabel: {
//         visible: true,
//         position: 'Top',
//         font: { fontWeight: '600', color: '#ffffff' },
//       },
//     },
//   },
//   {
//     dataSource: barChartData[2],
//     xName: 'x',
//     yName: 'y',
//     name: 'Bronze',
//     type: 'Column',
//     marker: {
//       dataLabel: {
//         visible: true,
//         position: 'Top',
//         font: { fontWeight: '600', color: '#ffffff' },
//       },
//     },
//   },
// ];
// export const colorMappingData = [
//   [
//     { x: 'Jan', y: 6.96 },
//     { x: 'Feb', y: 8.9 },
//     { x: 'Mar', y: 12 },
//     { x: 'Apr', y: 17.5 },
//     { x: 'May', y: 22.1 },
//     { x: 'June', y: 25 },
//     { x: 'July', y: 29.4 },
//     { x: 'Aug', y: 29.6 },
//     { x: 'Sep', y: 25.8 },
//     { x: 'Oct', y: 21.1 },
//     { x: 'Nov', y: 15.5 },
//     { x: 'Dec', y: 9.9 },
//   ],
//   ['#FFFF99'],
//   ['#FFA500'],
//   ['#FF4040'],
// ];

// export const rangeColorMapping = [
//   { label: '1°C to 10°C',
//     start: '1',
//     end: '10',
//     colors: colorMappingData[1] },

//   { label: '11°C to 20°C',
//     start: '11',
//     end: '20',
//     colors: colorMappingData[2] },

//   { label: '21°C to 30°C',
//     start: '21',
//     end: '30',
//     colors: colorMappingData[3] },

// ];

// export const ColorMappingPrimaryXAxis = {
//   valueType: 'Category',
//   majorGridLines: { width: 0 },
//   title: 'Months',
// };

// export const ColorMappingPrimaryYAxis = {
//   lineStyle: { width: 0 },
//   majorTickLines: { width: 0 },
//   minorTickLines: { width: 0 },
//   labelFormat: '{value}°C',
//   title: 'Temperature',
// };

// export const FinancialPrimaryXAxis = {
//   valueType: 'DateTime',
//   minimum: new Date('2016, 12, 31'),
//   maximum: new Date('2017, 9, 30'),
//   crosshairTooltip: { enable: true },
//   majorGridLines: { width: 0 },
// };

// export const FinancialPrimaryYAxis = {
//   title: 'Price',
//   minimum: 100,
//   maximum: 180,
//   interval: 20,
//   lineStyle: { width: 0 },
//   majorTickLines: { width: 0 },
// };

// export const customersGrid = [
//   { type: 'checkbox', width: '50' },
//   { headerText: 'Name',
//     width: '150',
//     template: customerGridImage,
//     textAlign: 'Center' },
//   { field: 'ProjectName',
//     headerText: 'Project Name',
//     width: '150',
//     textAlign: 'Center' },
//   { field: 'Status',
//     headerText: 'Status',
//     width: '130',
//     format: 'yMd',
//     textAlign: 'Center',
//     template: customerGridStatus },
//   {
//     field: 'Weeks',
//     headerText: 'Weeks',
//     width: '100',
//     format: 'C2',
//     textAlign: 'Center' },
//   { field: 'Budget',
//     headerText: 'Budget',
//     width: '100',
//     format: 'yMd',
//     textAlign: 'Center' },

//   { field: 'Location',
//     headerText: 'Location',
//     width: '150',
//     textAlign: 'Center' },

//   { field: 'CustomerID',
//     headerText: 'Customer ID',
//     width: '120',
//     textAlign: 'Center',
//     isPrimaryKey: true,
//   },

// ];

// export const employeesGrid = [
//   { headerText: 'Employee',
//     width: '150',
//     template: gridEmployeeProfile,
//     textAlign: 'Center' },
//   { field: 'Name',
//     headerText: '',
//     width: '0',
//     textAlign: 'Center',
//   },
//   { field: 'Title',
//     headerText: 'Designation',
//     width: '170',
//     textAlign: 'Center',
//   },
//   { headerText: 'Country',
//     width: '120',
//     textAlign: 'Center',
//     template: gridEmployeeCountry },

//   { field: 'HireDate',
//     headerText: 'Hire Date',
//     width: '135',
//     format: 'yMd',
//     textAlign: 'Center' },

//   { field: 'ReportsTo',
//     headerText: 'Reports To',
//     width: '120',
//     textAlign: 'Center' },
//   { field: 'EmployeeID',
//     headerText: 'Employee ID',
//     width: '125',
//     textAlign: 'Center' },
// ];



// export const cartData = [
//   {
//     image:
//       product5,
//     name: 'butterscotch ice-cream',
//     category: 'Milk product',
//     price: '$250',
//   },
//   {
//     image:
//       product6,
//     name: 'Supreme fresh tomato',
//     category: 'Vegetable Item',
//     price: '$450',
//   },
//   {
//     image:
//       product7,
//     name: 'Red color candy',
//     category: 'Food Item',
//     price: '$190',
//   },
// ];

// export const chatData = [
//   {
//     image:
//       avatar2,
//     message: 'Roman Joined the Team!',
//     desc: 'Congratulate him',
//     time: '9:08 AM',
//   },
//   {
//     image:
//       avatar3,
//     message: 'New message received',
//     desc: 'Salma sent you new message',
//     time: '11:56 AM',
//   },
//   {
//     image:
//       avatar4,
//     message: 'New Payment received',
//     desc: 'Check your earnings',
//     time: '4:39 AM',
//   },
//   {
//     image:
//       avatar,
//     message: 'Jolly completed tasks',
//     desc: 'Assign her new tasks',
//     time: '1:12 AM',
//   },
// ];


// 


// export const productsPerformance = [
//   {
//     image:
//       product5,
//     title: 'Is it good butterscotch ice-cream?',
//     desc: 'Ice-Cream, Milk, Powder',
//     rating: 'Good',
//     itemSold: '65%',
//     earningAmount: '$546,000',
//   },
//   {
//     image:
//       product6,
//     title: 'Supreme fresh tomato available',
//     desc: 'Market, Mall',
//     rating: 'Excellent',
//     itemSold: '98%',
//     earningAmount: '$780,000',
//   },
//   {
//     image:
//       product7,
//     title: 'Red color candy from Gucci',
//     desc: 'Chocolate, Yummy',
//     rating: 'Average',
//     itemSold: '46%',
//     earningAmount: '$457,000',
//   },
//   {
//     image:
//       product4,
//     title: 'Stylish night lamp for night',
//     desc: 'Electric, Wire, Current',
//     rating: 'Poor',
//     itemSold: '23%',
//     earningAmount: '$123,000',
//   },
// ];

//

// export const themeColors = [
//   {
//     name: 'blue-theme',
//     color: '#1A97F5',
//   },
//   {
//     name: 'green-theme',
//     color: '#03C9D7',
//   },
//   {
//     name: 'purple-theme',
//     color: '#7352FF',
//   },
//   {
//     name: 'red-theme',
//     color: '#FF5C8E',
//   },
//   {
//     name: 'indigo-theme',
//     color: '#1E4DB7',
//   },
//   {
//     color: '#FB9678',
//     name: 'orange-theme',
//   },
// ];

// export const userProfileData = [
//   {
//     icon: <BsCurrencyDollar />,
//     title: 'My Profile',
//     desc: 'Account Settings',
//     iconColor: '#03C9D7',
//     iconBg: '#E5FAFB',
//   },
//   {
//     icon: <BsShield />,
//     title: 'My Inbox',
//     desc: 'Messages & Emails',
//     iconColor: 'rgb(0, 194, 146)',
//     iconBg: 'rgb(235, 250, 242)',
//   },
//   {
//     icon: <FiCreditCard />,
//     title: 'My Tasks',
//     desc: 'To-do and Daily Tasks',
//     iconColor: 'rgb(255, 244, 229)',
//     iconBg: 'rgb(254, 201, 15)',
//   },
// ];

// export const ordersGrid = [
//   {
//     headerText: 'Image',
//     template: gridOrderImage,
//     textAlign: 'Center',
//     width: '120',
//   },
//   {
//     field: 'OrderItems',
//     headerText: 'Item',
//     width: '150',
//     editType: 'dropdownedit',
//     textAlign: 'Center',
//   },
//   { field: 'CustomerName',
//     headerText: 'Customer Name',
//     width: '150',
//     textAlign: 'Center',
//   },
//   {
//     field: 'TotalAmount',
//     headerText: 'Total Amount',
//     format: 'C2',
//     textAlign: 'Center',
//     editType: 'numericedit',
//     width: '150',
//   },
//   {
//     headerText: 'Status',
//     template: gridOrderStatus,
//     field: 'OrderItems',
//     textAlign: 'Center',
//     width: '120',
//   },
//   {
//     field: 'OrderID',
//     headerText: 'Order ID',
//     width: '120',
//     textAlign: 'Center',
//   },

//   {
//     field: 'Location',
//     headerText: 'Location',
//     width: '150',
//     textAlign: 'Center',
//   },
// ];













// export const contextMenuItems = [
//   'AutoFit',
//   'AutoFitAll',
//   'SortAscending',
//   'SortDescending',
//   'Copy',
//   'Edit',
//   'Delete',
//   'Save',
//   'Cancel',
//   'PdfExport',
//   'ExcelExport',
//   'CsvExport',
//   'FirstPage',
//   'PrevPage',
//   'LastPage',
//   'NextPage',
// ];





// export const stackedCustomSeries = [

//   { dataSource: stackedChartData[0],
//     xName: 'x',
//     yName: 'y',
//     name: 'Budget',
//     type: 'StackingColumn',
//     background: 'blue',

//   },

//   { dataSource: stackedChartData[1],
//     xName: 'x',
//     yName: 'y',
//     name: 'Expense',
//     type: 'StackingColumn',
//     background: 'red',

//   },

// ];

// export const stackedPrimaryXAxis = {
//   majorGridLines: { width: 0 },
//   minorGridLines: { width: 0 },
//   majorTickLines: { width: 0 },
//   minorTickLines: { width: 0 },
//   interval: 1,
//   lineStyle: { width: 0 },
//   labelIntersectAction: 'Rotate45',
//   valueType: 'Category',
// };

// export const stackedPrimaryYAxis = {
//   lineStyle: { width: 0 },
//   minimum: 100,
//   maximum: 400,
//   interval: 100,
//   majorTickLines: { width: 0 },
//   majorGridLines: { width: 1 },
//   minorGridLines: { width: 1 },
//   minorTickLines: { width: 0 },
//   labelFormat: '{value}',
// };



// export const PyramidData = [
//   { x: 'Sweet Treats', y: 120, text: '120 cal' },
//   { x: 'Milk, Youghnut, Cheese', y: 435, text: '435 cal' },
//   { x: 'Vegetables', y: 470, text: '470 cal' },
//   { x: 'Meat, Poultry, Fish', y: 475, text: '475 cal' },
//   { x: 'Fruits', y: 520, text: '520 cal' },
//   { x: 'Bread, Rice, Pasta', y: 930, text: '930 cal' },
// ];
