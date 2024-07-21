import React from 'react'
import TailwindConnectButton from '../ui/tailwindcss-buttons'
import Image from 'next/image'


type cardtype={ 
    title:string,
    description:string,
}
const ReusableCardComponent = ({title,description}:cardtype) => {
  return (
    <div className="flex w-full flex-col h-screen justify-center items-center bg-bglight rounded-[20px] mb-10">
        <div className="flex items-center justify-between w-full px-12">
          <div className="flex flex-col w-1/2 pr-6">
            <div className="mb-6">
              <span className="text-lg text-gray-600">RECENT</span>
              <h1 className="text-5xl font-bold">{title}</h1>
              <div className="flex space-x-2 mt-2">
                <span className="px-4 py-1 bg-gray-200 rounded-full text-gray-700">
                  Web design
                </span>
                <span className="px-4 py-1 bg-gray-200 rounded-full text-gray-700">
                  Development
                </span>
              </div>
            </div>
            <div>
              <p className="mt-4 text-gray-600 max-w-sm">
                {description}
              </p>
              {/* <button className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-full"> */}
                <TailwindConnectButton></TailwindConnectButton>
              {/* </button> */}
            </div>
          </div>
          <div className="flex w-1/2 pl-6">
            <img
              src="/assets/demo.svg"
              alt="Korba Project"
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
    </div>
  )
}

export default ReusableCardComponent