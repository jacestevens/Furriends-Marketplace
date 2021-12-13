import React, {useContext, useEffect} from 'react'
import {Paper, TextField, Box, Button}  from '@mui/material'
// import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom"
// import LoginIcon from '@mui/icons-material/Login';
import Logout from './Logout'
import { GlobalContext } from '../contexts/GlobalContext'




const Navigation = () => {

    const {userInfo, setuserId, userId} = useContext(GlobalContext)
    

    useEffect(() => {
        setuserId(localStorage.getItem('userId'))
    }, [])


    return (
        <div className="flex flex-row w-11/12 mt-7 mx-auto " >
            <Paper elevation = {2} className="w-full">
                <div className="flex flex-row justify-evenly items-center" >
                    <div>
                        <Link to="/">
                            Maupets
                        </Link>
                    </div>
                    <div className="flex justify-evenly w-6/12 sm:invisible md:visible">
                        <Link to="/Collections">All Products</Link>
                        <Link to="/beds-caves">Dog Essentials</Link>
                        <Link to="/cat-scratcher">Cat Essentials</Link>
                        <Link to="/cat-trees">Other</Link>
                    </div>
                    <div>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', padding: '10px'}}>
                        
                        <TextField label="Search Mau" variant="outlined" />
                    </Box>
                    </div>
                    <div>

                    {userId ? 
                    <div className="flex flex-row gap-3">
                        <Logout />
                        <Button variant="contained" ><Link to={`/admin`} >My Profile</Link></Button>
                    </div>
                    :
                    <Button variant="contained" ><Link to="/login" >Login</Link></Button>}
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default Navigation
 