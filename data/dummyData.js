import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'; 
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import FormatColorFillOutlinedIcon from '@mui/icons-material/FormatColorFillOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartIcon from '@mui/icons-material/PieChart';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';






import avatar from '@data/avatar.png';
import avatar2 from '@data/avatar2.png';
import avatar3 from '@data/avatar3.png';
import avatar4 from '@data/avatar4.png';
import product1 from '@data/product1.png';
import product2 from '@data/product2.png';
import product3 from '@data/product3.png';
import product4 from '@data/product4.png';
import product5 from '@data/product5.png';
import product6 from '@data/product6.png';
import product7 from '@data/product7.png';
import product8 from '@data/product8.png';
import product9 from '@data/product9.png';


export const productsData = [
  {
    id: 1,
    image: product1,
    name: 'Toy Car',
    price: '$12.99',
    category: 'Toys & Games',
    status: 'out of stock',
    starRating: 4
  },
  {
    id: 2,
    image: product2,
    name: 'Sunglasses',
    price: '$24.99',
    category: 'Fashion Accessories',
    status: 'in stock',
    starRating: 4
  },
  {
    id: 3,
    image: product3,
    name: 'Wrist Watch',
    price: '$75.00',
    category: 'Jewelry & Watches',
    status: 'in stock',
    starRating: 5
  },
  {
    id: 4,
    image: product4,
    name: 'Shoe',
    price: '$49.99',
    category: 'Footwear',
    status: 'in stock',
    starRating: 3
  },
  {
    id: 5,
    image: product5,
    name: 'Cup',
    price: '$5.99',
    category: 'Kitchen & Dining',
    status: 'out of stock',
    starRating: 4
  },
  {
    id: 6,
    image: product6,
    name: 'Tomato',
    price: '$0.99',
    category: 'Grocery',
    status: 'in stock',
    starRating: 5
  },
  {
    id: 7,
    image: product7,
    name: 'Ice Cream',
    price: '$3.49',
    category: 'Frozen Desserts',
    status: 'out of stock',
    starRating: 4
  },
  {
    id: 8,
    image: product8,
    name: 'Toy Windmill',
    price: '$6.99',
    category: 'Toys & Games',
    status: 'in stock',
    starRating: 3
  },
  {
    id: 9,
    image: product9,
    name: 'Lollipop',
    price: '$1.49',
    category: 'Confectionery',
    status: 'in stock',
    starRating: 4
  },
  {
    id: 10,
    image: product1,
    name: 'Toy Car',
    price: '$12.99',
    category: 'Toys & Games',
    status: 'out of stock',
    starRating: 4
  },
  {
    id: 11,
    image: product2,
    name: 'Sunglasses',
    price: '$24.99',
    category: 'Fashion Accessories',
    status: 'in stock',
    starRating: 4
  },
  {
    id: 12,
    image: product3,
    name: 'Wrist Watch',
    price: '$75.00',
    category: 'Jewelry & Watches',
    status: 'in stock',
    starRating: 5
  }
]





export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'ecommerce',
        web: '',
        icon: <ShoppingBagIcon />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'orders',
        web: '/orders',
        icon: <ShoppingCartOutlinedIcon />,
      },
      {
        name: 'employees',
        web: '/employees',
        icon: <PeopleAltIcon />,
      },
      {
        name: 'customers',
        web: '/customers',
        icon: <PersonOutlineOutlinedIcon />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        web: '/calendar',
        icon: <CalendarTodayOutlinedIcon  />,
      },
      {
        name: 'products',
        web: '/products',
        icon: <ShoppingCartIcon  />,
      },
      {
        name: 'editor',
        web: '/editor',
        icon: <EditNoteOutlinedIcon  />,
      },
      {
        name: 'color-picker',
        web: '/color-picker',
        icon: <FormatColorFillOutlinedIcon  />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        web: '/line',
        icon: <ShowChartOutlinedIcon  />,
      },
      {
        name: 'bar',
        web: '/bar',
        icon: <BarChartOutlinedIcon  />,
      },
      {
        name: 'pie',
        web: '/pie',
        icon: <PieChartIcon  />,
      },
      {
        name: 'financial',
        web: '/financial',
        icon: <CandlestickChartIcon  />,
      },
    ],
  },
];


export const earningData = [
    {
      icon: <PeopleAltIcon />,
      amount: '39,354',
      percentage: '-4%',
      title: 'Customers',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
    {
      icon: <ViewInArOutlinedIcon />,
      amount: '4,396',
      percentage: '+23%',
      title: 'Products',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: 'green-600',
    },
    {
      icon: <BarChartIcon />,
      amount: '423,39',
      percentage: '+38%',
      title: 'Sales',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
  
      pcColor: 'green-600',
    },
    // {
    //   icon: <CachedIcon />,
    //   amount: '39,354',
    //   percentage: '-12%',
    //   title: 'Refunds',
    //   iconColor: 'rgb(0, 194, 146)',
    //   iconBg: 'rgb(235, 250, 242)',
    //   pcColor: 'red-600',
    // },
];

export const medicalproBranding = {
  data: [
    {
      title: 'Due Date',
      desc: 'Oct 23, 2021',
    },
    {
      title: 'Budget',
      desc: '$98,500',
    },
    {
      title: 'Expense',
      desc: '$63,000',
    },
  ],
  teams: [
    {
      name: 'Bootstrap',
      color: 'orange',
    },
    {
      name: 'Angular',
      color: '#FB9678',
    },
  ],
  leaders: [
    {
      image:
        avatar2,
    },
    {
      image:
        avatar3,
    },
    {
      image:
        avatar2,
    },
    {
      image:
        avatar4,
    },
    {
      image:
        avatar,
    },
  ],
};


export const recentTransactions = [
  {
    icon: <AttachMoneyIcon />,
    amount: '+$350',
    title: 'Paypal Transfer',
    desc: 'Money Added',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'text-myCyan',
  },
  {
    icon: <ShieldOutlinedIcon />,
    amount: '-$560',
    desc: 'Bill Payment',
    title: 'Wallet',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'text-red-600',
  },
  {
    icon: <CreditCardOutlinedIcon />,
    amount: '+$350',
    title: 'Credit Card',
    desc: 'Money reversed',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',

    pcColor: 'text-myCyan',
  },
  {
    icon: <DoneOutlinedIcon />,
    amount: '+$350',
    title: 'Bank Transfer',
    desc: 'Money Added',

    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'text-myCyan',
  },
  {
    icon: <AttachMoneyIcon />,
    amount: '-$50',
    percentage: '+38%',
    title: 'Refund',
    desc: 'Payment Sent',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'text-red-600',
  },
];


export const weeklyStats = [
  {
    icon: <ShoppingCartOutlinedIcon />,
    amount: '-$560',
    title: 'Top Sales',
    desc: 'Johnathan Doe',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <StarBorderOutlinedIcon />,
    amount: '-$560',
    title: 'Best Seller',
    desc: 'MaterialPro Admin',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-600',
  },
  {
    icon: <ChatBubbleOutlineIcon />,
    amount: '+$560',
    title: 'Most Commented',
    desc: 'Ample Admin',
    iconBg: '#00C292',
    pcColor: 'green-500',
  },
];


export const ordersData = [
  {
    id: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    id: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    id: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    id: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    id: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
    product1,
  },
  {
    id: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    id: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    id: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    id: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product5,
  },
  {
    id: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product7,
  },
  {
    id: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product1,
  },
  {
    id: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product8,
  },
  {
    id: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    id: 11248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    id: 315653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    id: 310457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    id: 813486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    id: 718975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    id: 91757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    id: 914895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    id: 815954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    id: 815954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product2,
  },
  {
    id: 814534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product8,
  },
  {
    id: 31489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    id: 21546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product6,
  },
  {
    id: 814534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product8,
  },
  {
    id: 10148,
    CustomerName: 'Vinet',
    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    id: 341653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    id: 391457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    id: 891486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    id: 741975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    id: 94157,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    id: 941895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    id: 841954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    id: 841954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product3
  },
  {
    id: 871534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product1
  },
  {
    id: 38189,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3
  },
  {
    id: 24146,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4
  },
  {
    id: 871534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4
  },
  {
    id: 40248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    id: 445653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    id: 490457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    id: 493486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    id: 448975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    id: 44757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    id: 444895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    id: 445954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    id: 445954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product1
  },
  {
    id: 474534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4
  },
  {
    id: 48489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3
  },
  {
    id: 44546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product7
  },
  {
    id: 474534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product9
  },
];


export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '22/02/2024',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar3,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Nigeria',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '22/02/2024',
    Country: 'Brazil',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Canada',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '22/02/2024',
    Country: 'India',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Canada',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '22/02/2024',
    Country: 'India',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Mofe Atoyebi',
    Title: 'Sales Representative',
    HireDate: '22/02/2024',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'David Letterman',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Nigeria',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'John Cena',
    Title: 'HR',
    HireDate: '22/02/2024',
    Country: 'Brazil',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Ryan Reynolds',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Canada',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'John Smith',
    Title: 'HR',
    HireDate: '22/02/2024',
    Country: 'India',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Leon Carter',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Canada',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Bo Christopher',
    Title: 'HR',
    HireDate: '22/02/2024',
    Country: 'India',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Xin Zhang',
    Title: 'Sales Representative',
    HireDate: '22/02/2024',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar,
  },
  {
    EmployeeID: 2,
    Name: 'Angela Lucas',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Nigeria',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Marshal Matthers',
    Title: 'HR',
    HireDate: '22/02/2024',
    Country: 'Brazil',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'William Oxford',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Canada',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Joseph Kenedy',
    Title: 'HR',
    HireDate: '22/02/2024',
    Country: 'India',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Andrew Garfield',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Canada',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Christian Bale',
    Title: 'HR',
    HireDate: '22/02/2024',
    Country: 'India',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'ALexander Arnold',
    Title: 'Sales Representative',
    HireDate: '22/02/2024',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Kylian Mbappe',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Nigeria',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Lionel Messi',
    Title: 'HR',
    HireDate: '22/02/2024',
    Country: 'Brazil',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Charles White',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Canada',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Simon Minter',
    Title: 'HR',
    HireDate: '22/02/2024',
    Country: 'India',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Lord Goku',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Canada',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Wade Wilson',
    Title: 'HR',
    HireDate: '22/02/2024',
    Country: 'India',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Mark Fishbach',
    Title: 'Sales Representative',
    HireDate: '22/02/2024',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Bob Muyskern',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Nigeria',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Wade Barnes',
    Title: 'HR',
    HireDate: '22/02/2024',
    Country: 'Brazil',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Rick Sanchez',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Canada',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Morty Smith',
    Title: 'HR',
    HireDate: '22/02/2024',
    Country: 'India',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Barney Stinston',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Canada',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Abagail Kovacich',
    Title: 'HR',
    HireDate: '22/02/2024',
    Country: 'India',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Tobi Brown',
    Title: 'Sales Representative',
    HireDate: '22/02/2024',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Sean Mcloughin',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Nigeria',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Felix Kjelberg',
    Title: 'HR',
    HireDate: '22/02/2024',
    Country: 'Brazil',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Jimmy Donaldson',
    Title: 'Marketing Head',
    HireDate: '22/02/2024',
    Country: 'Canada',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
];

export const customersData = [
  {
    id: 1001,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    id: 1002,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    id: 1003,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    id: 1004,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    id: 1005,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    id: 1006,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    id: 1007,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    id: 1008,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    id: 1009,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    id: 1010,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    id: 1011,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    id: 1012,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    id: 1013,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    id: 1014,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    id: 1015,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    id: 1016,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    id: 1017,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    id: 1018,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    id: 1019,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    id: 1020,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    id: 1021,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    id: 1022,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    id: 1023,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    id: 1024,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    id: 1025,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    id: 1026,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    id: 1027,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    id: 1028,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    id: 1029,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    id: 1030,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    id: 1031,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    id: 1032,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    id: 1033,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    id: 1034,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    id: 1035,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    id: 1036,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    id: 1037,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    id: 1038,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    id: 1039,
    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    id: 1040,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },

];


export const scheduleData = [
  {
    Id: 1,
    title: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    date: '2024-10-10',
    EndTime: '2024-10-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    title: 'Thule Air Crash Report',
    Location: 'Newyork City',
    date: '2024-10-11',
    EndTime: '2024-10-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    title: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    date: '2024-10-12',
    EndTime: '2024-10-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    title: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    date: '2024-10-13',
    EndTime: '2024-10-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    title: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    date: '2024-10-14',
    EndTime: '2024-10-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    title: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    date: '2024-10-14',
    EndTime: '2024-10-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    title: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    date: '2024-10-15',
    EndTime: '2024-10-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    title: 'Life on Mars',
    Location: 'Space Center USA',
    date: '2024-10-16',
    EndTime: '2024-10-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    title: 'Alien Civilization',
    Location: 'Space Center USA',
    date: '2024-10-18',
    EndTime: '2024-10-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    title: 'Wildlife Galleries',
    Location: 'Africa',
    date: '2024-10-20',
    EndTime: '2024-10-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    title: 'Best Photography Ever',
    Location: 'London',
    date: '2024-10-21',
    EndTime: '2024-10-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    title: 'Smarter Puppies',
    Location: 'Sweden',
    date: '2024-10-08',
    EndTime: '2024-10-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    title: 'Myths of Andromeda Galaxy',
    Location: 'Space Center USA',
    date: '2024-10-06',
    EndTime: '2024-10-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    title: 'Aliens vs Humans',
    Location: 'Research Center of USA',
    date: '2024-10-05',
    EndTime: '2024-10-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    title: 'Facts of Humming Birds',
    Location: 'California',
    date: '2024-10-19',
    EndTime: '2024-10-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    title: 'Sky Gazers',
    Location: 'Alaska',
    date: '2024-10-22',
    EndTime: '2024-10-22T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    title: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    date: '2024-10-11',
    EndTime: '2024-10-11T02:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    title: 'Space Galaxies and Planets',
    Location: 'Space Center USA',
    date: '2024-10-11',
    EndTime: '2024-10-11T13:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    title: 'Lifecycle of Bumblebee',
    Location: 'San Fransisco',
    date: '2024-10-14',
    EndTime: '2024-10-14T02:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    title: 'Alien Civilization',
    Location: 'Space Center USA',
    date: '2024-10-14',
    EndTime: '2024-10-14T12:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    title: 'Alien Civilization',
    Location: 'Space Center USA',
    date: '2024-10-10',
    EndTime: '2024-10-10T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    title: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    date: '2024-10-12',
    EndTime: '2024-10-12T10:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    title: 'Sky Gazers',
    Location: 'Greenland',
    date: '2024-10-15',
    EndTime: '2024-10-15T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    title: 'Facts of Humming Birds',
    Location: 'California',
    date: '2024-10-16',
    EndTime: '2024-10-16T09:00:00.000Z',
    CategoryColor: '#7fa900',
  },
];


export const EditorData =  (
  ` This is a beautiful rich text editor designed by Ayonimofe Atoyebi using React Quill. 


    React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the directions in this section will help you get started.

    Add React to a Website
    You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.

    Create a New React App
    When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!

    As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.

    Learn React
    People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.

    If you prefer to learn by doing, start with our practical tutorial.
    If you prefer to learn concepts step by step, start with our guide to main concepts.
    Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.

    First Examples
    The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.

    React for Designers
    If you’re coming from a design background, these resources are a great place to get started.

    JavaScript Resources
    The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.

    We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.
`
);


export const financialChartData = [
  {
    data: [
      {
        x: new Date('2012-04-02'),
        y:[85.9757, 90.6657, 85.7685, 90.5257, 660187068]
      },
      {
        x: new Date('2012-04-09'),
        y:[89.4471, 92, 86.2157, 86.4614, 912634864]
      },
      {
        x: new Date('2012-04-16'),
        y:[87.1514, 88.6071, 81.4885, 81.8543, 1221746066]
      },
      {
        x: new Date('2012-04-23'),
        y:[81.5157, 88.2857, 79.2857, 86.1428, 965935749]
      },
      {
        x: new Date('2012-04-30'),
        y:[85.4, 85.4857, 80.7385, 80.75, 615249365]
      },
      {
        x: new Date('2012-05-07'),
        y:[80.2143, 82.2685, 79.8185, 80.9585, 541742692]
      },
      {
        x: new Date('2012-05-14'),
        y:[80.3671, 81.0728, 74.5971, 75.7685, 708126233]
      },
      {
        x: new Date('2012-05-21'),
        y:[76.3571, 82.3571, 76.2928, 80.3271, 682076215]
      },
      {
        x: new Date('2012-05-28'),
        y:[81.5571, 83.0714, 80.0743, 80.1414, 480059584]
      },
      {
        x: new Date('2012-06-04'),
        y:[80.2143, 82.9405, 78.3571, 82.9028, 517577005]
      },
      {
        x: new Date('2012-06-11'),
        y:[83.96, 84.0714, 80.9571, 82.0185, 499693120]
      },
      {
        x: new Date('2012-06-18'),
        y:[81.5657, 84.2857, 81.4814, 83.1571, 442172142]
      },
      {
        x: new Date('2012-06-25'),
        y:[82.4714, 83.4285, 80.8014, 83.4285, 371529102]
      },
      {
        x: new Date('2012-07-02'),
        y:[83.5328, 87.7628, 83.3714, 86.5543, 385906790]
      },
      {
        x: new Date('2012-07-09'),
        y:[86.4714, 88.5528, 84.6685, 86.4243, 524235196]
      },
      {
        x: new Date('2012-07-16'),
        y:[86.4457, 87.9071, 86.1643, 86.3285, 419537217]
      },
      {
        x: new Date('2012-07-23'),
        y:[84.9143, 87.0971, 81.4285, 83.5943, 680773023]
      },
      {
        x: new Date('2012-07-30'),
        y:[84.4171, 88.2828, 83.9743, 87.9571, 475109323]
      },
      {
        x: new Date('2012-08-06'),
        y:[88.1843, 89.2857, 87.8943, 88.8143, 312826308]
      },
      {
        x: new Date('2012-08-13'),
        y:[89.0557, 92.5985, 89.0357, 92.5871, 392867193]
      },
      {
        x: new Date('2012-08-20'),
        y:[92.8585, 96.4114, 92.5871, 94.746, 708614692]
      },
      {
        x: new Date('2012-08-27'),
        y:[97.1414, 97.2671, 93.8928, 95.0343, 383807217]
      },
      {
        x: new Date('2012-09-03'),
        y:[95.1085, 97.4971, 94.9285, 97.2057, 355722047]
      },
      {
        x: new Date('2012-09-10'),
        y:[97.2071, 99.5685, 93.7143, 98.7543, 724042207]
      },
      {
        x: new Date('2012-09-17'),
        y:[99.9071, 100.7243, 99.0885, 100.0135, 500166040]
      },
      {
        x: new Date('2012-09-24'),
        y:[98.1228, 99.3028, 94.3357, 95.3007, 714507994]
      },
      {
        x: new Date('2012-10-01'),
        y:[95.88, 96.6785, 92.95, 93.2271, 638543622]
      },
      {
        x: new Date('2012-10-08'),
        y:[92.4114, 92.5085, 89.0785, 89.9591, 747127724]
      },
      {
        x: new Date('2012-10-15'),
        y:[90.3357, 93.2557, 87.0885, 87.12, 646996264]
      },
      {
        x: new Date('2012-10-22'),
        y:[87.4885, 90.7685, 84.4285, 86.2857, 866040680]
      },
      {
        x: new Date('2012-10-29'),
        y:[84.9828, 86.1428, 82.1071, 82.4, 367371310]
      },
      {
        x: new Date('2012-11-05'),
        y:[83.3593, 84.3914, 76.2457, 78.1514, 919719846]
      },
      {
        x: new Date('2012-11-12'),
        y:[79.1643, 79.2143, 72.25, 75.3825, 894382149]
      },
      {
        x: new Date('2012-11-19'),
        y:[77.2443, 81.7143, 77.1257, 81.6428, 527416747]
      },
      {
        x: new Date('2012-11-26'),
        y:[82.2714, 84.8928, 81.7514, 83.6114, 646467974]
      },
      {
        x: new Date('2012-12-03'),
        y:[84.8071, 84.9414, 74.09, 76.1785, 980096264]
      },
      {
        x: new Date('2012-12-10'),
        y:[75, 78.5085, 72.2257, 72.8277, 835016110]
      },
      {
        x: new Date('2012-12-17'),
        y:[72.7043, 76.4143, 71.6043, 74.19, 726150329]
      },
      {
        x: new Date('2012-12-24'),
        y:[74.3357, 74.8928, 72.0943, 72.7984, 321104733]
      },
      {
        x: new Date('2012-12-31'),
        y:[72.9328, 79.2857, 72.7143, 75.2857, 540854882]
      },
      {
        x: new Date('2013-01-07'),
        y:[74.5714, 75.9843, 73.6, 74.3285, 574594262]
      },
      {
        x: new Date('2013-01-14'),
        y:[71.8114, 72.9643, 69.0543, 71.4285, 803105621]
      },
      {
        x: new Date('2013-01-21'),
        y:[72.08, 73.57, 62.1428, 62.84, 971912560]
      },
      {
        x: new Date('2013-01-28'),
        y:[62.5464, 66.0857, 62.2657, 64.8028, 656549587]
      },
      {
        x: new Date('2013-02-04'),
        y:[64.8443, 68.4014, 63.1428, 67.8543, 743778993]
      },
      {
        x: new Date('2013-02-11'),
        y:[68.0714, 69.2771, 65.7028, 65.7371, 585292366]
      },
      {
        x: new Date('2013-02-18'),
        y:[65.8714, 66.1043, 63.26, 64.4014, 421766997]
      },
      {
        x: new Date('2013-02-25'),
        y:[64.8357, 65.0171, 61.4257, 61.4957, 582741215]
      },
      {
        x: new Date('2013-03-04'),
        y:[61.1143, 62.2043, 59.8571, 61.6743, 632856539]
      },
      {
        x: new Date('2013-03-11'),
        y:[61.3928, 63.4614, 60.7343, 63.38, 572066981]
      },
      {
        x: new Date('2013-03-18'),
        y:[63.0643, 66.0143, 63.0286, 65.9871, 552156035]
      },
      {
        x: new Date('2013-03-25'),
        y:[66.3843, 67.1357, 63.0886, 63.2371, 390762517]
      },
      {
        x: new Date('2013-04-01'),
        y:[63.1286, 63.3854, 59.9543, 60.4571, 505273732]
      },
      {
        x: new Date('2013-04-08'),
        y:[60.6928, 62.57, 60.3557, 61.4, 387323550]
      },
      {
        x: new Date('2013-04-15'),
        y:[61, 61.1271, 55.0143, 55.79, 709945604]
      },
      {
        x: new Date('2013-04-22'),
        y:[56.0914, 59.8241, 55.8964, 59.6007, 787007506]
      },
      {
        x: new Date('2013-04-29'),
        y:[60.0643, 64.7471, 60, 64.2828, 655020017]
      },
      {
        x: new Date('2013-05-06'),
        y:[65.1014, 66.5357, 64.3543, 64.71, 545488533]
      },
      {
        x: new Date('2013-05-13'),
        y:[64.5014, 65.4143, 59.8428, 61.8943, 633706550]
      },
      {
        x: new Date('2013-05-20'),
        y:[61.7014, 64.05, 61.4428, 63.5928, 494379068]
      },
      {
        x: new Date('2013-05-27'),
        y:[64.2714, 65.3, 62.7714, 64.2478, 362907830]
      },
      {
        x: new Date('2013-06-03'),
        y:[64.39, 64.9186, 61.8243, 63.1158, 443249793]
      },
      {
        x: new Date('2013-06-10'),
        y:[63.5328, 64.1541, 61.2143, 61.4357, 389680092]
      },
      {
        x: new Date('2013-06-17'),
        y:[61.6343, 62.2428, 58.3, 59.0714, 400384818]
      },
      {
        x: new Date('2013-06-24'),
        y:[58.2, 58.38, 55.5528, 56.6471, 519314826]
      },
      {
        x: new Date('2013-07-01'),
        y:[57.5271, 60.47, 57.3171, 59.6314, 343878841]
      },
      {
        x: new Date('2013-07-08'),
        y:[60.0157, 61.3986, 58.6257, 60.93, 384106977]
      },
      {
        x: new Date('2013-07-15'),
        y:[60.7157, 62.1243, 60.5957, 60.7071, 286035513]
      },
      {
        x: new Date('2013-07-22'),
        y:[61.3514, 63.5128, 59.8157, 62.9986, 395816827]
      },
      {
        x: new Date('2013-07-29'),
        y:[62.9714, 66.1214, 62.8857, 66.0771, 339668858]
      },
      {
        x: new Date('2013-08-05'),
        y:[66.3843, 67.4128, 64.8071, 64.9214, 368486781]
      },
      {
        x: new Date('2013-08-12'),
        y:[65.2657, 72.0357, 65.2328, 71.7614, 711563584]
      },
      {
        x: new Date('2013-08-19'),
        y:[72.0485, 73.3914, 71.1714, 71.5743, 417119660]
      },
      {
        x: new Date('2013-08-26'),
        y:[71.5357, 72.8857, 69.4286, 69.6023, 392805888]
      },
      {
        x: new Date('2013-09-02'),
        y:[70.4428, 71.7485, 69.6214, 71.1743, 317244380]
      },
      {
        x: new Date('2013-09-09'),
        y:[72.1428, 72.56, 66.3857, 66.4143, 669376320]
      },
      {
        x: new Date('2013-09-16'),
        y:[65.8571, 68.3643, 63.8886, 66.7728, 625142677]
      },
      {
        x: new Date('2013-09-23'),
        y:[70.8714, 70.9871, 68.6743, 68.9643, 475274537]
      },
      {
        x: new Date('2013-09-30'),
        y:[68.1786, 70.3357, 67.773, 69.0043, 368198906]
      },
      {
        x: new Date('2013-10-07'),
        y:[69.5086, 70.5486, 68.3257, 70.4017, 361437661]
      },
      {
        x: new Date('2013-10-14'),
        y:[69.9757, 72.7514, 69.9071, 72.6985, 342694379]
      },
      {
        x: new Date('2013-10-21'),
        y:[73.11, 76.1757, 72.5757, 75.1368, 490458997]
      },
      {
        x: new Date('2013-10-28'),
        y:[75.5771, 77.0357, 73.5057, 74.29, 508130174]
      },
      {
        x: new Date('2013-11-04'),
        y:[74.4428, 75.555, 73.1971, 74.3657, 318132218]
      },
      {
        x: new Date('2013-11-11'),
        y:[74.2843, 75.6114, 73.4871, 74.9987, 306711021]
      },
      {
        x: new Date('2013-11-18'),
        y:[74.9985, 75.3128, 73.3814, 74.2571, 282778778]
      },
      {
        x: new Date('2013-11-25'),
        y:[74.4314, 79.7614, 74.4285, 79.4385, 327405302]
      },
      {
        x: new Date('2013-12-02'),
        y:[79.7143, 82.1622, 78.6885, 80.0028, 522055676]
      },
      {
        x: new Date('2013-12-09'),
        y:[80.1286, 81.5671, 79.0957, 79.2043, 387271099]
      },
      {
        x: new Date('2013-12-16'),
        y:[79.2885, 80.377, 76.9714, 78.4314, 457580848]
      },
      {
        x: new Date('2013-12-23'),
        y:[81.1428, 81.6971, 79.9285, 80.0128, 274253503]
      },
      {
        x: new Date('2013-12-30'),
        y:[79.6371, 80.1828, 77.2043, 77.2828, 275734934]
      },
      {
        x: new Date('2014-01-06'),
        y:[76.7785, 78.1228, 75.8728, 76.1343, 393462075]
      },
      {
        x: new Date('2014-01-13'),
        y:[75.7014, 80.0285, 75.6971, 77.2385, 439557459]
      },
      {
        x: new Date('2014-01-20'),
        y:[77.2843, 79.6128, 77.2028, 78.01, 385585525]
      },
      {
        x: new Date('2014-01-27'),
        y:[78.5814, 79.2571, 70.5071, 71.5143, 813702575]
      },
      {
        x: new Date('2014-02-03'),
        y:[71.8014, 74.7042, 71.3286, 74.24, 434447570]
      },
      {
        x: new Date('2014-02-10'),
        y:[74.0943, 77.9971, 74, 77.7128, 379011880]
      },
      {
        x: new Date('2014-02-17'),
        y:[78, 78.7414, 74.9428, 75.0357, 289609443]
      },
      {
        x: new Date('2014-02-24'),
        y:[74.7357, 76.1071, 73.6571, 75.1771, 367569649]
      },
      {
        x: new Date('2014-03-03'),
        y:[74.7743, 76.3928, 74.6871, 75.7771, 275972640]
      },
      {
        x: new Date('2014-03-10'),
        y:[75.48, 77.0943, 74.7143, 74.9557, 287729528]
      },
    ]
  }
];






















