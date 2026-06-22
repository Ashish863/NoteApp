import React, { useState } from 'react'

function App() {
  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');
  const [notes,addNotes]=useState([]);
  const submitHandler=(e)=>{
    e.preventDefault()
    if(title==''|content==''){
      alert("Please fill out both the Heading and the Note content!"); 
      return
    }
    const copyNote=[...notes]
    copyNote.push({title,content})
    addNotes(copyNote)
    setTitle('')
    setContent('')
  }
  const deleteNote=(idx)=>{
    const copyNote=[...notes]
    copyNote.splice(idx,1)
    addNotes(copyNote)
  }

  return (
    <div className='h-screen lg:flex bg-black p-10 text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex lg:w-1/2 items-start'>
        <div className='flex flex-col w-1/2 gap-4'>
        <h1 className='font-bold text-2xl'>Add Notes</h1>


        <input className=' px-5 py-2 font-medium w-full border-2 rounded-2xl' type="text" value={title} placeholder='Enter Notes Heading'
        onChange={(e)=>{setTitle(e.target.value)}}
        />
        

        <textarea className='border-2 w-full font-medium rounded-2xl px-5 h-30 py-2' type="text" value={content} placeholder='Write Notes'
        onChange={(e)=>{
          setContent(e.target.value)
        }}
        />
        
        <button className='bg-white font-medium text-black border-2 w-1/2 px-5 py-2'>Add Notes</button>
        </div>
      </form>
      
      <div className='lg:border-l-2 lg:w-1/2 p-10'>
  <h1 className='font-bold text-xl'>Your Notes</h1>
  <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-full'>
    {
      notes.map(function(e, idx) {
        return (
      
          <div key={idx} className='bg-cover bg-center bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3bUzcfjXEgpNynCGXAL2naN49al7QDepIQ&s")] h-52 w-40 text-black flex flex-col justify-between overflow-hidden rounded-2xl p-4 shadow-md'>
            
            
            <div className='flex flex-col overflow-y-auto max-h-\[120px]\ pt-4'>
              <h1 className='font-bold text-center text-lg mb-1 break-words'>{e.title}</h1>
              <p className='leading-normal break-words text-xs text-gray-800 px-1'>{e.content}</p>
            </div>
            
            <button className='bg-red-600 text-white font-bold rounded-lg py-1 px-3 w-full text-center mt-auto text-sm hover:bg-red-700 transition shadow-sm'
            onClick={()=>{
              deleteNote(idx)
            }}
            >
              Delete
            </button>
          </div>
        )
      })
    }
  </div>
</div>

    </div>
  )
}

export default App
