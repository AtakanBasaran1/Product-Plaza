import React from 'react'
import Link from 'next/link';

function LeftBar() {
    return (
        <div>
            <h1 className='text-[17px] ml-[100px] mt-4 mb-3 font-semibold'>Brand</h1>
            <hr className='w-[260px] mt-5 relative top-[-5px]' />
            <div className='flex border-r border-lightgray-500 border-r left-[45px] fixed ml-[60px]  h-[720px] items-start text-[17px] top-[57px]'>

                <div className='flex flex-col mt-[20px] ml-[-60px] left-[-20px] relative'>

                    <Link className='mb-3 w-[230px] ml-[-15px] p-1 rounded-[5px] hover:bg-blue-700  text-gray-400 hover:text-white '
                        href="/HomePage">
                        <p className='hover:text-white  ml-[35px] mt-1 relative text-gray-400 text-[17px]  '>Home</p>
                        <svg
                            className='hover:text-white  h-[27px] absolute top-[5px] left-[-10px]'
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                        </svg>


                    </Link>
                    <Link className='hover:text-white  mb-3 w-[230px] ml-[-15px] p-1 rounded-[5px] hover:bg-blue-700 hover:text-white ' href="/Offers"><p className='hover:text-white  ml-[35px] mt-1 text-gray-400'>Offers</p>
                        <svg
                            className='hover:text-white  h-[28px] absolute top-[56px] left-[-10px] text-gray-400'
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>

                    </Link>
                    <Link className='hover:text-white  mb-3 w-[230px] ml-[-15px] p-1 rounded-[5px] hover:bg-blue-700 hover:text-white ' href="/Orders"><p className='hover:text-white  ml-[35px] mt-1 text-gray-400'>Orders</p>
                        <svg
                            className='hover:text-white  h-[28px] absolute top-[105px] left-[-10px] text-gray-400'
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                    </Link>
                    <Link className='hover:text-white  mb-3 w-[230px] ml-[-15px] p-1 rounded-[5px] hover:bg-blue-700 hover:text-white ' href="/Payments"><p className='hover:text-white  ml-[35px] mt-1 text-gray-400'>Payments</p>
                        <svg
                            className='hover:text-white  h-[30px] absolute top-[155px] left-[-10px] text-gray-400'
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>


                    </Link>

                    <Link className='hover:text-white mb-3 w-[230px] ml-[-15px] p-1 rounded-[5px] hover:bg-blue-700 hover:text-white hover:h-[40px]' href="/Chat"><p className='hover:text-white  ml-[35px] mt-1 text-gray-400'>Chat</p>
                        <svg
                            className='hover:text-white  h-[27px] absolute top-[205px] left-[-8px] text-gray-400'
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>

                    </Link>
                </div>


            </div>
            <div className='border-r-2'></div>


        </div >
    )
}

export default LeftBar