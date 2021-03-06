import React, {useContext, useEffect, useState} from 'react'
// import { Outlet } from 'react-router'
import { Paper, Typography, CardActions, CardContent, Button, CardActionArea, Card, CardMedia, TextField, Divider, Container } from '@mui/material'
import {Link} from "react-router-dom"
import { GlobalContext } from '../contexts/GlobalContext'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import Navigation from '../layouts/Navigation'
import { useMediaQuery } from '@mui/material'
import AboutUs from '../components/AboutUs'
import { useParams } from 'react-router-dom'

const ProductCategory = () => {

    const {productList, setProductList, profileInfo} = useContext(GlobalContext)
    const [filteredList, setfilteredList] = useState('')
    const isMobile = useMediaQuery('(min-width:720px)')
    const { productType } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/Products")
            .then((res)=> {
                console.log('hello', res.data)
                setProductList(res.data)

            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    
    const newList = productList.filter((product ) => { 
        return product.productType.toLowerCase().includes(`${productType}`.toLowerCase());
   
   })

   function type(productType) {
       if(productType == 'Dogs') {
            return <li><Link to={'/Products/Cats'}><Typography variant="h6">Cats</Typography></Link></li>
          
       } else {
            return <li><Link to={'/Products/Dogs'}><Typography variant="h6">Dogs</Typography></Link></li>  
       }
   }
   
   
    return (
        <div className='pt-5'>
       { isMobile ?
        <div className="flex flex-row gap-7 w-11/12 my-5 mx-auto">
                <Paper 
                
                className="
                bg-black 
                w-3/12
                px-10
                py-5
                h-2/5
                ">
                    <label htmlFor="ul"><Typography variant="h5">{productType}</Typography></label>
                    <ul className="flex flex-col gap-3 mx-5 my-5">
                        
                        <li><Typography variant="h6" ><Link to="Collections">All Products</Link></Typography></li>
                        <li>{type(`${productType}`)}</li>
                        

                        
                    </ul>
                </Paper>
                <div className="grid grid-cols-2 gap-5">
                    {
                    newList? newList.map((product, i) => {
                        return(
                            <div key={product._id}>
                                <Card 
                                sx={{
                                    minWidth: 250,
                                    maxWidth: 400,
                                    paddingBottom: 3
                                    
                                }}
                                elevation = {5}
                                className="flex flex-col  items-center"
                                >
                                <CardActionArea >
                                <Link to={`/Product/${product._id}`}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.productPhoto}
                                    alt="modern-cat-furniture"
                                    sx={{}}
                                />
                                </Link>
                                </CardActionArea>
                                <CardContent className="flex flex-row justify-between items-center w-full">
                                    <div>
                                    <Typography variant="h5">
                                        {product.productName}
                                    </Typography>
                                    <Typography variant="h5">
                                        {product.productPrice}
                                    </Typography>
                                    </div>
                                </CardContent>
                                <CardActions className="flex flex-col w-11/12 gap-1">
                            <Button variant="contained" className='w-full'>Add To Cart</Button>
                            <Link to={`/user/${product.createdBy._id}`} className='w-full'><Button variant="contained" className='w-full'>More from {product.createdBy.username}</Button></Link>                        

                       </CardActions>
                                </Card>
                            </div>
                        )
                    }) : null
                    }
                </div>
        </div> : 
        <div className="flex flex-col gap-7 w-screen my-5 mx-auto ">
        <div className='flex flex-row justify-between items-end px-3'>
            <Typography variant='h5' textAlign={'center'} fontWeight={'bold'}>The Collection</Typography>
            
        </div>   
        <div className="flex flex-wrap gap-5 p-6 innerShadow">
            {
            newList? newList.map((product, i) => {
                return(
                    <div key={product._id}>
                        <Card 
                        sx={{
                            minWidth: 250
                        }}
                        elevation = {5}
                        className="flex flex-col items-center gap-2 pb-5"
                        >
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
                        <CardContent className="flex flex-col items-center w-full ">
                            <div className='flex flex-row w-full justify-between'>
                                <Typography variant="h5">
                                    {product.productName}
                                </Typography>
                                <Typography variant="h5">
                                    {product.productPrice}
                                </Typography>
                            </div>
                        </CardContent>
                       <CardActions className="flex flex-col w-11/12 gap-1">
                            <Button variant="contained" className='w-full'>Add To Cart</Button>
                            <Link to={`/user/${product.createdBy._id}`} className='w-full'><Button variant="contained" className='w-full'>More from {product.createdBy.username}</Button></Link>                        

                       </CardActions>
                        </Card>
                    </div>
                )
            }) : null
            }
        </div>
        </div>
        }
        <Container>
            
            <AboutUs />
        </Container>
        </div>
    )
}

export default ProductCategory
