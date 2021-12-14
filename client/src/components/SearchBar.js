import React, { useContext, useState } from 'react'
import { TextField } from '@mui/material'
import { GlobalContext } from '../contexts/GlobalContext'

const SearchBar = ({onSearchChange}) => {

    const {productList, setProductList} = useContext(GlobalContext)
    
    
//     const onSearchChange = (e) =>{

//         setfilteredList(e.target.value)
        
//     }
    

//    let newList = productList.filter((product ) => { 
//     return product.productName.toLowerCase().includes(filteredList.toLowerCase());
   
//    })

//     setProductList(newList)
    return (


        <div>
            <TextField id="outlined-basic" label="Search Products" variant="outlined" type="search" name="keyFeatures"  onChange={onSearchChange} />
        </div>
    )
}

export default SearchBar
