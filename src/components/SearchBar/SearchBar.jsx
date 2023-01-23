import { useState,useEffect } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './SearchBar.css';
const data=[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}];
const SearchBar=(props)=>{
    
    const [search,setSearch]=useState('');
    const [filteredData,setFilteredData]=useState('');
    props.getFilteredData(filteredData);
   
   const filterData=search=>{
    const results=data.filter(obj=>{
       

       
        return obj.name.trim().toLowerCase().includes(search.toLowerCase());
       })
       setFilteredData(results)
   }
  useEffect(() => {
    filterData(search)
  },[search]);
    const handleChange=(event)=>{
       

       setSearch(event.target.value);

    }
    return (
        <>
         <div className="search">
          <input type="text" value={search} onChange={handleChange} className="searchTerm" placeholder="Search"/>
          
          
        </div>
        <div className="checkBox">
            <input type="checkbox"/>
            <span>Only show products in stock</span>
        </div>
        </>
    )
}

export default SearchBar;