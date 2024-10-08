"use client"
import Header from "@components/header"
import { PieChart } from '@mui/x-charts/PieChart';



function pie() {
  const pieChartData = [
    {id: 0, color: "rgb(139,93,65)", label: 'Labour', value: 18  },
    {id: 1, color: "rgb(200,187,248)", label: 'Legal', value: 8 },
    {id: 2, color: "rgb(249,65,114)", label: 'Production', value: 15  },
    {id: 3, color: "rgb(132,219,235)", label: 'License', value: 11  },
    {id: 4, color: "rgb(194,226,156)", label: 'Facilities', value: 18  },
    {id: 5, color: "rgb(245,209,192)", label: 'Taxes', value: 14  },
    {id: 6, color: "rgb(255,225,172)", label: 'Insurance', value: 16  },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ">
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
    </div>
  )
}

export default pie