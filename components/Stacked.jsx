import { BarChart } from '@mui/x-charts/BarChart';

const budget = [111.1, 127.3, 143.4, 159.9, 169.7, 123.4, 132.5];
const expenses = [157.3, 176.3, 145.6, 173.8, 122.6, 162.4, 143.2];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'July',
]


function Stacked() {
  return (
    <BarChart
      width={320}
      height={360}
      series={[
        { data: budget, label: 'Budget', id: 'pvId', stack: 'total' },
        { data: expenses, label: 'Expenses', id: 'uvId', stack: 'total' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  )
}

export default Stacked