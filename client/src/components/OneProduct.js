import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ImageList, ImageListItem, Typography, Paper } from '@mui/material' 

const OneProduct = () => {
    
    
    const {id} = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/Product/${id}`)
            .then((res) => {
                setProduct(res.data)
                console.log("yes",res.data)

            })
            .catch((err)=> console.log(err))
    }, [id])

    console.log("yes",product.additionalPhotos)

    return (
        <div className="flex flex-row gap-10 w-10/12 my-16 mx-auto">
            <div className="w-7/12">
                { product.additionalPhotos ? 

                <ImageList variant="masonry" cols={1} gap={8}>
                    <ImageListItem>
                        <img
                        src={product.productPhoto}
                        alt={product.productName}
                        />
                    </ImageListItem>
                    
                    <ImageListItem>
                        <img
                        src={product.additionalPhotos.imgOne}
                        alt={product.additionalPhotos}
                        />
                    </ImageListItem>
                    
                    <ImageListItem>
                        <img
                        src={product.additionalPhotos.imgOne}
                        alt={product.additionalPhotos}
                        />
                    </ImageListItem>
                    
                    
                    
                </ImageList>
                : null}
            </div>
            <div className="flex flex-col">
                <Paper elevation={2} sx={{
                    width: 500,
                    paddingX: 5,
                    paddingY: 2
                }}>
                    <Typography variant="h4">{product.productName}</Typography>
                    <Typography
                     variant="h4" 
                     sx={{
                        fontWeight: 100
                    }}>{product.productPrice}</Typography>
                </Paper>

            </div>
        </div>
    )
}

export default OneProduct
