"use client"
import Header from "@components/Header"
import React, { useState } from 'react';
import { ChromePicker, SwatchesPicker } from 'react-color';

function colorPicker() {
  const [color, setColor] = useState('#03c9d7');

  function handleChangeComplete(color){
    setColor(color.hex);
  };

  function handleChange(color){
    setColor(color.hex)
  }


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl max-md:mt-12">
      <Header category="App" title="Color-Picker" />
      <div className="text-center">
        <div className="flex justify-center items-center my-[50px]">
          <div className ="w-[300px] h-[70px] rounded-xl" style={{backgroundColor: color}}/>
        </div>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <ChromePicker color={color} onChangeComplete={ handleChangeComplete }/>
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <SwatchesPicker color={color} onChange={ handleChange } />
          </div>
        </div>
      </div>
    </div>
  )
}

export default colorPicker