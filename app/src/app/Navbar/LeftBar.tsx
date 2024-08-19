import React from 'react'
import Link from 'next/link';

function LeftBar() {
    return (
        <div>
            <h1 className='text-[17px] ml-[100px] mt-4 mb-3 font-semibold'>Brand</h1>
            <hr className='w-[260px] mt-5 relative top-[-5px]' />
            <div className='flex border-r border-lightgray-500 border-r left-[45px] fixed ml-[60px]  h-[678px] items-start text-[17px] top-[57px]'>

                <div className='flex flex-col mt-[20px] ml-[-60px] left-[-20px] relative'>

                    <Link className='mb-3 w-[230px] ml-[-15px] p-1 rounded-[5px] hover:bg-blue-600  text-gray-400 hover:text-white '
                        href="/HomePage">
                        <p className='hover:text-white  ml-[35px] mt-1 relative text-gray-400 text-[17px]  '>Home</p>
                        <svg
                            className='hover:text-white  h-[27px] absolute top-[5px] left-[-10px]'
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                        </svg>


                    </Link>
                    <Link className='mb-3 w-[230px] ml-[-15px] p-1 rounded-[5px] hover:bg-blue-600 hover:text-white' href="/ProductPlaza"><p className='relative  ml-[35px] mt-[4px] text-gray-400 hover:text-white'>Product Plaza</p>
                        <svg
                            className=' hover:text-white  h-[30px] absolute top-[55px] left-[-12px] text-gray-400'
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                        </svg>


                    </Link>
                    <Link className='hover:text-white  mb-3 w-[230px] ml-[-15px] p-1 rounded-[5px] hover:bg-blue-600 hover:text-white ' href="/Offers"><p className='hover:text-white  ml-[35px] mt-1 text-gray-400'>Offers</p>
                        <svg
                            className='hover:text-white  h-[28px] absolute top-[105px] left-[-10px] text-gray-400'
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>

                    </Link>
                    <Link className='hover:text-white  mb-3 w-[230px] ml-[-15px] p-1 rounded-[5px] hover:bg-blue-600 hover:text-white ' href="/Orders"><p className='hover:text-white  ml-[35px] mt-1 text-gray-400'>Orders</p>
                        <svg
                            className='hover:text-white  h-[28px] absolute top-[153px] left-[-10px] text-gray-400'
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                    </Link>

                    <Link className='hover:text-white  mb-3 w-[230px] ml-[-15px] p-1 rounded-[5px] hover:bg-blue-600 hover:text-white hover:h-[40px]' href="/Payments"><p className='hover:text-white  ml-[35px] mt-1 text-gray-400'>Payments</p>
                        <svg
                            className='hover:text-white  h-[30px] absolute top-[204px] left-[-10px] text-gray-400'
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </Link>

                </div>


            </div>
            <div className='border-r-2'></div>


        </div >
    )
}

export default LeftBar