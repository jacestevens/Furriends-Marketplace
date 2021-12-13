import { Paper, TextField, Button  } from '@mui/material'
import axios from 'axios'
import React, { useState, useContext } from 'react'
import {useNavigate} from "react-router-dom"
import { GlobalContext } from '../contexts/GlobalContext'



const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [errors, setErrors] = useState("")
    const { setuserInfo, setuserId} = useContext(GlobalContext)

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
            // setErrors(err.response.data.errors)
            console.log(err)
        })


    }



    return (
        <div>
            
            <Paper elevation="2" className="p-10 mx-auto my-8 w-5/12">
                <form onSubmit={login} className="flex flex-col gap-4">
                <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)}/>
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <Button type="submit" variant="contained">Login</Button>
                </form>
            </Paper>
        </div>
    )
}

export default Login
