import axios from 'axios'
import React, { useState } from 'react'
import {Paper, TextField, Button, Alert, AlertTitle, Typography} from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'

const Register = () => {

    const [user, setUser] = useState({

        email: "",
        username: "",
        password: "",
        confirmPassword: ""
        
    })
    const [confirmReg, setConfirmReg] = useState("")
    const [errors, setErrors] = useState({})
    const isMobile = useMediaQuery('(min-width:700px)')
    const onChangeHandler = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })

    }

    const register = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/users/register", user)
            .then((res) => {
                console.log("successful registration")
                setUser({
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
                setConfirmReg(
                    "Thank you for Registering, you can now log in!",
                );
                setErrors({});
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
                console.log("theres something wrong here")
            })

    }

    return (
        <div className='h-screen'>
             { confirmReg ?
            <Alert severity="success" className="w-6/12 mx-auto my-5">
                <AlertTitle>Success!</AlertTitle>
                {confirmReg}
            </Alert> : null}
            <div  className={isMobile ? "p-10 mx-auto my-8 w-5/12": "p-10 mx-auto my-8 w-screen"}>
                <div className="mb-5">
                <Typography variant="h2">Sign Up!</Typography>
                <Typography variant="paragraph">It's so dog-gone easy!</Typography>
                </div>
                <form className="flex flex-col gap-4" onSubmit={register}>
                {errors.email ?
                    <TextField error id="outlined-error" label={errors.email.message} name="email" value={user.email} onChange={onChangeHandler}/> :  
                    <TextField id="outlined-basic" label="Email" variant="outlined" name="email" value={user.email} onChange={onChangeHandler}/>
                }
                {errors.username?
                    <TextField error id="outlined-error" label={errors.username.message} variant="outlined" name="username" value={user.username} onChange={onChangeHandler} />:
                    <TextField id="outlined-basic" label="Username" variant="outlined" name="username" value={user.username} onChange={onChangeHandler} />
                }
                {errors.password?
                <TextField error id="outlined-error" label={errors.password.message} variant="outlined" type="password" name="password" value={user.password} onChange={onChangeHandler}/>:
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" name="password" value={user.password} onChange={onChangeHandler}/>
                }
                {errors.confirmPassword?
                <TextField error id="outlined-error" label={errors.confirmPassword.message} variant="outlined" type="password" name="confirmPassword" value={user.confirmPassword} onChange={onChangeHandler}/>:
                <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type="password" name="confirmPassword" value={user.confirmPassword} onChange={onChangeHandler}/>
                }
                { confirmReg?
                <Button disabled variant="contained" type="submit" >Register</Button>:
                <div className='w-full flex flex-col gap-2'>

                    <Button variant="contained" type="submit" >Register</Button>
                    <Link to="/login" className='w-full'><Button fullWidth variant='contained'>Log In!</Button></Link>
                </div>
                }
                </form>
            </div>
           
        </div>
    )
}

export default Register
