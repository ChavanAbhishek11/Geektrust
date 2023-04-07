
import React, { useEffect, useState } from 'react'

export function SearchBar({product}) {

    const [filteredData,setFiltereddata]=useState([]);
    const handleFilter = (e)=>{
        const searchWord = e.target.value;
        const newFilter = product.filter((value)=>{
            return Object.values(value).toLowerCase().includes(searchWord.toLowerCase());
        })
        setFiltereddata(newFilter)
    }
    return(
        <>
        {filteredData.length!=0 &&(
            <div>
                {filteredData.map((value,key)=>{
                    return(
                        <p>{value.name}</p>
                    )
                })}
            </div>
        )}

<input onChange={handleFilter} style={{width:"500px", marginLeft:"500px",borderRadius:"10px", paddingLeft:"15px"}}type="text" placeholder='Search list items'></input>
        </>
    )
}