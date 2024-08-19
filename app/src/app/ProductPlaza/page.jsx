"use client";
import React, { useState, useEffect } from 'react'
import LeftBar from '../Navbar/LeftBar'
import TopBar from '../Navbar/TopBar'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { FaRegFilePdf } from "react-icons/fa6";

function page() {
    const [addProductTable, setAddProductTable] = useState(false)

    const [allTable, setAllTable] = useState(true)

    const [newItem, setNewItem] = useState("")
    const [items, setItems] = useState([])

    useEffect(() => {
        localStorage.getItem('product')
    }, [])


    const addItem = () => {
        const item = {
            value: newItem
        }

        localStorage.setItem('product', item)


        setItems(oldItems => [...oldItems, item])
        setNewItem("")
        setAllTable(true)

    }


    const addProductTableOpen = () => {
        setAddProductTable(true)
    }

    const addProductTableClose = () => {
        setAddProductTable(false)
    }



    const allTableClose = () => {
        setAllTable(false)
    }

    return (
        <div>
            <TopBar />
            <LeftBar />
            <div className='ml-[300px] mt-3 flex flex-row'>
                <h1 className='text-[20px] font-semibold ml-[-20px] mt-[4px]'>Product Plaza</h1>
                <button className='mr-[-10px] ml-5 border-2 hover:bg-black hover:text-white hover:border-none w-[48px] h-[35px] rounded-[30px]'>All</button>
                <button className='mr-[-10px] ml-5 hover:bg-black hover:text-white hover:border-none border-2 w-[65px] h-[35px] rounded-[30px]'>Active</button>
                <button className='mr-[-10px] ml-5 hover:bg-black hover:text-white hover:border-none border-2 w-[65px] rounded-[30px]'>Draft</button>
                <button className='mr-[-10px] ml-5 hover:bg-black hover:text-white hover:border-none border-2 w-[90px] h-[35px] rounded-[30px]'>Archived</button>
                <button onClick={addProductTableOpen} className='mr-[-10px] ml-[660px] hover:bg-black hover:text-white hover:border-none w-[130px] bg-blue-700 text-white rounded-[30px]'>+ Add Product</button>
            </div>
            <div>
                <FaMagnifyingGlass className='text-[23px] text-gray-300 ml-[288px] top-[30px] relative z-10' />
                <input
                    className='ml-[275px] mt-0 border-2 rounded-[30px] h-[36px] w-[1240px]  placeholder:text-gray-500 pl-11 m-2 border border-gray-300'
                    type="text" placeholder='Search by material, color or product name' />
            </div>
            <div>
                <FaMagnifyingGlass className='text-[130px] text-gray-300 ml-[750px] top-[100px] relative z-10' />
                <p className='absolute w-[250px] ml-[720px] mt-[120px] text-gray-400'>No products added yet. You can add your products here.</p>
                <button onClick={addProductTableOpen} className='mr-[-10px] ml-[770px] hover:bg-black hover:text-white hover:border-none w-[140px] bg-black h-[35px] text-white rounded-[30px] mt-[190px]'>+ Add Product</button>
            </div>

            {addProductTable && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-20 flex items-center justify-center">
                    <div className="w-[800px] h-[600px] bg-white rounded-[10px] relative">
                        <IoIosClose
                            onClick={addProductTableClose}
                            className='absolute right-4 top-4 size-8 cursor-pointer transform hover:scale-110 transition duration-10'
                        />

                        <h1 className='font-semibold ml-6 mt-[20px]'>Add Product</h1>

                        <div className='ml-6 flex flex-row mt-10'>
                            <div className='flex flex-col'>
                                <h1 className='mr-[300px] font-medium'>Product Name</h1>
                                <input
                                    value={newItem}
                                    onChange={(e) => setNewItem(e.target.value)}
                                    className='border-2 border-gray-300 w-[330px] h-[38px] rounded-[5px]' type="text" />
                            </div>
                            <div>
                                <h1 className='font-medium'>Product Reference</h1>
                                <input className='border-2 border-gray-300 w-[330px] h-[38px] rounded-[5px]' type="text" />
                            </div>
                        </div>
                        <div className='ml-6 flex flex-row mt-8'>
                            <div className='flex flex-col'>
                                <h1 className='mr-[300px] font-medium'>Category</h1>
                                <input className='border-2 border-gray-300 w-[330px] h-[38px] rounded-[5px]' type="text" />
                            </div>
                            <div>
                                <h1 className='ml-[40px] font-medium'>Designer</h1>
                                <input className='border-2 border-gray-300 w-[330px] h-[38px] rounded-[5px] ml-[40px]' type="text" />
                            </div>
                        </div>
                        <div>
                            <h1 className='ml-[25px] mt-8 font-medium'>Description</h1>
                            <input className='border-2 border-gray-300 w-[740px] h-[38px] rounded-[5px] ml-[25px]' type="text" />
                        </div>

                        <div className='border-2 w-[740px] ml-[30px] rounded-[5px] h-[180px] mt-5'>
                            <FaRegFilePdf className='size-[60px] text-gray-400 ml-[345px] mt-2 z-0' />

                            <button className=' p-1 rounded-[30px] bg-black text-white text-[15px] h-[33px] w-[130px] ml-[305px] mt-5'>+  Add PDF File</button>
                            <p className='ml-[280px] mt-2 w-[200px] text-[13px] flex items-center text-gray-300'>Drag and drop your PDF's here or Browse (max. 1gb)</p>
                        </div>
                        <button onClick={addItem} className='w-[745px] bg-black text-white rounded-[30px] h-[35px] mt-4 ml-7'>Save</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default page