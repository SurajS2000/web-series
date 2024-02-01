import React from 'react'
import {useNavigate} from 'react-router-dom'

const Movies = (props) => {
  const navigate = useNavigate()
  const index = props.idx
  function handleclick(index) {
    navigate('/details',{state:{index}})
    console.log(index)
  }
  const data = props.data.show;
  return (
    <div className='p-2 border-2 bg-slate-200 rounded-xl'>
      <img style={{width:'225px',height:'295px',}} src={data.image ? data.image.medium:""} alt={data.name} />
      <h2 className='text-2xl text-cyan-700s'>{data.name}</h2>
      <ul>
        <li>Language: {data.language}</li>
        <li>Genres: {data.genres.join(',')}</li>
        <li>Rating: {data.rating.average}/10</li>
        <li>Runtime: {data.runtime ? data.runtime +'m':"unknown"}</li>
      </ul>
      <div className='w-full flex justify-center items-center py-5'>
        <button onClick={()=>handleclick(index)} className='p-2 bg-cyan-400 rounded-lg text-slate-700'>Summary</button>
      </div>
    </div>
  )
}

export default Movies
