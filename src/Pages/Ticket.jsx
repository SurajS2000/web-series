import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Ticket = () => {
  const value = useLocation();
  const [username,setname]=useState('');
  const [email,setemail]=useState('');
  const [number,setnumber]=useState('');
  const movie = value.state.name;
 useEffect(()=>{
    setname(get('name'))
    setemail(get('email'))
    setnumber(get('number'))
  },[]);
  function get(key){
    const stored = localStorage.getItem(key);
    return stored == null ? undefined:JSON.parse(stored);
  };
  function handlesubmit(event){
    event.preventDefault();
    localStorage.setItem('name',JSON.stringify(username));
    localStorage.setItem('email',JSON.stringify(email));
    localStorage.setItem('number',JSON.stringify(number));
    alert('successful');
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="p-5 bg-cyan-400 rounded-lg text-slate-700">
        <h1 className="text-xl">Ticket Reserevation:</h1>
        <h2 className="text-2xl">{movie}</h2>
        <form onSubmit={handlesubmit} className="flex flex-col">
          <label>NAME</label>
          <input value={username} onChange={e=>{setname(e.target.value)}} className="bg-cyan-500 rounded-md pl-3" type="text" />
          <label>EMAIL</label>
          <input value={email} onChange={e=>{setemail(e.target.value)}}  className="bg-cyan-500 rounded-md pl-3" type="email" />
          <label>NUMBER</label>
          <input value={number} onChange={e=>{setnumber(e.target.value)}}  className="bg-cyan-500 rounded-md pl-3 de" type="number" />
          <button className="mt-5 p-2 bg-gray-700 text-cyan-400 rounded-md" type="submit">confirm</button>
        </form>
      </div>
    </div>
  );
};

export default Ticket;
