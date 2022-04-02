import React from 'react'
import { Typography, Button, Paper, Divider, Container } from '@mui/material'
import AllProducts from './AllProducts'
import { useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'

const BestSellers = () => {  
const isMobile = useMediaQuery('(min-width:720px)')

    return (
        <div className='my-5'>
           <Divider textAlign='right'>
              <Typography variant='h4'>Best Sellers</Typography> 
           </Divider>
           <div>
               <div className='overflow-scroll my-1 p-5'>
                    <AllProducts />
               </div>
               <Container>
                    <Link to={'/Collections'}><Button variant="contained" fullWidth><p className={isMobile ? 'text-lg p-1' : "text-sm" }>View All Products</p></Button></Link> 
               </Container>
           </div>
        </div>
    )
}

export default BestSellers
