import React from "react";
import {
  Typography,
  Button,
  Paper,
  Divider,
  Box,
  Container,
} from "@mui/material";
import BestSellers from "../components/BestSellers";
import BannerTwo from "../components/Banner-v2";
import Hero from "../components/Hero";
import { useMediaQuery } from "@mui/material";
import AboutUs from "../components/AboutUs";
import FeaturedProduct from "../components/FeaturedProduct";
import homepicture from "../assets/WO_VM_Studio_TreatPouch_Black_Campaign_05_2x3_Web_800x1000_crop_center.jpg";
import { Link } from "react-router-dom";


const Home = () => {
  const isMobile = useMediaQuery('(min-width:1024px)')

  return (
    <Box>
      <Hero />
      <div className=" md:py-10">
        <div>
          <div
            elevation={3}
            className={
              isMobile
                ? "flex flex-row gap-2 w-full mx-auto my-5 p-10 items-center"
                : "flex flex-col items-center gap-2 text-center p-5 w-11/12 my-0 mx-auto"
            }
          >
            <div className="w-screen md:w-6/12 flex flex-col gap-2 p-5 md:p-10">
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Find Your Furball's Perfect... Thing
              </Typography>
              <Divider class="my-2" />
              <Typography variant="h6" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit
              </Typography>
              <Link to='/Collections'><Button variant="contained" sx={{width: '100%'}}>View The Collection</Button></Link>
            </div>{
              isMobile ?
            <Paper class="w-6/12 h-full home_picture">
              <img src={homepicture} alt="" />
            </Paper>: null}
          </div>
        </div>
        <div className="w-full">

          <BestSellers />
        </div>
        <Container>

        
        <AboutUs />
        <FeaturedProduct />
        </Container>
      </div>
    </Box>
  );
};

export default Home;
