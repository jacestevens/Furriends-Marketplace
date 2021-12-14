import axios from 'axios'
import React, {useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { useParams } from 'react-router-dom'
import { Paper, Typography, CardActions, CardContent, Button, CardActionArea, Card, CardMedia, Avatar } from '@mui/material'
import Navigation from '../components/Navigation'


const UserProfiles = () => {

    const {id} = useParams();
    const {profileInfo, setProfileInfo} = useContext(GlobalContext)
    const [profileUsername, setprofileUsername] = useState("")
    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/All-Products/${id}`)
            .then((res) => {
                setProfileInfo(res.data)
                console.log(res.data)
                setprofileUsername(res.data[0].createdBy.username)
            })
            .catch((err) => console.log(err))
    }, [id, setProfileInfo])
    const avatarInitials = profileUsername.charAt(0)
    
    return (
        <div className='pt-5'>
        <Navigation />

        <div className="flex flex-row gap-5 mx-auto my-5 w-11/12">
           <div className="flex flex-col gap-5 w-3/12">
                <Paper className="flex flex-col gap-5 items-center p-10 ">
                    <Avatar sx={{ bgcolor: "black", height: 200, width: 200 }}>{avatarInitials}</Avatar>
                    <Typography variant="h4">{profileUsername}</Typography>
                </Paper>
                <Button variant="contained"> Message Seller </Button>
            </div>
                <Paper className=" flex flex-wrap gap-5 p-10">
                {
                profileInfo? profileInfo.map((product, i) => {
                    return(
                                <Card 
                                sx={{
                                    maxWidth: 500
                                }}
                                elevation = {5}
                                className="flex flex-col p-5 items-center"
                                key={product._id}
                                >
                                <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.productPhoto}
                                    alt="modern-cat-furniture"
                                    sx={{borderRadius: 3}}
                                />
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
                                </Card>
                    )
                }) : null
            }
                </Paper>
           </div>
           </div>
           
      
    )
}

export default UserProfiles
