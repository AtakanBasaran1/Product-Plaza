"use client";
import React, { useState, useEffect } from 'react'
import LeftBar from '../Navbar/LeftBar'
import TopBar from '../Navbar/TopBar'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { FaRegFilePdf } from "react-icons/fa6";

function page() {

    const [newMessage, setNewMessage] = useState("")

    const [items, setItems] = useState<any[]>([])

    const addNewMessage = () => {
        const item = {
            value: newMessage
        }
        setItems(oldItems => [...oldItems, item])
        setNewMessage("")
    }

    return (
        <div>
            <TopBar />
            <LeftBar />
            <div className='ml-[300px] mt-3 flex flex-row'>
                <h1 className='text-[20px] font-semibold ml-[-20px] mt-[4px]'>Brand Chat</h1>
            </div>
            <hr className='w-[1235px] ml-[280px] mt-3' />
            <div className='flex flex-row'>
                <input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className='border-2 rounded absolute p-1 w-[1170px] top-[650px] left-[280px]' type="text" placeholder='Add a comment' />

                <button
                    onClick={addNewMessage}
                    className='border-2 border-black bg-black w-[40px] h-[40px] rounded-[20px] relative top-[526px] left-[1460px] hover:bg-blue-700 hover:border-blue-700'>
                    <svg
                        className='size-6 text-white ml-2'
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </button>
            </div>
            <ul className="ml-[280px] mt-[400px]">
                {items.map((item, index) => {
                    return (
                        <li className="mb-3" key={index}>
                            <p className="font-semibold">Brand</p>
                            {item.value}
                        </li>
                    );
                })}
            </ul>


        </div>
    )
}

export default page