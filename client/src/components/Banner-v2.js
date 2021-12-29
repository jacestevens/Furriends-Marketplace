import React, { useContext } from 'react'
import { Typography, Button, Paper } from '@mui/material'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'
import { useMediaQuery } from '@mui/material'

const BannerTwo = () => {


    const {userId} = useContext(GlobalContext)
    const isMobile = useMediaQuery('(min-width:600px)')

    return (
        <div>
            {
                isMobile ? 
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
                : 
                <div className='flex flex-col gap-2 mt-6'>
                    <Paper className='w-10/12 my-0 mx-auto banner-image-mobile flex flex-col justify-end h-48 p-3'><Link to='/Collections'>
                            <Button variant="contained" size="small" sx={{

                                backgroundColor: "black"
                            }}>Shop All Furniture</Button>
                        </Link>
                    </Paper>
                    <Paper className='w-10/12 my-0 mx-auto flex flex-col gap-2 p-10'>
                        <Typography variant="h4">
                            Furnitures For Your Furball
                        </Typography>
                        <Typography variant="body2">
                            We are a community of pet parents, who's willing to share the reason why our pets are joyful and comfy! 
                        </Typography>
                        <Link to='/login'>
                            <Button variant="contained" size="large" sx={{
                            width: "100%",
                            fontWeight: 700, 
                            backgroundColor: "black"
                        }}>
                                Login
                            </Button>
                        </Link>
                        <Link to='/Register'>
                            <Button variant="contained" size="large" sx={{
                            width: "100%",
                            fontWeight: 700,
                            backgroundColor: "black"
                        }}> Sign Up!</Button>
                        </Link>
                    </Paper>
                </div>
            }
        </div>
    )
}

export default BannerTwo
