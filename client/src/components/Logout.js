import React, {useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';
import { Button } from '@mui/material'
import { GlobalContext } from '../contexts/GlobalContext';


const Logout = () => {

    const navigate = useNavigate()
    const { setuserId, setUserInfo } = useContext(GlobalContext)


    const logout = (e) => {

        
        
        axios
            .post(
                "http://localhost:8000/api/users/logout",
                {},
                {
                    withCredentials: true,
                },
            )
            .then((res) => {

                console.log(res.data);
                localStorage.clear();
                navigate("/");
                setuserId("")
                setUserInfo("")

                
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='w-full'>
            <Button variant="contained" fullWidth onClick={logout}>Log Out</Button>
        </div>
    )
}

export default Logout
