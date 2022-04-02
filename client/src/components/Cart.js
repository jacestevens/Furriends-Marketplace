import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { Typography, CardActions, CardContent, Button, CardActionArea, Card, CardMedia,  Divider, Container, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { fontWeight } from '@mui/system'

const Cart = () => {
  const {cart, setCart} = useContext(GlobalContext)
  const cartTotal = (cart) => {
    
    let total = 0;
    
    for (let i = 0; i < cart.length; i++) {
      total = total + Number(cart[i].productPrice);
      console.log(total)
    }
    console.log(total)
    return total

  }

  return (
    <div className='p-10'>
      <Container>

     <div className='flex flex-wrap'>
       
        {
          cart ? cart.map((items) => {return(
            <div>

              <Card key={items._id} 
              sx={{
                  minWidth: "15rem",
                  maxWidth:375,
                  marginX: 2,
                  marginBottom:1,
              }}
              elevation= "4">
              <CardActionArea>
              <Link to={`/Product/${items._id}`}>
              <CardMedia
                  component="img"
                  image={items.productPhoto}
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
                      {items.productName}
                  </Typography>
                  <Typography variant="p">
                     ${items.productPrice}
                  </Typography>
                  </div>
                  <CardActions className="flex flex-col gap-1">
                  </CardActions> 
              </CardContent>
              </Card>
              
            </div>
            
          )
          }): <p>Your Cart is Empty </p>
        }
      </div>
        <Divider className='pb-5'>
          {
            
                <Typography variant="h5" sx={{fontWeight: 'bold'}}>Total: ${cartTotal(cart)}</Typography>
          }
        </Divider>
        <Button fullWidth variant='contained'>Checkout</Button>
      </Container>
    </div>
  )
}

export default Cart