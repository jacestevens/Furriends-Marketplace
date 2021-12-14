import React from 'react'
import { Typography, Button, Paper, Divider } from '@mui/material'
import AllProducts from './AllProducts'
const BestSellers = () => {
    return (
        <div className="flex flex-col justify-evenly gap-2 w-full">
            <div className="flex flex-row gap-2 w-10/12 mx-auto my-5">
                <div className="flex flex-col w-4/12 p-10 gap-5">
                    <Typography variant="h4">Best Sellers</Typography>
                    <Divider />
                    <Typography variant="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    </Typography>
                <Button variant="contained" sx={{backgroundColor: "black"}}>View All Furniture</Button>
                </div>
                <div>
                    <AllProducts />
                </div>
            </div>
        </div>   
    )
}

export default BestSellers
