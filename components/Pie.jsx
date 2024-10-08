import { PieChart } from '@mui/x-charts/PieChart';


function Pie() {
  return (
    <PieChart
      series={[
        {data: [
          { label: '2019', value: 13 },
          { label: '2020', value: 15 },
          { label: '2021', value: 17 },
          { label: '2022', value: 18 },
          { label: '2023', value: 21 },
          { label: '2024', value: 24 },
        ]}
      ]}
      height={300}
    />
  )
}

export default Pie