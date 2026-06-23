import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [userData,setUserData]=useState([]);
  const [page,setPage]=useState(1);
  useEffect(()=>{
    getData()
    console.log(userData)
  },[page])
  const getData= async ()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
    setUserData(response.data)
  }
  let printUserData=<h1 className='text-gray-300 absolute top-1/2 text-xs left-1/2 -translate-x-1/2 -translate-y-1/2'>loading..</h1>
  if(userData.length>0){
    printUserData=userData.map((elem,idx)=>{
      return <div key={idx}>
        <a href={elem.url}>

       <div className='h-50 w-50 flex overflow-hidden rounded-xl'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h2 className='font-semibold'>{elem.author}</h2>

        </a>
      </div>
    })
  }
  return (
    <div className='bg-black h-screen overflow-y-auto p-4 text-white'>
      <div className='flex h-[80%] flex-wrap gap-4'>
      {printUserData}
      </div>
      <div className='flex justify-center gap-6 p-7 items-center'>
      <button
      onClick={()=>{
        if(page>1){
          setPage(page-1)
          setUserData([])
        }
        
      }
      }
       className='bg-amber-300 text-black font-semibold text-sm px-5 py-3 rounded cursor-pointer active:scale-95 '>prev</button>
       <h1>Page {page}</h1>
      <button onClick={()=>{
        setUserData([])
        setPage(page+1)
      }
      } className='bg-amber-300 text-black font-semibold text-sm px-5 py-3 rounded cursor-pointer active:scale-95'>next</button>
      </div>
    </div>
  )
}

export default App
