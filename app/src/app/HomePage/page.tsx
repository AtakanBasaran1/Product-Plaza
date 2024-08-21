"use client";
import React, { useEffect, useState } from 'react';
import LeftBar from '../Navbar/LeftBar';
import TopBar from '../Navbar/TopBar';


const page = () => {

    const [email, setEmail] = useState("")
    const splittedEmail = email.split("@");

    useEffect(() => {

        const storedUser = localStorage.getItem('User')
        if (storedUser) {
            {
                const parsedUser = JSON.parse(storedUser)
                setEmail(parsedUser.email)
            }
        }

    }, [])


    return (
        <div className="container">
            <TopBar />
            <LeftBar />
            <div>
                {email && <h1 className="ml-[280px] mt-3 font-semibold text-[21px]">
                    Hello, {splittedEmail[0].charAt(0).toUpperCase() + splittedEmail[0].slice(1)}
                </h1>}
                <hr className='w-[1235px] ml-[280px] mt-3' />
                <div className='w-[1235px] bg-blue-900 h-[200px] ml-[280px] mt-[30px] rounded-md'><p className='text-white relative font-medium text-[30px] top-[145px] left-[20px]'>FabricFleet new version is live!</p></div>
            </div>



            <div className='mt-[-300px]'>
                <h1 className='mt-[315px] ml-[280px] font-semibold absolute'>Orders</h1>
                <div>


                    <div className='absolute mt-[350px] ml-[280px] flex flex-col'>
                        <div className='border-2 w-[45px] rounded-[5px] ml-1'>
                            <p className='text-[11px] ml-1 '>#2223</p>
                        </div>

                        <button className='text-[12px] ml-[270px] relative top-[-25px]'>View
                            <svg
                                className='size-4 relative ml-[45px] mt-[-16px]'
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>



                        <p className='text-[12px] mt-4'>STATUS</p>
                        <h1 className='text-blue-800 text-[22px]'>FABRIC TYPE</h1>
                        <div className='border-2 w-[47px] rounded-[5px] mt-3 ml-1'>
                            <p className='text-[11px] ml-1 '>24 pcs</p>
                        </div>
                    </div>


                    <div className='absolute mt-[345px] ml-[680px]'>
                        <div className='border-2 w-[45px] rounded-[5px] ml-1'>
                            <p className='text-[11px] ml-1 '>#2223</p>
                        </div>

                        <button className='text-[12px] ml-[270px] relative top-[-25px]'>View
                            <svg
                                className='size-4 relative ml-[45px] mt-[-16px]'
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>



                        <p className='text-[12px] mt-4'>STATUS</p>
                        <h1 className='text-blue-800 text-[22px]'>FABRIC TYPE</h1>
                        <div className='border-2 w-[47px] rounded-[5px] mt-3 ml-1'>
                            <p className='text-[11px] ml-1 '>24 pcs</p>
                        </div>
                    </div>
                    <div className='absolute mt-[315px] ml-[1200px] '>

                        <h1 className='font-semibold text-[18px] ml-[-12px]'>Activites</h1>
                        <div className='font-medium mt-5'>
                            <p className='mb-8 ml-[20px] '>Fabric type sent by producer
                                <div className='border-2 rounded-[30px] w-[30px] h-[30px] bg-black ml-[-35px] mt-[-26px] '>
                                    <svg
                                        className='h-[21px] ml-[4px] mt-[2px] text-white '
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                    </svg>
                                </div>
                                <div className='absolute border-2 w-[1px] h-[30px] ml-[-22px]'></div>

                            </p>
                            <p className='mb-8 ml-[20px]'>Paid in Offers
                                <div className='border-2 rounded-[30px] w-[30px] h-[30px] bg-black ml-[-35px] mt-[-26px]'>
                                    <svg
                                        className='h-[23px] ml-[2px] mt-[2px] text-white '
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                </div>
                                <div className='absolute border-2 w-[1px] h-[30px] ml-[-22px]'></div>
                            </p>
                            <p className='mb-4 ml-[20px]'>Created in Product Plaza
                                <div className='border-2 rounded-[30px] w-[30px] h-[30px] bg-black ml-[-35px] mt-[-26px]'>
                                    <svg
                                        className='h-[23px] ml-[2px] mt-[2px] text-white '
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m9 7.5 3 4.5m0 0 3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                </div>

                            </p>
                        </div>

                    </div>

                </div>
            </div>



            <div className='absolute top-[570px] left-[280px] flex flex-row '>

                <h1 className='text-[17px] font-semibold'>Offers</h1>

                <div className='mt-7 ml-[-30px]'>
                    <div className='border-2 rounded-[5px] w-[75px] mt-4 ml-1'>
                        <p className='text-[12px] ml-[5px] text-gray-500 '>TRACSUIT</p>

                    </div>
                    <p className='text-[23px] ml-1 mt-3'>3500$</p>
                    <button className='text-[12px] ml-[200px] relative top-[-73px]'>View
                        <svg
                            className='size-4 relative ml-[45px] mt-[-16px]'
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>

                <div className='ml-[30px] mt-[45px]'>
                    <div className='border-2 rounded-[5px] w-[75px] '>
                        <p className='text-[12px] ml-[5px] text-gray-500'>TRACSUIT</p>

                    </div>
                    <p className='text-[23px] ml-1 mt-3'>3500$</p>
                    <button className='text-[12px] ml-[200px] relative top-[-73px]'>View
                        <svg
                            className='size-4 relative ml-[45px] mt-[-16px]'
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>

                <div className='ml-[30px] mt-[45px]'>
                    <div className='border-2 rounded-[5px] w-[75px] '>
                        <p className='text-[12px] ml-[5px] text-gray-500'>TRACSUIT</p>

                    </div>
                    <p className='text-[23px] ml-1 mt-3'>3500$</p>
                    <button className='text-[12px] ml-[200px] relative top-[-73px]'>View
                        <svg
                            className='size-4 relative ml-[45px] mt-[-16px]'
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>

                <div className='ml-[30px] mt-[45px]'>
                    <div className='border-2 rounded-[5px] w-[75px] '>
                        <p className='text-[12px] ml-[5px] text-gray-500 '>TRACSUIT</p>

                    </div>
                    <p className='text-[23px] ml-1 mt-3'>3500$</p>
                    <button className='text-[12px] ml-[200px] relative top-[-73px]'>View
                        <svg
                            className='size-4 relative ml-[45px] mt-[-16px]'
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>


            </div>

        </div>
    );
};

export default page;