"use client"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useState } from 'react';

import {SparkLineChart} from '@mui/x-charts/SparkLineChart';
import Stacked from '@components/Stacked';
import Pie from '@components/Pie';
import Button from '@components/Button';
import LinearChart from '@components/LinearChart';


import { earningData, medicalproBranding, recentTransactions, weeklyStats } from '@data/dummyData';
import Image from 'next/image';


function DropDown(){
  const [item, setItem] = useState(10)

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return(
    <div className="w-28 border-1 text-black border-color px-2 py-1 rounded-md">
      <Select value={item} label="Date" onChange={handleChange} >
          <MenuItem value={10}>June 2024</MenuItem>
          <MenuItem value={20}>July 2024</MenuItem>
          <MenuItem value={30}>August 2024</MenuItem>
      </Select>
    </div>
  )
};


function dashboard(){

  return (
    <div className="mt-6">
      <div className="flex flex-wrap lg:flex-nowrap justify-center mb-3 mx-auto w-[100%]">
        <div className="bg-white h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 heroPattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
            <button type="button" className="text-2xl opacity-0.9 text-white rounded-full py-3 px-4 bg-myCyan">
              <AttachMoneyIcon />
            </button>
          </div>
          <div className="mt-6">
            <Button color="white" bgColor= "bg-myCyan" text="Download" borderRadius="10px" />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 md:w-56  p-4 pt-9 rounded-2xl ">
              <button type="button" style={{ color: item.iconColor, backgroundColor: item.iconBg }} className="text-2xl opacity-0.9 rounded-[100%] py-3 px-4">
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-start max-md:justify-center">
            <p className="font-semibold text-xl">Revenue Updates</p>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLineChart data={[2, 6, 8, 5, 10]} height={100} showHighlight showTooltip/>
              </div>
              
              <div className="mt-10">
                <Button color="white" bgColor="bg-myCyan" text="Download Report" borderRadius="10px" />
              </div>
            </div>
            <div>
              <Stacked/>
            </div>
          </div>
        </div>
        <div>
          <div className=" rounded-2xl md:w-400 p-4 m-3 bg-myCyan">
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Earnings</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLineChart height={100} plotType="bar" data={[2, 6, 8, 5, 10]} width="320" colors={['white']} showHighlight showTooltip/>
            </div>
          </div>

          <div className="bg-white rounded-2xl md:w-400 p-1 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="text-gray-400">Yearly sales</p>
            </div>

            <div className="w-40">
              <Pie/>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center max-md:w-[85%] mx-auto">
        <div className="bg-white p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <DropDown/>
          </div>
          <div className="mt-10 w-72 md:w-[100%]">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between items-center mt-2 hover:bg-gray-100 p-3 rounded-xl cursor-pointer">
                <div className="flex gap-4 items-center">
                  <button type="button" style={{ color: item.iconColor, backgroundColor: item.iconBg, }} className="text-2xl rounded-lg py-3 px-4">
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`flex items-center ${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button color="white" bgColor="bg-myCyan" text="Add" borderRadius="10px" />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl ">
          <div className="flex justify-between items-center gap-2 mb-10 max-md:w-[85%] mx-auto">
            <p className="text-xl font-semibold">Sales Overview</p>
            <DropDown/>
          </div>
          <Box flexGrow={1}>
            <div className="md:w-full overflow-auto">
              <LinearChart />
            </div>
          </Box>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-10">
        <div className="bg-white rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Weekly Stats</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <MoreHorizIcon />
            </button>
          </div>

          <div className="mt-10 ">
            {weeklyStats.map((item) => (
              <div key={item.title} className="flex justify-between mt-5 w-full hover:bg-gray-100 p-3 rounded-xl cursor-pointer">
                <div className="flex gap-4 items-center">
                  <button type="button" style={{ background: item.iconBg }} className="text-2xl text-white rounded-full py-3 px-4" >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p className={`flex items-center text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
            <div className="mt-4">
              <SparkLineChart height="100px"  data={[2, 6, 8, 5, 10]} width="320" colors="rgb(242, 252, 253)" showHighlight showTooltip/>
            </div>
          </div>

        </div>
        <div className="w-400 bg-white rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">MedicalPro Branding</p>
            <button type="button" className="text-xl font-semibold text-gray-400">
              <MoreHorizIcon />
            </button>
          </div>
          <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-1 px-2 text-white mt-10">
            16 APR, 2021
          </p>

          <div className="flex gap-4 border-b-1 border-color mt-6">
            {medicalproBranding.data.map((item) => (
              <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
                <p className="text-xs text-gray-400">{item.title}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="border-b-1 border-color pb-4 mt-2">
            <p className="text-md font-semibold mb-2">Teams</p>

            <div className="flex gap-4">
              {medicalproBranding.teams.map((item) => (
                <p key={item.name} style={{ background: item.color }} className="cursor-pointer text-white py-1 px-3 rounded-lg text-xs" >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-md font-semibold mb-2">Leaders</p>
            <div className="flex gap-4">
              {medicalproBranding.leaders.map((item, index) => (
                <Image key={index} className="rounded-full w-8 h-8" src={item.image} alt="" />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button color="white" bgColor="bg-myCyan" text="Add" borderRadius="10px" />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard
