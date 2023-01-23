import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';
import './FilterableProductTable.css';




const FilterableProductTable=(props)=>{
    const [data,setData]=useState('');
   
    const getFilteredData=fdata=>{
        setData(fdata);
    }
    
   
    return(
        <>
        <div className="container">
           <SearchBar getFilteredData={getFilteredData}/>
           <ProductTable data={data}/>
        </div>
        </>
    )
}

export default FilterableProductTable;