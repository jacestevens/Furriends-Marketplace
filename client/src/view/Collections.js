import React, {useContext, useEffect, useState} from 'react'
// import { Outlet } from 'react-router'
import { Paper, Typography, CardActions, CardContent, Button, CardActionArea, Card, CardMedia, TextField } from '@mui/material'
import {Link} from "react-router-dom"
import { GlobalContext } from '../contexts/GlobalContext'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import Navigation from '../components/Navigation'
import { useMediaQuery } from '@mui/material'

const Collections = () => {

    const {productList, setProductList, profileInfo} = useContext(GlobalContext)
    const [filteredList, setfilteredList] = useState('')
    const isMobile = useMediaQuery('(min-width:600px)')

    useEffect(() => {
        axios.get("http://localhost:8000/api/Products")
            .then((res)=> {
                console.log('hello', res.data)
                setProductList(res.data)
                console.log(profileInfo)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    
    const onSearchChange = (e) =>{

        setfilteredList(e.target.value)
        
    }
    

   let newList = productList.filter((product ) => { 
    return product.productName.toLowerCase().includes(filteredList.toLowerCase());
   
   })
   
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
                    <label htmlFor="ul"><Typography variant="h5">Collection</Typography></label>
                    <ul className="flex flex-col gap-3 mx-5 my-5">
                        
                        <li><Typography variant="h6" ><Link to="All-Products">All Products</Link></Typography></li>
                        <li><Typography variant="h6">Dogs</Typography></li>
                        <li><Typography variant="h6">Cats</Typography></li>
                        <li><Typography variant="h6"><Link to="Testing">Other</Link></Typography></li>
                        <SearchBar  onSearchChange={onSearchChange} />
                    </ul>
                </Paper>
                <div className="grid grid-cols-2 gap-5">
                    {
                    newList? newList.map((product, i) => {
                        return(
                            <div key={product._id}>
                                <Card 
                                sx={{
                                    maxWidth: 500
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
                                    sx={{borderRadius: 3}}
                                />
                                </Link>
                                </CardActionArea>
                                <CardContent className="flex flex-row justify-between  items-center w-full ">
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
                                <Link to={`/user/${product.createdBy._id}`}><Button variant="contained" sx={{background: "black", width: 450, padding: 1, marginX: "auto"}}>More from {product.createdBy.username}</Button></Link>
                                </Card>
                            </div>
                        )
                    }) : null
                    }
                </div>
        </div> : 
        <div className="flex flex-col gap-7 w-11/12 my-5 mx-auto">
        <SearchBar  onSearchChange={onSearchChange} />
        <div className="flex flex-wrap gap-5">
            {
            newList? newList.map((product, i) => {
                return(
                    <div key={product._id}>
                        <Card 
                        sx={{
                            maxWidth: 300
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
                       
                            <Button variant="outlined" className='w-4/5'>Add To Cart</Button>
                            <Link to={`/user/${product.createdBy._id}`}><Button variant="outlined"  sx={{ padding: 1, marginX: "auto"}}>More from {product.createdBy.username}</Button></Link>                        
                        </Card>
                    </div>
                )
            }) : null
            }
        </div>
</div>
        }
        </div>
    )
}

export default Collections
