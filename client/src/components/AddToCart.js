import React from 'react'
import { Button } from '@mui/material'
import { useContext,useEffect } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const AddToCart = ({ProductAdded}) => {
const {cart, setCart, product} = useContext(GlobalContext)




const addToCart = (e) => {
  e.preventDefault();
  setCart([...cart, ProductAdded])
}


  return (
    <Button variant="contained" className='w-full' onClick={addToCart}>Add To Cart</Button>
  )
}

export default AddToCart