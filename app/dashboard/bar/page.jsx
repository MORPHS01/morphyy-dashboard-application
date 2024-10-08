import Header from "@components/header"
import { BarChart } from '@mui/x-charts/BarChart';

function bar() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ">
      <Header category="Chart" title="Bar" />
      <div className="flex justify-center items-center mb-5">
        <h3 className="text-2xl tracking-wide text-slate-900">OLympic Medal Count</h3>
      </div>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['USA', 'NGR', 'FRA', 'POR'] }]}
        series={[{ data: [4, 3, 5, 6], label:"Gold", color:"rgb(208,164,67)" }, { data: [1, 6, 3, 8], label:"Silver", color:"rgb(174,174,174)" }, { data: [2, 5, 6, 2], label:"Bronze", color:"rgb(140,89,48)" }]}
        height={400}
      />
    </div>
  )
}

export default bar