import React, { useContext } from 'react'
import { Typography, Button, Paper } from '@mui/material'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'
import { useMediaQuery } from '@mui/material'

const Banner = () => {


    const {userId} = useContext(GlobalContext)
    const isMobile = useMediaQuery('(min-width:600px)')

    return (
        <div className='banner-image'>
            <div className='flex flex-col items-end p-36'>

                <div className="flex flex-col gap-4 items-center Home-Page">
                    <div className="flex flex-col">
                        <div className="flex flex-col justify-start items-center gap-4 ">

                        <Typography variant="h3" sx={{
                            fontWeight: "bolder",
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
