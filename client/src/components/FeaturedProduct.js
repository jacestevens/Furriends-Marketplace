import { useMediaQuery } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Paper, Divider,  Typography,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Card, CardMedia, CardContent,  CardActions, CardActionArea,
    Button, } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { borderBottom } from "@mui/system";

const FeaturedProduct = () => {
  const [FeaturedProduct, setFeaturedProduct] = useState({});
  const isMobile = useMediaQuery("(min-width:720px)");

  useEffect(() => {
    axios
        .get("http://localhost:8000/api/Products/")
        .then((res) => {
            setFeaturedProduct(res.data[0]);
            console.log("feature", res.data);
        })
        .catch((err) => console.log(err));
    }, [])
  
  return (
  
  <div className="my-4 w-11/12 md: w-full">
      {
          isMobile ?
          <Paper>
          <div className="flex flex-col md:flex-row p-5 justify-center items-center">
              <div className="w-10/12 mb-4 md:w-4/12">
                  {/* productphotos */}
                  <img src={FeaturedProduct.productPhoto} alt={FeaturedProduct.productName}  />
              </div>
              <Stack spacing={2} className="mx-5 w-7/12">
                        <Typography variant="h4">Featured Product</Typography>
                        <div className="flex flex-col gap-2">
                        <Typography variant="h4" sx={{fontWeight:'bold'}}>{FeaturedProduct.productName}</Typography>
                        
                        <Divider  />
                        <p>{FeaturedProduct.productDescription}</p>
                        </div> 
                    <Link to={`/Product/${FeaturedProduct._id}`} className="w-full"><Button variant="contained" fullWidth>Shop Now</Button></Link>
              </Stack>
             
          </div>
          
      </Paper>
      :
      <div >

        <Typography variant="h4" sx={{textAlign: "center", marginY: 2, fontWeight:'bold'}}>Featured Product</Typography>
        <Card key={FeaturedProduct._id} 
        sx={{
            
            marginX: 2,
            marginBottom:1,
        }}
        elevation= "4">
        <CardActionArea>
        <Link to={`/Product/${FeaturedProduct._id}`}>
        <CardMedia
            component="img"
            height="200"
            image={FeaturedProduct.productPhoto}
            alt="modern-pet-furniture"
        />
        </Link>
        </CardActionArea>
        <CardContent className="flex flex-col justify-around items-center h-auto">
            <div className='flex flex-col justify-center items-center w-full gap-2'>
            <Typography variant="h4" sx={{fontWeight: 'bold'}}>
                {FeaturedProduct.productName}
            </Typography>
            
            </div>
            <CardActions className="flex flex-col gap-1">
                <Button variant="contained" fullWidth  sx={{background: "black", padding: 1, width:"20rem"}}>View Product</Button>
            </CardActions> 
        </CardContent>
        </Card>
      </div>
      }
  </div>
  )
};

export default FeaturedProduct;
