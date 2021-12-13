import React, { useContext, useState } from 'react'
import { TextField } from '@mui/material'
import { GlobalContext } from '../contexts/GlobalContext'

const SearchBar = () => {

    const {productList, setProductList} = useContext(GlobalContext)

    const onSearchChange = (e) =>{
    
        const filter = e.target.value
        const filterProducts = productList.filter((product ) => {
            
            return product.productName.toLowerCase().includes(filter.toLowerCase());
        })
        setProductList(filterProducts)
        
        
    } 
    return (


        <div>
            <TextField  onChange={onSearchChange} />
        </div>
    )
}

export default SearchBar
