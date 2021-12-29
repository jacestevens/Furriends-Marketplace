import React, {useContext, useEffect, useState} from 'react'
import {Paper, TextField, Box, Button, AppBar, Toolbar, Typography, IconButton, MenuItem, Menu}  from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {Link} from "react-router-dom"
// import LoginIcon from '@mui/icons-material/Login';
import Logout from './Logout'
import { GlobalContext } from '../contexts/GlobalContext'
import Logo from '../assets/Asset-1-01.png'
import { useMediaQuery } from '@mui/material'




const Navigation = () => {

    const {userInfo, setuserId, userId} = useContext(GlobalContext)
    const isMobile = useMediaQuery('(min-width:600px)')
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    useEffect(() => {
        setuserId(localStorage.getItem('userId'))
    }, [])


    return (
        <div>
            {isMobile? 
            
        
        <div className="flex flex-row w-full mx-auto " >
            <Paper elevation = {2} className="w-full">
                <div className="flex flex-row justify-evenly items-center" >
                    <div>
                        <Link to="/">
                            <img src={Logo} alt="" style={{height: 100, marginBottom: 2}}/>
                        </Link>
                    </div>
                    <div className="flex justify-evenly w-6/12">
                        <Link to="/Collections">All Products</Link>
                        <Link to="/dogs">Dog Essentials</Link>
                        <Link to="/cat">Cat Essentials</Link>
                        <Link to="/other-pets">Other</Link>
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
        </div> : 
        <div>
            <AppBar position="static" sx={{backgroundColor: 'black'}}>
                <Toolbar>
                <IconButton
                    id="basic-button"
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                > <MenuIcon/>
                     </IconButton>
                        
                        <Menu
                         id="basic-menu"
                         anchorEl={anchorEl}
                         open={open}
                         onClose={handleClose}
                         MenuListProps={{
                           'aria-labelledby': 'basic-button',
                         }}
                        >
                        <MenuItem onClick={handleClose}><Link to="/Collections">All Products</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/dogs">Dog Essentials</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/cat">Cat Essentials</Link></MenuItem>
                        <Link to={`/admin`}><MenuItem onClick={handleClose}>Admin</MenuItem></Link>
                    </Menu>
               
                <Typography variant="button" sx={{ flexGrow: 1 }}>
                   <Link to="/">
                   Furriend's Marketplace
                   </Link> 
                </Typography>
                {userId ? 
                    <div className="flex flex-row items-center gap-1">
                        <Logout />
                        
                    </div>
                    :
                    <Button ><Link to="/login" className='text-white' >Login</Link></Button>}
                </Toolbar>
            </AppBar>
        </div>
        }
        </div>
    )
}

export default Navigation
 