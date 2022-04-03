import axios from 'axios'
import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { Paper, Typography, CardActions, CardContent, Button, CardActionArea, Card, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import DeleteButton from './DeleteButton'
import { useMediaQuery } from '@mui/material'

const AdminProducts = () => {

    const {userProducts, setUserProducts, userId, userInfo} = useContext(GlobalContext)
    const isMobile = useMediaQuery('(min-width:1024px)')

    useEffect(() => {

        axios.get(`http://localhost:8000/api/user/All-Products/${userId}`)
            .then((res) => {
                setUserProducts(res.data)
                console.log("yes", res.data)
                console.log(userId)
            })
            .catch((err) => console.log(err))
    }, [setUserProducts, userId])

    return (
        <div className={isMobile ?"flex flex-wrap gap-3" : "flex flex-wrap gap-2 justify-center items-center"}>

            
           
            {
                    userProducts? userProducts.map((product, i) => {
                        return(
                            <div key={product._id}>
                                <Card 
                                sx={{
                                    minWidth:350,
                                    maxWidth: 400
                                }}
                                elevation = {5}
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
                                <CardContent className={ isMobile ? "flex flex-row justify-around items-center h-auto" : "flex flex-col justify-evenly items-center h-auto"}>
                                    <div className={ isMobile ? 'w-full' : 'w-full flex flex-row justify-between '}>
                                        <Typography variant="h5">
                                            {product.productName}
                                        </Typography>
                                        <Typography variant="h5">
                                            {product.productPrice}
                                        </Typography>
                                    </div>
                                    <CardActions className="flex flex-col gap-1 items-center w-full">
                                        <Button variant="contained" fullWidth ><Link to={`edit-product/${product._id}`}>Edit</Link></Button>
                                        <DeleteButton productId = {product._id}/>
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

export default AdminProducts
