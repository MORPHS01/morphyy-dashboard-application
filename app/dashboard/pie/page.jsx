"use client"
import Header from "@components/Header"
import { PieChart } from '@mui/x-charts/PieChart';



function pie() {
  const pieChartData = [
    {id: 0, color: "rgb(139,93,65)", value: 18  },
    {id: 1, color: "rgb(200,187,248)", value: 8 },
    {id: 2, color: "rgb(249,65,114)", value: 15  },
    {id: 3, color: "rgb(132,219,235)", value: 11  },
    {id: 4, color: "rgb(194,226,156)", value: 18  },
    {id: 5, color: "rgb(245,209,192)", value: 14  },
    {id: 6, color: "rgb(255,225,172)", value: 16  },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl max-md:mt-12 max-sm:w-[90%]">
      <Header category="Chart" title="Pie" />
      <div className="flex justify-center items-center mb-5">
        <h3 className="text-2xl tracking-wide text-slate-900">Project Cost Breakdown</h3>
      </div>
      <PieChart
        series={[
          {
            data: pieChartData,
            innerRadius: 60,
            outerRadius: 140,
            paddingAngle: 2,
            highlightScope: { fade: 'global', highlight: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            arcLabel: (item) => `${item.value}%`,
          }
        ]}
        height={300}
      />
      <div className="flex flex-wrap gap-4">
        <div className="flex gap-x-1"><div className="mr-[2px] bg-color1 h-4 w-4"></div><p>Labour</p></div>
        <div className="flex gap-x-1"><div className="mr-[2px] bg-color2 h-4 w-4"></div><p>Legal</p></div>
        <div className="flex gap-x-1"><div className="mr-[2px] bg-color3 h-4 w-4"></div><p>Production</p></div>
        <div className="flex gap-x-1"><div className="mr-[2px] bg-color4 h-4 w-4"></div><p>License</p></div>
        <div className="flex gap-x-1"><div className="mr-[2px] bg-color5 h-4 w-4"></div><p>Facilities</p></div>
        <div className="flex gap-x-1"><div className="mr-[2px] bg-color6 h-4 w-4"></div><p>Taxes</p></div>
        <div className="flex gap-x-1"><div className="mr-[2px] bg-color7 h-4 w-4"></div><p>Insurance</p></div>
      </div>
    </div>
  )
}

export default pie