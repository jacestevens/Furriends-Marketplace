import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ImageList, ImageListItem, Typography, Paper, Divider } from '@mui/material' 
import Navigation from './Navigation'
import Footer from './Footer'
import BestSellers from './BestSellers'

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
        <div className='relative top-6'>
                <Navigation />
        <div className="flex flex-row gap-10 w-10/12 my-16 mx-auto">

            <div className="w-7/12">
                { product ? 

                <ImageList variant="masonry" cols={1} gap={8}>
                    <ImageListItem>
                        <img
                        src={product.productPhoto}
                        alt={product.productName}
                        />
                    </ImageListItem>
                    
                    <ImageListItem>
                        <img
                        src={product.productPhoto}
                        alt={product.additionalPhotos}
                        />
                    </ImageListItem>
                    
                    <ImageListItem>
                        <img
                        src={product.productPhoto}
                        alt={product.additionalPhotos}
                        />
                    </ImageListItem>
                    
                    
                    
                </ImageList>
                : null}
            </div>
            <div className="flex flex-col gap-6">
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
                <Paper elevation={2} sx={{
                    width: 500,
                    paddingX: 5,
                    paddingY: 2
                }}>
                    <div className="flex flex-col py-10 gap-4">
                    <Typography variant="h4">Best Sellers</Typography>
                    <Divider />
                    <Typography variant="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    </Typography>
                    </div>
                </Paper>
                <Paper elevation={2} sx={{
                    width: 500,
                    paddingX: 5,
                    paddingY: 2
                }}>
                    {product.keyFeatures}
                </Paper>
            </div>
        </div>
        <Paper elevation={10} className='my-10 '>

        <BestSellers />
        </Paper>
        </div>
    )
}

export default OneProduct