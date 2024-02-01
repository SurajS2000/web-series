import React,{useState,useEffect} from 'react'
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Details from './Pages/Details';
import Ticket from './Pages/Ticket';

const App = () => {
  const [data, setdata] = useState([]);
  const url = `https://api.tvmaze.com/search/shows?q=all`;
  useEffect(() => {
    const fetchdata = async () => {
      const result = await fetch(url);
      result.json().then((json) => {
        setdata(json);
      });
    };
    fetchdata();
  }, []);
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home data={data}/>}/>
      <Route path="/details" element={<Details data={data}/>}/>
      <Route path="/booking" element={<Ticket/>}/>
      </Routes>
    </Router>
  )
}

export default App

