import axios from 'axios'
import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const DeleteButton = ({productId}) => {



    const navigate = useNavigate()
    const deleteHandler = (e) => {
        axios.delete(`http://localhost:8000/api/Product/${productId}`)
            .then((res) => {
                navigate("/admin")
                console.log(res.data)
            })
    }

    return (
        <div className='w-full'>
            <Button variant="contained" color='error'  fullWidth onClick={deleteHandler}>Delete</Button>
        </div>
    )
}

export default DeleteButton
