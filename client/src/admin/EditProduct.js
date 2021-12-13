import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import { GlobalContext } from '../contexts/GlobalContext'
import { Paper, Typography, CardActions, CardContent, Button, CardActionArea, Card, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import Form from './Form'
import DeleteButton from './DeleteButton'

const EditProduct = () => {

    const {id} = useParams()
    const [EditedProduct, setEditedProduct] = useState({})
    const navigate = useNavigate()
    const [editProduct, setEditProduct] = useState({
        productName: "",
        productPhoto: "",
        additionalPhotos: "",
        productPrice: "",
        productDescription: "",
        productType: "",

    })
    const [Errors, setErrors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Product/${id}`)
            .then((res) => {
                console.log(res.data)    
                setEditedProduct(res.data)
            })
            .catch((err) => console.log(err))
    }, [])
    
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

        <div className="flex flex-row items-center gap-5 p-10">
            <div>
                
                            <div key={EditedProduct._id}>
                                <Card 
                                sx={{
                                    maxWidth: 500
                                }}
                                elevation = {5}
                                >
                                <CardActionArea>
                                <Link to={`/Product/${EditedProduct._id}`}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={EditedProduct.productPhoto}
                                    alt="modern-cat-furniture"
                                />
                                </Link>
                                </CardActionArea>
                                <CardContent className="flex flex-row justify-around items-center h-auto">
                                    <div>
                                    <Typography variant="h5">
                                        {EditedProduct.productName}
                                    </Typography>
                                    <Typography variant="h5">
                                        {EditedProduct.productPrice}
                                    </Typography>
                                    </div>
                                    <CardActions className="flex flex-col gap-1 items-center">
                                        <DeleteButton productId={EditedProduct._id} />
                                        
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
