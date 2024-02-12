
import { RiCloseFill } from 'react-icons/ri'
import { Disclosure } from '@headlessui/react'
import { IoChevronUp } from "react-icons/io5";
import { useState } from 'react'

export default function Sidebar() {
  const [showMenue, setShowMenue] = useState(false);
  return (
    <>
      <div className='bg-[#F8F8F8]'>
        <button type="button" onClick={e => setShowMenue(true)} className="flex items-center p-2 ml-3 border-0 text-sm rounded-lg lg:hidden hover:bg-gray-100">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6  h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
      </div>

      <aside className={` w-[418px] bg-[#F8F8F8]  ${showMenue ? null : `hidden`} lg:block`} aria-label="Sidebar">
        <div className="h-full py-4 space-y-3">
          {showMenue &&
            <button className='float-right text-xl px-4' onClick={e => setShowMenue(false)}>
              <RiCloseFill />
            </button>
          }
          <h1 className=' text-[32px] text-blue-150'>Find Vehicles</h1>
          <div className='space-y-5'>
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full justify-between bg-blue-250 px-5 py-3.5 text-left text-lg font-medium text-blue-150 hover:bg-gray-200">
                      <span>Vehicle Type</span>
                      <IoChevronUp
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-2.5 w-2.5 text-blue-150`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      Vehicle Types here
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full justify-between bg-blue-250 px-5 py-3.5 text-left text-lg font-medium text-blue-150 hover:bg-gray-200">
                      <span>Featured</span>
                      <IoChevronUp
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-2.5 w-2.5 text-blue-150`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-2 pt-4 text-sm text-gray-500 bg-blue-250">
                      <div className='space-y-4'>
                        <div className='flex items-center justify-between'>
                          <p className='text-sm text-blue-150'>Buy Now</p>
                          <p className='text-xs text-gray-400'>216</p>
                        </div>
                        <div className='flex items-center justify-between'>
                          <p className='text-sm text-blue-150'>Timed Auctions</p>
                          <p className='text-xs text-gray-400'>216</p>
                        </div>
                        <div className='flex items-center justify-between'>
                          <p className='text-sm text-blue-150'>Buy Now</p>
                          <p className='text-xs text-gray-400'>216</p>
                        </div>
                        <div className='flex items-center justify-between'>
                          <p className='text-sm text-blue-150'>Buy Now</p>
                          <p className='text-xs text-gray-400'>216</p>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full justify-between bg-blue-250 px-5 py-3.5 text-left text-lg font-medium text-blue-150 hover:bg-gray-200">
                      <span>Make</span>
                      <IoChevronUp
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-2.5 w-2.5 text-blue-150`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-2 pt-4 text-sm text-gray-500 bg-blue-250">
                      <div className='space-y-4'>
                        <div>
                          <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg class="w-4 h-4 text-blue-150 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                              </svg>
                            </div>
                            <input
                              type="search"
                              id="default-search"
                              class="block w-full p-2.5 ps-10 text-sm outline-none text-gray-900 border border-gray-600 bg-blue-250 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Start writing"
                              required />
                          </div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <p className='text-sm text-blue-150'>ACURA</p>
                          <p className='text-xs text-gray-400'>216</p>
                        </div>
                        <div className='flex items-center justify-between'>
                          <p className='text-sm text-blue-150'>AUDI</p>
                          <p className='text-xs text-gray-400'>16</p>
                        </div>
                        <div className='flex items-center justify-between'>
                          <p className='text-sm text-blue-150'>BMW</p>
                          <p className='text-xs text-gray-400'>216</p>
                        </div>
                        <div className='flex items-center justify-between'>
                          <p className='text-sm text-blue-150'>CADILLAC</p>
                          <p className='text-xs text-gray-400'>216</p>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full justify-between bg-blue-250 px-5 py-3.5 text-left text-lg font-medium text-blue-150 hover:bg-gray-200">
                      <span>Model</span>
                      <IoChevronUp
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-2.5 w-2.5 text-blue-150`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-2 pt-4 text-sm text-gray-500 bg-blue-250">
                      <div className='space-y-4'>
                        <div>
                          <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg class="w-4 h-4 text-blue-150 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                              </svg>
                            </div>
                            <input
                              type="search"
                              id="default-search"
                              class="block w-full p-2.5 ps-10 text-sm outline-none text-gray-900 border border-gray-600 bg-blue-250 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Start writing"
                              required />
                          </div>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>All Models</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.6EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL TOURING</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>2.5TL</p>
                        </div>

                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full justify-between bg-blue-250 px-5 py-3.5 text-left text-lg font-medium text-blue-150 hover:bg-gray-200">
                      <span>Year</span>
                      <IoChevronUp
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-2.5 w-2.5 text-blue-150`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-2 pt-4 text-sm text-gray-500 bg-blue-250">
                      <div className='space-y-4'>
                        <div>
                          <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg class="w-4 h-4 text-blue-150 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                              </svg>
                            </div>
                            <input
                              type="search"
                              id="default-search"
                              class="block w-full p-2.5 ps-10 text-sm outline-none text-gray-900 border border-gray-600 bg-blue-250 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Start writing"
                              required />
                          </div>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>All Models</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.6EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL TOURING</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>2.5TL</p>
                        </div>

                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            {/* odometer */}
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full justify-between bg-blue-250 px-5 py-3.5 text-left text-lg font-medium text-blue-150 hover:bg-gray-200">
                      <span>Odometer</span>
                      <IoChevronUp
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-2.5 w-2.5 text-blue-150`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-2 pt-4 text-sm text-gray-500 bg-blue-250">
                      <div className='space-y-4'>
                        <div>
                          <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg class="w-4 h-4 text-blue-150 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                              </svg>
                            </div>
                            <input
                              type="search"
                              id="default-search"
                              class="block w-full p-2.5 ps-10 text-sm outline-none text-gray-900 border border-gray-600 bg-blue-250 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Start writing"
                              required />
                          </div>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>All Models</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.6EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL TOURING</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>2.5TL</p>
                        </div>

                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            {/* Damage */}
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full justify-between bg-blue-250 px-5 py-3.5 text-left text-lg font-medium text-blue-150 hover:bg-gray-200">
                      <span>Damage</span>
                      <IoChevronUp
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-2.5 w-2.5 text-blue-150`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-2 pt-4 text-sm text-gray-500 bg-blue-250">
                      <div className='space-y-4'>
                        <div>
                          <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg class="w-4 h-4 text-blue-150 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                              </svg>
                            </div>
                            <input
                              type="search"
                              id="default-search"
                              class="block w-full p-2.5 ps-10 text-sm outline-none text-gray-900 border border-gray-600 bg-blue-250 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Start writing"
                              required />
                          </div>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>All Models</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.6EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL TOURING</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>2.5TL</p>
                        </div>

                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            {/* Sale Date */}
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full justify-between bg-blue-250 px-5 py-3.5 text-left text-lg font-medium text-blue-150 hover:bg-gray-200">
                      <span>Sale Date</span>
                      <IoChevronUp
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-2.5 w-2.5 text-blue-150`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-2 pt-4 text-sm text-gray-500 bg-blue-250">
                      <div className='space-y-4'>
                        <div>
                          <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg class="w-4 h-4 text-blue-150 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                              </svg>
                            </div>
                            <input
                              type="search"
                              id="default-search"
                              class="block w-full p-2.5 ps-10 text-sm outline-none text-gray-900 border border-gray-600 bg-blue-250 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Start writing"
                              required />
                          </div>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>All Models</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.6EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL TOURING</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>2.5TL</p>
                        </div>

                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            {/* State */}
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full justify-between bg-blue-250 px-5 py-3.5 text-left text-lg font-medium text-blue-150 hover:bg-gray-200">
                      <span>State</span>
                      <IoChevronUp
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-2.5 w-2.5 text-blue-150`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-2 pt-4 text-sm text-gray-500 bg-blue-250">
                      <div className='space-y-4'>
                        <div>
                          <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg class="w-4 h-4 text-blue-150 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                              </svg>
                            </div>
                            <input
                              type="search"
                              id="default-search"
                              class="block w-full p-2.5 ps-10 text-sm outline-none text-gray-900 border border-gray-600 bg-blue-250 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Start writing"
                              required />
                          </div>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>All Models</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.6EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL TOURING</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>2.5TL</p>
                        </div>

                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            {/* Location */}
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full justify-between bg-blue-250 px-5 py-3.5 text-left text-lg font-medium text-blue-150 hover:bg-gray-200">
                      <span>Location</span>
                      <IoChevronUp
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-2.5 w-2.5 text-blue-150`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-2 pt-4 text-sm text-gray-500 bg-blue-250">
                      <div className='space-y-4'>
                        <div>
                          <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg class="w-4 h-4 text-blue-150 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                              </svg>
                            </div>
                            <input
                              type="search"
                              id="default-search"
                              class="block w-full p-2.5 ps-10 text-sm outline-none text-gray-900 border border-gray-600 bg-blue-250 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Start writing"
                              required />
                          </div>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>All Models</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.6EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL TOURING</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>2.5TL</p>
                        </div>

                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            {/* Doc Type */}
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full justify-between bg-blue-250 px-5 py-3.5 text-left text-lg font-medium text-blue-150 hover:bg-gray-200">
                      <span>Doc Type</span>
                      <IoChevronUp
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-2.5 w-2.5 text-blue-150`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-2 pt-4 text-sm text-gray-500 bg-blue-250">
                      <div className='space-y-4'>
                        <div>
                          <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg class="w-4 h-4 text-blue-150 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                              </svg>
                            </div>
                            <input
                              type="search"
                              id="default-search"
                              class="block w-full p-2.5 ps-10 text-sm outline-none text-gray-900 border border-gray-600 bg-blue-250 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Start writing"
                              required />
                          </div>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>All Models</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.6EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL TOURING</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>2.5TL</p>
                        </div>

                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            {/* Fuel Type */}
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full justify-between bg-blue-250 px-5 py-3.5 text-left text-lg font-medium text-blue-150 hover:bg-gray-200">
                      <span>Fuel Type</span>
                      <IoChevronUp
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-2.5 w-2.5 text-blue-150`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-2 pt-4 text-sm text-gray-500 bg-blue-250">
                      <div className='space-y-4'>
                        <div>
                          <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg class="w-4 h-4 text-blue-150 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                              </svg>
                            </div>
                            <input
                              type="search"
                              id="default-search"
                              class="block w-full p-2.5 ps-10 text-sm outline-none text-gray-900 border border-gray-600 bg-blue-250 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Start writing"
                              required />
                          </div>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>All Models</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.6EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL TOURING</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>2.5TL</p>
                        </div>

                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            {/* Engine Volume */}
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full justify-between bg-blue-250 px-5 py-3.5 text-left text-lg font-medium text-blue-150 hover:bg-gray-200">
                      <span>Engine Volume</span>
                      <IoChevronUp
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-2.5 w-2.5 text-blue-150`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-2 pt-4 text-sm text-gray-500 bg-blue-250">
                      <div className='space-y-4'>
                        <div>
                          <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg class="w-4 h-4 text-blue-150 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                              </svg>
                            </div>
                            <input
                              type="search"
                              id="default-search"
                              class="block w-full p-2.5 ps-10 text-sm outline-none text-gray-900 border border-gray-600 bg-blue-250 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Start writing"
                              required />
                          </div>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>All Models</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.6EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL TOURING</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>2.5TL</p>
                        </div>

                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            {/* Cylinders*/}
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full justify-between bg-blue-250 px-5 py-3.5 text-left text-lg font-medium text-blue-150 hover:bg-gray-200">
                      <span>Cylinders</span>
                      <IoChevronUp
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-2.5 w-2.5 text-blue-150`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-2 pt-4 text-sm text-gray-500 bg-blue-250">
                      <div className='space-y-4'>
                        <div>
                          <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg class="w-4 h-4 text-blue-150 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                              </svg>
                            </div>
                            <input
                              type="search"
                              id="default-search"
                              class="block w-full p-2.5 ps-10 text-sm outline-none text-gray-900 border border-gray-600 bg-blue-250 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Start writing"
                              required />
                          </div>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>All Models</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.6EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL PREMIUM</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>1.7EL TOURING</p>
                        </div>
                        <div>
                          <p className='text-sm text-blue-150'>2.5TL</p>
                        </div>

                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
