"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosClose } from "react-icons/io";


function Page() {
    const [addProducterMenu, setAddProducterMenu] = useState(false);

    const addProducterMenuOpen = () => {
        setAddProducterMenu(true);
    };

    const addProducterMenuClose = () => {
        setAddProducterMenu(false);
    };

    const [id, setId] = useState("");

    const [producers, setProducers] = useState(() => {
        if (typeof window !== "undefined") {
            const storedProducers = localStorage.getItem("producers");
            return storedProducers ? JSON.parse(storedProducers) : [{ name: "Alexstile" }, { name: "Bexstile" }, { name: "Cexstile" }];
        }
        return [{ name: "Alexstile" }, { name: "Bexstile" }, { name: "Cexstile" }];
    });

    const brandIdLocal = () => {
        if (id) {
            const updatedProducers = [
                ...producers,
                { name: id },
            ];

            setProducers(updatedProducers);

            if (typeof window !== "undefined") {
                localStorage.setItem("producers", JSON.stringify(updatedProducers));
            }

            alert("Brand ID added successfully");
            setId("");
            setAddProducterMenu(false);
        }
    };


    const homeHref = () => {
        window.location.href = "/HomePage"
    }

    return (
        <div>
            <h1 className="text-center text-[30px] mt-[130px]">Select Producer</h1>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
                {producers.map((producer: any, index: any) => (
                    <div key={index} className="flex flex-col items-center">
                        <button onClick={homeHref} className="border-2 w-[200px] h-[200px] bg-blue-700">X</button>
                        <p className="mt-2 font-semibold">{producer.name}</p>

                    </div>
                ))}

                <div className="flex flex-col items-center">
                    <button onClick={addProducterMenuOpen} className="border-[4px] border-blue-700 w-[200px] h-[200px]">
                        +
                    </button>
                    <p className="mt-2 font-semibold">Add Producer</p>
                </div>
                {addProducterMenu ? (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-10 flex items-center justify-center">
                        <div className="w-[430px] mt-[-60px] h-[460px] absolute mt-[-350px] bg-white text-black rounded-3">
                            <h1 className="text-[16px] ml-6 mt-4 font-semibold">Add Producer</h1>
                            <IoIosClose onClick={addProducterMenuClose} className="text-[35px] ml-[380px] mt-[-35px] cursor-pointer transform hover:scale-110 transition duration-10" />
                            <div className=" w-[380px] h-[210px] rounded-5 p-2 bg-gray-100 ml-[23px] mt-3">
                                <div>
                                    <div>
                                        <h1 className="text-[15px] font-semibold ml-3 mt-2">Your Brand ID</h1>
                                        <input
                                            className="rounded-2 w-[290px] h-[30px] ml-3 p-3"
                                            type="number"
                                            placeholder="12220202"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-[15px] font-semibold ml-3 mt-2">Invite User</h1>
                                        <input
                                            className="rounded-2 w-[330px] h-[30px] ml-3 p-3"
                                            type="number"
                                            placeholder="user@company.com"
                                        />
                                    </div>
                                    <button className="w-[330px] bg-black text-white rounded-5 h-[32px] mt-3 ml-3">
                                        Send Invite
                                    </button>
                                </div>
                                <p className="ml-[170px] mt-4 ">or</p>
                                <div>
                                    <h1 className="text-[15px] font-semibold mt-[35px]">Brand ID</h1>
                                    <input
                                        value={id}
                                        onChange={(e) => setId(e.target.value)}
                                        maxLength={8}
                                        className="rounded-[10px] w-[360px] h-[30px] ml-0 p-3 border-2"
                                        type="text"
                                        placeholder="Brand ID Number ex : 12220202"
                                    />
                                    <button
                                        onClick={brandIdLocal}
                                        className="w-[360px] bg-blue-700 text-white rounded-5 h-[28px] mt-3"
                                    >
                                        Add Brand
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : null}
                {/* <div className="flex flex-wrap" style={{ marginLeft: '1280px', marginTop: '-580px', position: 'fixed' }} >

                    <button style={{ fontSize: '15px', fontWeight: 'bold', border: '1px solid lightgray', borderRadius: '8px', width: '110px', height: '35px', marginRight: '12px', marginLeft: '-40px', top: '0px', position: 'relative' }}><p style={{ marginLeft: '20px', position: 'relative', top: '3px' }}>Settings</p>

                        <svg
                            style={{ marginTop: '-37px', marginLeft: '8px', height: '25px' }}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </button>

                    <button style={{ fontSize: '15px', fontWeight: 'bold', border: '1px solid lightgray', borderRadius: '8px', width: '110px', height: '35px', marginRight: '12px', top: '0px', position: 'relative' }}><p style={{ position: 'relative', top: '6px', left: '10px' }}>Logout</p>

                        <svg
                            style={{ position: 'relative', left: '7px', height: '25px', top: '-35px' }}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>

                    </button>

                </div> */}
            </div>

        </div>
    );
}

export default Page;
