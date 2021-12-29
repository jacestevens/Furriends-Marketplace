import { Paper, TextField, Avatar, Typography, Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router'
// import AllProducts from '../components/AllProducts'
import NewProduct from './NewProduct';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import AdminProducts from './AdminProducts';
import Navigation from '../components/Navigation';
import { useMediaQuery } from '@mui/material';

const Admin = () => {

    const  {userInfo, userId} = useContext(GlobalContext)
    const [username, setUsername] = useState('')
    const isMobile = useMediaQuery('(min-width:600px)')


    useEffect(() => {
        setUsername(localStorage.getItem("username"))
    }, [])
    const avatarInitials = username.charAt(0)
    return (
        <div className='pt-5'>

        {    
        isMobile ?
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
            :
            <div className="flex flex-col gap-5 mx-auto my-5 w-full" >
            <div className="flex flex-col gap-3 w-11/12 mx-auto my-0">
                    <Paper className="flex flex-ro gap-3 items-center p-5 ">
                        <Avatar sx={{ bgcolor: "black", height: 100, width: 100 }}>{avatarInitials}</Avatar>
                        <Typography variant="h4">{username}</Typography>
                    </Paper>
                    <Button variant="contained"><Link to="add-product">Add New Product</Link></Button>
                    <Button variant="contained"><Link to={`/all-products/${userId}`}>View Your Products</Link></Button>
                    <Paper>
                        
                    </Paper>
            </div>
            <div className="flex flex-col gap-5 mx-auto my-0 w-11/12">
                    <Paper className="px-8">
                        <Outlet />
                    </Paper>
                    <div className=' h-full w-full overflow-x-scroll p-2'>

                    <AdminProducts />
                    </div>
            </div>
            </div>
        }
        </div>
    )
}

export default Admin
