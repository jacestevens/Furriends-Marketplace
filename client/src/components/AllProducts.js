import React from 'react'
import { useEffect, useContext } from 'react'
import axios from 'axios'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';


const AllProducts = () => {

    const {productList, setProductList} = useContext(GlobalContext)
    

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
    
            <div className="grid grid-flow-col">
                {
                    productList? productList.map((product, i) => {
                        return(
                            <div >
                            
                            <Card key={product._id} 
                            sx={{
                                maxWidth: 375,
                                marginX: 2
                            }}
                            elevation= "4">
                            <CardActionArea>
                            <Link to={`/Product/${product._id}`}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.productPhoto}
                                alt="modern-cat-furniture"
                            />
                            </Link>
                            </CardActionArea>
                            <CardContent className="flex flex-row justify-around items-center h-auto">
                                <div>
                                <Typography variant="h5">
                                    {product.productName}
                                </Typography>
                                <Typography variant="h5">
                                    {product.productPrice}
                                </Typography>
                                </div>
                                <CardActions className="flex flex-col gap-1">
                                    <Button variant="contained" sx={{background: "black", width: 160, padding: 1}}>Add To Cart</Button>
                                </CardActions> 
                            </CardContent>
                            </Card>
                            </div>
                        )
                    }) : null
                }
                
            </div>
    )
}

export default AllProducts
