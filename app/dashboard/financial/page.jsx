"use client"
import Header from "@components/Header"
import dynamic from 'next/dynamic';
import { financialChartData } from "@data/dummyData"

const Chart = dynamic(()=> import('react-apexcharts'), {
  ssr:false,
})

function financial() {
  const options = {
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  };



  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl max-md:mt-12">
      <Header category="Chart" title="Financial" />
      <div className="flex justify-center items-center mb-5">
        <h3 className="text-2xl tracking-wide text-slate-900">Microsoft Stocks Historical</h3>
      </div>
      <Chart options={options} series={financialChartData} type="candlestick" height={425} />
    </div>
  )
}

export default financial