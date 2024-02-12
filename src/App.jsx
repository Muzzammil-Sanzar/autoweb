import { useState } from 'react'
import Sidebar from './Sidebar'
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex overflow-y-auto max-w-screen-2xl mx-auto px-4 gap-4 xl:gap-10'>
        <Sidebar />
        <div className='w-full'>
          <div className='w-full '>
            <div class="relative">
              <input
                type="search"
                id="default-search"
                class="block w-full    py-2.5 text-sm outline-none text-gray-900 border-b placeholder:text-sm border-gray-600 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search for any vehicle"
                required
              />
              <div class="absolute inset-y-0 end-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-blue-150 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
            </div>
            <div className='mt-9 space-y-10'>
              <div className='flex items-center flex-wrap gap-3'>
                <p className='bg-[#0096FF]/10 border border-[#0096FF]/30 text-xs px-2.5 py-1'>ACURA</p>
                <p className='bg-[#0096FF]/10 border border-[#0096FF]/30 text-xs px-2.5 py-1'>ACURA</p>
                <p className='bg-[#0096FF]/10 border border-[#0096FF]/30 text-xs px-2.5 py-1'>ACURA</p>
                <button className='text-[13px] text-[#3DC2F7]'>Clear Filters</button>
                <button className='text-[13px] text-[#3DC2F7]'>Share Filter</button>
              </div>
              <div className='flex items-center justify-between'>
                <div className='space-x-3 flex items-center'>
                  <p className='font-medium uppercase'>AUCTION DATE</p>
                  <p>25</p>
                </div>
                <div className='text-sm text-gray-400 flex items-center gap-4'>
                  <p className='text-sm text-gray-400'>Page</p>
                  <FiChevronsLeft />
                  <FiChevronLeft />
                  <p className='text-blue-350 px-5 py-0.5 border border-gray-400'>1</p>
                  <FiChevronRight />
                  <FiChevronsRight />
                  <p className='text-blue-150'>of</p>
                  <p className='text-blue-350'>167</p>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-blue-250 p-4 '>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
