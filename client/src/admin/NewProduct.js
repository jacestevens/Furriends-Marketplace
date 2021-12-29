import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Asset } from '../assets/Asset-5.svg';
import axios from 'axios'
import { useState } from 'react'
import Form from './Form'
import { useMediaQuery } from '@mui/material';
// import { Button, Typography } from '@mui/material'


const NewProduct = () => {

    const navigate = useNavigate()
    const isMobile = useMediaQuery('(min-width:600px)')


    const [newProduct, setnewProduct] = useState({

        productName: "",
        productPhoto: "",
        additionalPhotos: "",
        productPrice: "",
        productDescription: "",
        productType: "",



    })
    
    const [Errors, setErrors] = useState([])
    
    const submitHandler = (e) => { 
        e.preventDefault();
    
        axios.post("http://localhost:8000/api/Product", newProduct, {withCredentials: true})
            .then((res) => {
                console.log(res)
                console.log(res.data)
                setnewProduct(res.data)
                navigate("/admin")
                window.location.reload()
            })
            .catch((err => {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            }))
            
    }


    return (
        <div>

        {   isMobile? 
        
            <div className="flex flex-row gap-10 items-center">
            <Asset className="h-auto w-6/12"/>
                <div className="flex flex-col my-3 mx-auto w-8/12">
                <Form submitHandler = {submitHandler} Product = {newProduct} setProduct = {setnewProduct} Errors = {Errors} setErrors = {setErrors}/>
                </div>
            </div>
            :
            <div>
                    <Form submitHandler = {submitHandler} Product = {newProduct} setProduct = {setnewProduct} Errors = {Errors} setErrors = {setErrors}/>
            </div>
            }
        </div>
    )

    }
export default NewProduct
