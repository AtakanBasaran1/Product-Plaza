import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";


function TopBar() {

  const logineGit = () => {
    window.location.href = "/"
    alert("Successfully exited")
  }

  const [settingsTable, setSettingsTable] = useState(false)

  const settingsTableOpen = () => {
    setSettingsTable(true)
  }

  const settingsTableClose = () => {
    setSettingsTable(false)
    setPaymentsTable(false)
    setCompanyTable(false)
    setAdressesTable(false)
    setProfileTable(false)
  }

  const [profileTable, setProfileTable] = useState(true)

  const profileTableOpen = () => {
    setPaymentsTable(true)
    setCompanyTable(false)
    setAdressesTable(false)
    setPaymentsTable(false)
  }

  const [companyTable, setCompanyTable] = useState(false)

  const companyTableOpen = () => {
    setCompanyTable(true)
    setAdressesTable(false)
    setPaymentsTable(false)
  }

  const [adressesTable, setAdressesTable] = useState(false)

  const adressesTableOpen = () => {
    setCompanyTable(false)
    setAdressesTable(true)
    setPaymentsTable(false)
  }

  const [paymentsTable, setPaymentsTable] = useState(false)

  const paymentsTableOpen = () => {
    setPaymentsTable(true)
    setCompanyTable(false)
    setAdressesTable(false)
  }

  const [newAdress, setNewAdress] = useState("")

  return (
    <div className='absolute'>
      <span className='fixed border-l  left-[260px] 
      h-[57px] top-[0px] border-gray-200
      '></span>
      <hr className='relative top-[41px] w-[1275px] left-[261px]' />
      <h1 className='ml-[280px] font-bold '>Dashboard</h1>
      <div style={{ marginLeft: '1220px', marginTop: '-34px', position: 'fixed' }} >

        <button
          onClick={settingsTableOpen}
          style={{ fontSize: '15px', fontWeight: 'bold', border: '1px solid lightgray', borderRadius: '8px', width: '110px', height: '35px', marginRight: '12px', marginLeft: '-40px', top: '-10px', position: 'relative' }}><p style={{ marginLeft: '20px', position: 'relative', top: '2px' }}>Settings</p>

          <svg
            style={{ marginTop: '-22px', marginLeft: '8px', height: '25px' }}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

        </button>

        <button style={{ fontSize: '15px', fontWeight: 'bold', border: '1px solid lightgray', borderRadius: '8px', width: '160px', height: '35px', marginRight: '12px', top: '-12px', position: 'relative' }}><p style={{ position: 'relative', top: '3px', left: '10px' }}>Change Store</p>

          <svg
            style={{ marginTop: '-20px', marginLeft: '8px', height: '25px' }}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
          </svg>

        </button>
        <button
          onClick={logineGit}
          style={{ fontSize: '15px', fontWeight: 'bold', border: '1px solid lightgray', borderRadius: '8px', width: '40px', height: '35px', position: 'relative', top: '1px' }}>
          <svg
            style={{ position: 'relative', left: '7px', height: '25px' }}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
          </svg>

        </button>

      </div>

      {settingsTable ? (
        <div className='w-[1540px] h-[735px] mt-[-80px] bg-white z-50 fixed'>

          <div className='flex flex-row mt-[200px] ml-[300px]'>
            <h1 className='text-[21px] mr-[-15px] font-bold'>Settings</h1>
            <button onClick={profileTableOpen} className='ml-[30px] border-2 w-[80px] h-[35px] rounded-[20px] hover:bg-black hover:text-white hover:border-none font-medium'>Profile</button>
            <button onClick={companyTableOpen} className='ml-[10px] border-2 font-medium w-[100px] h-[35px] rounded-[20px] hover:bg-black hover:text-white hover:border-none'>Company</button>
            <button onClick={adressesTableOpen} className='ml-[10px] border-2 font-medium w-[110px] h-[35px] rounded-[20px] hover:bg-black hover:text-white hover:border-none font-medium'>Adresses</button>
            <button onClick={paymentsTableOpen} className='ml-[10px] border-2 w-[155px] h-[35px] rounded-[20px] hover:bg-black hover:text-white hover:border-none font-medium'>Payment Method</button>
          </div>


          <div className='ml-[300px] mt-5'>

            <h1 className='text-[18px] font-semibold'>General</h1>
            <div className='flex-flex-row mt-10'>
              <div className='flex flex-row text-[13px] font-semibold'> <p className='mr-[270px]'>Full Name</p> <p className='mr-[298px]'>Email</p> <p>Phone</p></div>
              <input className='border-2 rounded-[5px] w-[300px] h-[35px] p-4 mr-8' type="text" placeholder='Jhon Doe' />
              <input className='border-2 rounded-[5px] w-[300px] h-[35px] p-4 mr-8' type="text" placeholder='example@gmail.com' />
              <input className='border-2 rounded-[5px] w-[300px] h-[35px] p-4 mr-8' type="text" placeholder='+90 (542) 00 00' />
            </div>
            <h1 className='text-[18px] font-semibold mt-5'>Password</h1>
            <div className='flex-flex-row mt-10'>
              <div className='flex flex-row text-[13px] font-semibold'> <p className='mr-[270px]'>Password</p> <p className='mr-[240px]'>New Password</p> <p>New Password</p></div>
              <input className='border-2 rounded-[5px] w-[300px] h-[35px] p-4 mr-8' type="text" placeholder='********' />
              <input className='border-2 rounded-[5px] w-[300px] h-[35px] p-4 mr-8' type="text" placeholder='********' />
              <input className='border-2 rounded-[5px] w-[300px] h-[35px] p-4 mr-8' type="text" placeholder='********' />
            </div>
            <button className='ml-[820px] mt-5 w-[150px] rounded-[20px] bg-black text-white h-[36px]'>Save</button>
          </div>

          <div className='absolute mt-[-505px] ml-[1290px]'>



            <button
              onClick={settingsTableClose}
              className='hover:bg-black hover:text-white'
              style={{ fontSize: '15px', fontWeight: 'bold', border: '1px solid lightgray', borderRadius: '15px', width: '100px', height: '35px', marginRight: '50px', top: '-12px', position: 'relative' }}><p style={{ position: 'relative', top: '4px', left: '10px' }}>Home</p>

              <svg
                style={{ marginTop: '-20px', marginLeft: '8px', height: '25px' }}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
              </svg>

            </button>

            <button
              className='hover:bg-black hover:text-white'
              onClick={logineGit}
              style={{ fontSize: '15px', fontWeight: 'bold', border: '1px solid lightgray', borderRadius: '15px', width: '105px', height: '35px', marginRight: '15px', marginLeft: '-40px', top: '-9px', position: 'relative' }}><p style={{ marginLeft: '20px', position: 'relative', top: '0px' }}>Logout</p>

              <svg
                style={{ position: 'absolute', left: '7px', height: '25px', top: '4px' }}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
              </svg>

            </button>

          </div>
        </div>
      ) : null}

      {companyTable ? (
        <div className='w-[1200px] h-[400px] mt-[-45px] bg-white ml-[300px] mt-[180px] z-50 fixed'>
          <hr className='w-[975px] mb-5' />
          <h1 className='text-[18px] font-semibold'>Company Details</h1>
          <div className='flex-flex-row mt-10'>
            <div className='flex flex-row text-[13px] font-semibold'> <p className='mr-[190px]'>Full Name</p> <p className='mr-[165px]'>Company Mail</p> <p className='ml-[-3px]'>Company Number</p>
              <p className='ml-[138px]'>Tax Number</p></div>
            <input className='border-2 rounded-[5px] w-[220px] h-[35px] p-4 mr-8' type="text" placeholder='Jhon Doe' />
            <input className='border-2 rounded-[5px] w-[220px] h-[35px] p-4 mr-8' type="text" placeholder='example@gmail.com' />
            <input className='border-2 rounded-[5px] w-[220px] h-[35px] p-4 mr-8' type="text" placeholder='+90 (542) 00 00' />
            <input className='border-2 rounded-[5px] w-[220px] h-[35px] p-4 mr-8' type="text" placeholder='********' />
          </div>
          <h1 className='text-[18px] font-semibold mt-5'>Company Adress</h1>
          <div className='flex-flex-row mt-10'>
            <div className='flex flex-row text-[13px] font-semibold'> <p className='mr-[270px]'>Country</p> <p className='mr-[305px] ml-3'>City</p> <p>State/Province/Region (optional)</p></div>
            <input className='border-2 rounded-[5px] w-[300px] h-[35px] p-4 mr-8' type="text" placeholder='Country' />
            <input className='border-2 rounded-[5px] w-[300px] h-[35px] p-4 mr-8' type="text" placeholder='City' />
            <input className='border-2 rounded-[5px] w-[300px] h-[35px] p-4 mr-8' type="text" placeholder='State' />
          </div>
          <div className='flex-flex-row mt-10'>
            <div className='flex flex-row text-[13px] font-semibold'> <p className='mr-[270px]'>ZIP Code</p> <p className='mr-[305px] ml-1'>Adress line 1</p> <p className='ml-[-50px]'>Adress line 2</p></div>
            <input className='border-2 rounded-[5px] w-[300px] h-[35px] p-4 mr-8' type="text" placeholder='ZIP Code' />
            <input className='border-2 rounded-[5px] w-[300px] h-[35px] p-4 mr-8' type="text" placeholder='Adress line 1' />
            <input className='border-2 rounded-[5px] w-[300px] h-[35px] p-4 mr-8' type="text" placeholder='Adress line 2' />
          </div>
          <button className='ml-[820px] mt-5 w-[150px] rounded-[20px] bg-black text-white h-[36px]'>Save</button>
        </div>
      ) : null}

      {adressesTable ? (
        <div className='w-[1200px] h-[400px] mt-[-45px] bg-white ml-[280px] mt-[180px] z-50 fixed'>
          <hr className='w-[1100px] mb-5' />

          <div>
            <button className='border-2 p-1 rounded-[20px] pr2 h-[34px] hover:bg-gray-600 hover:border-none hover:text-white w-[270px] text-[16px] mr-2'>Fabric Type Shipping Adresses</button>
            <button className='border-2 p-1 rounded-[20px] pr2 h-[34px] hover:bg-gray-600 hover:border-none hover:text-white w-[300px] text-[16px] mr-2'>Sample Product Shipping Adresses</button>
            <button className='border-2 p-1 rounded-[20px] pr2 h-[34px] hover:bg-gray-600 hover:border-none hover:text-white w-[150px] text-[16px] mr-[220px]'>Billing Adresses</button>
            <button className='border-2 p-1 rounded-[20px] pr2 h-[34px] hover:bg-blue-700 hover:border-none hover:text-white w-[150px] text-[16px]'>+ Add Adresses</button>
          </div>

          <div className='border-2 w-[1110px] rounded-[10px] p-2 h-[100px] mt-5'>
            <h1 className='font-semibold mt-4 ml-3'>XYZxStudio</h1>
            <p className='text-[13px] font-medium ml-3'>Levent, Büyük Dere Cd. No:185, 34394 Sisli/İstanbul, Turkiye</p>
            <button className='ml-[965px] flex flex-row border-2 p-1 rounded-[20px] w-[80px]
              h-[33px] mt-[-35px] hover:bg-blue-600 hover:text-white hover:border-blue-600
            '><FaRegEdit className='text-[18px] ml-2 mt-[1px]' /><p className='ml-1 mt-[-1px]'>Edit</p></button>
            <div className='cursor-pointer ml-[1050px] rounded-[30px] w-[30px] h-[28px] bg-red-500 mt-[-35px]'><FaTrashAlt className='text-[16px] text-white mt-1 ml-1 relative top-[5px] left-[3px]' /></div>
          </div>
          <div className='border-2 w-[1110px] rounded-[10px] p-2 h-[100px] mt-5 '>
            <h1 className='font-semibold mt-4 ml-3'>XYZxStudio</h1>
            <p className='text-[13px] font-medium ml-3'>Levent, Büyük Dere Cd. No:185, 34394 Sisli/İstanbul, Turkiye</p>
            <button className='ml-[965px] flex flex-row border-2 p-1 rounded-[20px] w-[80px]
              h-[33px] mt-[-35px] hover:bg-blue-600 hover:text-white hover:border-blue-600
            '><FaRegEdit className='text-[18px] ml-2 mt-[1px]' /><p className='ml-1 mt-[-1px]'>Edit</p></button>
            <div className='cursor-pointer ml-[1050px] rounded-[30px] w-[30px] h-[28px] bg-red-500 mt-[-35px]'><FaTrashAlt className='text-[16px] text-white mt-1 ml-1 relative top-[5px] left-[3px]' /></div>
          </div>
          <div className='border-2 w-[1110px] rounded-[10px] p-2 h-[100px] mt-5'>
            <h1 className='font-semibold mt-4 ml-3'>XYZxStudio</h1>
            <p className='text-[13px] font-medium ml-3'>Levent, Büyük Dere Cd. No:185, 34394 Sisli/İstanbul, Turkiye</p>
            <button className='ml-[965px] flex flex-row border-2 p-1 rounded-[20px] w-[80px]
              h-[33px] mt-[-35px] hover:bg-blue-600 hover:text-white hover:border-blue-600
            '><FaRegEdit className='text-[18px] ml-2 mt-[1px]' /><p className='ml-1 mt-[-1px]'>Edit</p></button>
            <div className='cursor-pointer ml-[1050px] rounded-[30px] w-[30px] h-[28px] bg-red-500 mt-[-35px]'><FaTrashAlt className='text-[16px] text-white mt-1 ml-1 relative top-[5px] left-[3px]' /></div>
          </div>

        </div>
      ) : null}

      {paymentsTable ? (
        <div className='w-[1200px] h-[400px] mt-[-45px] bg-white ml-[300px] mt-[180px] z-50 fixed'>
          <hr className='w-[975px] mb-5' />
          <h1 className='text-[18px] font-semibold'>Card Informations</h1>
          <div className='flex-flex-row mt-10'>
            <div className='flex flex-row text-[13px] font-semibold'> <p className='mr-[190px]'>Name on card</p> <p className='mr-[165px] ml-[54px]'>Card Number</p> <p className='ml-[84px]'>Expiration date</p>
              <p className='ml-[78px]'>Security code</p></div>
            <input className='border-2 rounded-[5px] w-[300px] h-[35px] p-4 mr-8' type="text" placeholder='Jhon Doe' />
            <input className='border-2 rounded-[5px] w-[300px] h-[35px] p-4 mr-8' type="number" placeholder='**** **** **** ****' />
            <input className='border-2 rounded-[5px] w-[140px] h-[35px] p-4 mr-8' type="number" placeholder='MM-YY' />
            <input className='border-2 rounded-[5px] w-[140px] h-[35px] p-4 mr-8' type="text" placeholder='CVC' />
          </div>

          <button className='ml-[828px] mt-5 w-[150px] rounded-[20px] bg-black text-white h-[36px]'>Save</button>
        </div>
      ) : null}
    </div>
  )
}

export default TopBar