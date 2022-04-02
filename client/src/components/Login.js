import { Paper, TextField, Button, Alert, AlertTitle, Typography, Container  } from '@mui/material'
import axios from 'axios'
import React, { useState, useContext } from 'react'
import {useNavigate} from "react-router-dom"
import { GlobalContext } from '../contexts/GlobalContext'
import Navigation from '../layouts/Navigation'
import { useMediaQuery } from '@mui/material'



const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")
    const { setuserInfo, setuserId} = useContext(GlobalContext)
    const isMobile = useMediaQuery('(min-width:700px)')

    const login = (e) => {

        e.preventDefault()
        axios.post("http://localhost:8000/api/users/login", {
            email: email,
            password: password
        },{withCredentials: true})
        .then((res) => {


            localStorage.setItem("userId", res.data.userId)
            localStorage.setItem("username", res.data.userLoggedIn)
            console.log(res.data)   
            setuserId(res.data.userId)
            setuserInfo(res.data.userLoggedIn)
            navigate("/admin")
            
            
        })
        .catch((err) => {
            setErrors(err.response.data)
            console.log(err.response.data)
        })


    }



    return (
        <div>
            <div className='pt-5 h-screen'>

            <Paper elevation={3} className={isMobile ? "p-10 mx-auto mt-8 mb-96 w-9/12" : "h-auto mt-10 mx-3 p-8" }>
                <Typography variant='h4'>Login</Typography>
                <form onSubmit={login} className="flex flex-col gap-4 mt-5">
                {errors ? 
                <div className='flex flex-col'> 
                <Alert severity="error" className="my-5">
                <AlertTitle>{errors.message}</AlertTitle>
        
                </Alert>
                    <TextField error id="outlined-error" label="Login attempt failed!" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                :
                <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)}/>
                }
                {errors ? 
                <TextField error id="outlined-error" label="Login attempt failed!" type="password" name="email" value={password} onChange={e => setPassword(e.target.value)}/>:
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" value={password} onChange={e => setPassword(e.target.value)}/>}
                <Button type="submit" variant="contained">Login</Button>
                </form>
            </Paper>
        </div>
    </div>
    )
}

export default Login
