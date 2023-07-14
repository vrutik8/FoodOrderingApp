import React, { useEffect } from 'react'

const Body = () => {

  useEffect(()=>{
      fetchData();
  },[])

 const fetchData = async () => {
  const data = await fetch ('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
  const json = await data.json();
  console.log(json);

 }

  return (
  <>
  <div className='container'>
    <div className="search">
      <input className='search-input' type="text" />
      <button className='search-btn'>SEARCH</button>
    </div>

    <div className="restaurant-card">
      <img src="" alt="" />
    </div>

  </div>
  </>
  )
}

export default Body