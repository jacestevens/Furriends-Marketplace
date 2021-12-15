import { Paper, TextField, Avatar, Typography, Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router'
// import AllProducts from '../components/AllProducts'
import NewProduct from './NewProduct';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import AdminProducts from './AdminProducts';
import Navigation from '../components/Navigation';

const Admin = () => {

    const  {userInfo, userId} = useContext(GlobalContext)
    const [username, setUsername] = useState('')
    useEffect(() => {
        setUsername(localStorage.getItem("username"))
    }, [])
    const avatarInitials = username.charAt(0)
    return (
        <div className='pt-5'>
        {/* <Navigation /> */}
        <div className="flex flex-row gap-5 mx-auto my-5 w-11/12" >
           <div className="flex flex-col gap-5 w-3/12">
                <Paper className="flex flex-col gap-5 items-center p-10 ">
                    <Avatar sx={{ bgcolor: "black", height: 200, width: 200 }}>{avatarInitials}</Avatar>
                    <Typography variant="h4">{username}</Typography>
                </Paper>
                <Button variant="outlined"><Link to="add-product">Add New Product</Link></Button>
                <Button variant="outlined"><Link to={`/all-products/${userId}`}>View Your Products</Link></Button>
                <Paper>
                    
                </Paper>
           </div>
           <div className="flex flex-col gap-5 w-9/12">
                {/* <NewProduct /> */}
                <Paper className="px-8">
                <Outlet />
                </Paper>
                <AdminProducts />
           </div>
        </div>
        </div>
    )
}

export default Admin
