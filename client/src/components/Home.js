import React from 'react'
// import Navigation from './Navigation'
// import { Routes, Route, Outlet } from 'react-router'
import AllProducts from './AllProducts'
// import Collections from '../view/Collections'
import { Typography, Button } from '@mui/material'
import Image from '../assets/AdobeStock_201000201.jpeg'

const Home = () => {

    
    

    return (
        <div className="Home-Page">
            <div>
                <div  className=" flex flex-col gap-4 items-center">
                    <Typography variant="h3" sx={{
                        fontWeight: "900",
                        color: "black",
                    }}>Furnitures For Your Furball</Typography>
                    <Button variant="contained" size="large" sx={{
                        width: 500,
                        padding: 2,
                        fontWeight: 700,
                        fontSize: "1.3rem"
                    }}>Shop All Furniture</Button>
                </div>
                <div className="h-10">
                <AllProducts />
                </div>
            </div>
        </div>
    )
}

export default Home
