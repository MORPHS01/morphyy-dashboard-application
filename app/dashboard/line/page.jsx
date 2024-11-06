import { LineChart } from '@mui/x-charts/LineChart';
import Header from "@components/Header"

function line() {
  const xLabels = [2018, 2019, 2020, 2021, 2022, 2023, 2024]


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl max-md:mt-12">
      <Header category="Chart" title="Line" />
      <div className="flex justify-center items-center mb-5">
        <h3 className="text-2xl tracking-wide text-slate-900">Inflation Rate</h3>
      </div>
      <LineChart
        height={450}
        series={[
          { data: [20, 24, 36, 38, 54, 57, 70], label: 'Nigeria', color: 'rgb(7,149,71)' },
          { data: [28, 44, 48, 50, 66, 78, 84], label: 'France', color: 'rgb(42,47,133)' },
          { data: [0, 14, 26, 28, 29, 34, 65], label: 'Argentina', color: 'rgb(138,198,228)' },
          { data: [10, 20, 30, 39, 50, 67, 91], label: 'India', color: 'rgb(247,148,50)' },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        grid={{horizontal: true}}
      />
    </div>
  )
}

export default line