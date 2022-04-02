import React from 'react'
import {Typography, Button, Paper} from "@mui/material"
import { Link } from 'react-router-dom'
import image from '../assets/server_error.png'


const ErrorPage = () => {


    return (
        <div className="flex lg:flex-row md:flex-col sm:flex-col gap-1 w-10/12 my-3 mx-auto items-center ">
            
            <Paper elevation="2" className="flex flex-col gap-10 p-20">
                <Typography variant="h4" sx={{textAlign: 'center'}}>Oops, This page does not exist!</Typography>
                <div className="flex flex-row gap-3 justify-center">

                <Link to="/"><Button variant="contained" size="large">Click Me To Go Home</Button></Link>
                <Button variant="contained" size="large"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="blank">Don't Click Me</a></Button>

                </div>
            </Paper>
            <img src={ image } alt="error" className=" h-2/4 w-6/12 "/>
        </div>
    )
}

export default ErrorPage
