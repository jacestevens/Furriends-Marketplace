import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import { GlobalContext } from '../contexts/GlobalContext'
import { Paper, Typography, CardActions, CardContent, Button, CardActionArea, Card, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import Form from './Form'
import DeleteButton from './DeleteButton'
import { useMediaQuery } from '@mui/material'
const EditProduct = () => {

    const {id} = useParams()
    // const [editProduct, seteditProduct] = useState({})
    const navigate = useNavigate()

    const isMobile = useMediaQuery('(min-width:1024px)')
    const [editProduct, setEditProduct] = useState({

        
        productName: "",
        productPhoto: "",
        additionalPhotos: "",
        additionalPhotosTwo: "",
        productPrice: "",
        productDescription: "",
        productType: "",

    })
    const [Errors, setErrors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Product/${id}`)
            .then((res) => {
                console.log(res.data)    
                setEditProduct(res.data)
            })
            .catch((err) => console.log(err))
    }, [`${id}`])
    
    const submitHandler = (e) => { 

    
        axios.put(`http://localhost:8000/api/Product/${id}`, editProduct, {withCredentials: true})
            .then((res) => {
                console.log(res.data)    
                navigate("/admin")   
            })
            .catch((err) => {
                console.log(err.response.data.errors)
                console.log(err.response)
                setErrors(err.response.data.errors)
            })
    }


    return (

        <div className={ isMobile ? "flex flex-row items-center gap-5 p-10" : "flex flex-col items-center gap-5 p-10" }>
            <div>
                
                            <div key={editProduct._id}>
                                <Card 
                                sx={{
                                    maxWidth: 500
                                }}
                                elevation = {5}
                                >
                                <CardActionArea>
                                <Link to={`/Product/${editProduct._id}`}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={editProduct.productPhoto}
                                    alt="modern-cat-furniture"
                                />
                                </Link>
                                </CardActionArea>
                                <CardContent className="flex flex-row justify-around items-center h-auto">
                                    <div>
                                    <Typography variant="h5">
                                        {editProduct.productName}
                                    </Typography>
                                    <Typography variant="h5">
                                        {editProduct.productPrice}
                                    </Typography>
                                    </div>
                                    <CardActions className="flex flex-col gap-1 items-center">
                                        <DeleteButton productId={editProduct._id} />  
                                        
                                    </CardActions> 
                                </CardContent>

                                </Card>
                            </div>
            </div>
            <Form submitHandler = {submitHandler}  Product = {editProduct} setProduct = {setEditProduct} Errors = {Errors} setErrors = {setErrors}/>
        </div>
          
    )
}

export default EditProduct