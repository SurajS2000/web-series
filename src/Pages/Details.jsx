import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Details = (props) => {
   const value = useLocation()
   const navigate = useNavigate()
   const data = props.data[value.state.index]
   function handleclick(name){
    navigate('/booking',{state:{name}})
   }
  return (
    <div>
      <h1 className='text-center text-5xl bg-cyan-400 w-screen p-5 mb-5 text-slate-800'>{data&&data.show.name}</h1>
      {data&&<div className='px-5 text-center text-2xl' dangerouslySetInnerHTML={{__html:data.show.summary}}>
      </div>}
      <div className='w-full flex justify-center pt-5'>
        <button onClick={()=>{handleclick(data.show.name)}} className='bg-cyan-400 p-2 text-xl text-slate-700 rounded-lg'>BookTicket</button>
      </div>
    </div>
  )
}

export default Details;
