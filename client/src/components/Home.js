import React from 'react'
// import Navigation from './Navigation'
// import { Routes, Route, Outlet } from 'react-router'
import AllProducts from './AllProducts'
// import Collections from '../view/Collections'
import { Typography, Button, Paper, Divider, Box } from '@mui/material'
import Image from '../assets/AdobeStock_201000201.jpeg'
import Navigation from './Navigation'
import Banner from './Banner'
import BestSellers from './BestSellers'
import { width } from '@mui/system'
import Footer from './Footer'
import BannerTwo from './Banner-v2'
import { useMediaQuery } from '@mui/material'

const Home = () => {    

    const isMobile = useMediaQuery('(min-width:600px)')

    return (
        <div className='flex flex-col gap-5'>
            <div>
                {/* <Banner /> */}
                <BannerTwo />
                <BestSellers />
                
            </div>
            <div>
                <Typography variant="h4" sx={{fontWeight: 800, textAlign: "center"}}>Shop By Category</Typography>
            </div>
            <div className={isMobile ? 'flex flex-row w-full justify-around' : 'flex flex-col w-full justify-around gap-2'}>
                { isMobile ? 
                <div className='flex flex-row w-full justify-around'>
                <Box className='category m-5 w-6/12 h-auto p-72'>
                    <Typography variant="h4" color="secondary" sx={{fontWeight: 800, textAlign: "center"}}>Cats</Typography>
                </Box>
                <Box className='category-2 m-5 w-6/12 h-auto p-72'>
                    <Typography variant="h4" color="secondary" sx={{fontWeight: 800, textAlign: "center"}}>Dogs</Typography>
                </Box> 
                </div> 
                :
                <div className='flex flex-col gap-2 items-center'>
                    <Button variant='contained' className=' w-10/12 h-auto p-72'>
                        <Typography variant="h4" sx={{fontWeight: 800, textAlign: "center"}}>Cats</Typography>
                    </Button>
                    <Button variant='contained' className= 'w-10/12 h-auto p-72'>
                        <Typography variant="h4" sx={{fontWeight: 800, textAlign: "center"}}>Dogs</Typography>
                    </Button>
                </div>

                    }
            </div>
            <div>
                <Paper className={isMobile ? "flex flex-row gap-2 w-10/12 mx-auto my-5 p-16 items-center" : "invisible"} sx={{color: "white", backgroundColor: "black"}}>
                    <div>
                        <Typography variant="h4">Pawrent Architects</Typography>
                    </div>
                    <Divider variant="middle"/>
                    <div>
                    <Typography variant="paragraph">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    </Typography>
                    </div>
                </Paper>
            </div>
        </div>
            
    )
}

export default Home
