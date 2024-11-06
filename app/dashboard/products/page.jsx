"use client"
import Header from "@components/Header"
import { productsData } from "@data/dummyData"
import Image from "next/image"
import StarIcon from '@mui/icons-material/Star';

function Products() {
 

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl max-md:mt-12">
      <Header category="App" title="Products" />
      <div className="flex flex-wrap justify-between max-md:justify-center gap-x-4 gap-y-12">
        {productsData.map((product) => (
          <div className="w-[300px] h-[450px] rounded-3xl shadow-2xl hover:cursor-pointer hover:scale-105 transition-all">
            <Image src={product.image} className="rounded-tr-3xl rounded-tl-3xl h-[60%] object-cover"/>
            <div className="px-5 pt-7">
              <h3 className="font-semibold text-2xl tracking-wide">{product.name}</h3>
              <p className="font-light text-slate-400 mb-4">{product.category}</p>
              <p className={`text-xs ${product.status === "out of stock"? "text-red-500": "text-green-500"}`}>{product.status}</p>
              <div className="flex justify-between mt-3">
                <p>{product.price}</p>
                <div>
                  {Array.from({ length: product.starRating }).map((_,index) => (
                    <StarIcon className="text-yellow-400"/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  )
}

export default Products