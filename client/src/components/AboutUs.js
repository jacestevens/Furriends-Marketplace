import React from 'react'
import { Paper, Typography, Divider } from '@mui/material'
import { useMediaQuery } from '@mui/material'

const AboutUs = () => {

    const isMobile = useMediaQuery('(min-width:600px)')


  return (
    <div>
         <Paper elevation={3} className={isMobile ? "flex flex-row gap-2 w-full mx-auto my-5 p-16 items-center" : "flex flex-col items-center gap-2 text-center p-5 w-11/12 mb-3 mx-auto"} >
                    <div>
                        <Typography variant="h4" sx={{fontWeight: 'bold'}}>Our Origins</Typography>
                    </div>
                    <Divider orientation={isMobile ? 'vertical' : 'horizontal'} flexItem sx={{marginX: 5}}/>
                    <div>
                    <Typography variant="p">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    </Typography>
                    </div>
                </Paper>
    </div>
  )
}

export default AboutUs