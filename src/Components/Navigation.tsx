import React, { FC } from 'react'

const Navigation: FC = () => {
  return (
    <div className="w-full z-30 top-0 text-white py-1 lg:py-6">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
        <div className="pl-4 flex items-center">
          <a className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            Smart Exchanger
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navigation
