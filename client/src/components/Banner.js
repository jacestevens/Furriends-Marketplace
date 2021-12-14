import React, { useContext } from 'react'
import { Typography, Button, Paper } from '@mui/material'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'

const Banner = () => {


    const {userId} = useContext(GlobalContext)


    return (
        <div className='banner-image'>
            <div className='relative top-6'>
                <Navigation />
            </div>
            <div className='flex flex-col mr-48 items-end'>

                <div className=" flex flex-col gap-4 items-center Home-Page">
                    <div className="flex flex-col  mt-40">
                        <div className="p-10 flex flex-col items-center gap-4 ">

                        <Typography variant="h3" sx={{
                            fontWeight: "900",
                            color: "primary",
                        }}>Furnitures For Your Furball</Typography>
                        <Link to='/Collections'>
                            <Button variant="contained" size="large" sx={{
                                width: 500,
                                padding: 2,
                                fontWeight: 700,
                                fontSize: "1.3rem", 
                                backgroundColor: "black"
                            }}>Shop All Furniture</Button>
                        </Link>
                        </div>
                        {
                        userId? null :
                        <div className='flex flex-row gap-5 mx-auto my-5 '>         
                        <Link to='/login'>
                            <Button variant="contained" size="large" sx={{
                            width: 250,
                            padding: 2,
                            fontWeight: 700,
                            fontSize: "1.3rem", 
                            backgroundColor: "black"
                        }}>
                                Login
                            </Button>
                        </Link>
                        <Link to='/Register'>
                            <Button variant="contained" size="large" sx={{
                            width: 250,
                            padding: 2,
                            fontWeight: 700,
                            fontSize: "1.3rem", 
                            backgroundColor: "black"
                        }}> Sign Up!</Button>
                        </Link>
                        </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
