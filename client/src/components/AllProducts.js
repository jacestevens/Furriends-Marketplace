import React from 'react'
import { useEffect, useContext } from 'react'
import axios from 'axios'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import {motion} from 'framer-motion'
import { useMediaQuery } from '@mui/material';

const AllProducts = () => {

    const {productList, setProductList} = useContext(GlobalContext)
    const isMobile = useMediaQuery('(min-width:600px)')

    useEffect(() => {
        axios.get("http://localhost:8000/api/Products")
            .then((res)=> {
                console.log('hello', res.data)
                setProductList(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [setProductList])
    

    return (
    
            <motion.div 
            className={`flex ${isMobile ? "flex-wrap" : "flex-col"} items-center justify-center gap-2 px-2 `}
            drag='x'>
                {
                    productList? productList.slice(0,6).map((product, i) => {
                        return(
                            <div >
                            
                            <Card key={product._id} 
                            sx={{
                                minWidth: "15rem",
                                maxWidth:375,
                                marginX: 2,
                                marginBottom:1,
                            }}
                            elevation= "4">
                            <CardActionArea>
                            <Link to={`/Product/${product._id}`}>
                            <CardMedia
                                component="img"
                                image={product.productPhoto}
                                alt="modern-pet-furniture"
                                sx={{
                                    height: '25rem'
                                }}
                            />
                            </Link>
                            </CardActionArea>
                            <CardContent className="flex flex-col justify-around items-center h-auto">
                                <div className='flex flex-row justify-between w-full'>
                                <Typography variant="h6">
                                    {product.productName}
                                </Typography>
                                <Typography variant="p">
                                    {product.productPrice}
                                </Typography>
                                </div>
                                <CardActions className="flex flex-col gap-1">
                                    <Button variant="contained" fullWidth  sx={{background: "black", padding: 1, width:"20rem"}}>Add To Cart</Button>
                                </CardActions> 
                            </CardContent>
                            </Card>
                            </div>
                        )
                    }) : null
                }
                
                
            </motion.div>
    )
}

export default AllProducts
