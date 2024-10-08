"use client"
import Header from "@components/Header"
import FullCalendar from "@fullcalendar/react";
import dayGridPLugin from "@fullcalendar/daygrid"
import { scheduleData } from '@data/dummyData';

function calendar() {
  const currentDate = new Date();



  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <FullCalendar
        plugins={[dayGridPLugin]}
        initialView="dayGridMonth"
        events={scheduleData}
      />
    </div>
  )
}

export default calendar