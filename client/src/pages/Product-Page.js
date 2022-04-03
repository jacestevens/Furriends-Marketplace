import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Curves.css";
import { useParams } from "react-router";
import {
  ImageList,
  ImageListItem,
  Typography,
  Paper,
  Divider,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ImageCarousel } from "../components/ImageCarousel";
import { useMediaQuery } from "@mui/material";
import { ProductImages } from "../components/ProductImages";

const OneProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const isMobile = useMediaQuery('(min-width:1024px)')

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/Product/${id}`)
      .then((res) => {
        setProduct(res.data);
        console.log("yes", res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log("yes", product.additionalPhotos);

  const reviewsCount = (max) => {
    const count = Math.floor(Math.random() * max) + 1;
    return count;
  };

  const productImages = [
    product.productPhoto,
    product.additionalPhotos,
    product.additionalPhotosTwo,
  ];

  return (
    <div className="relative top-6">
      <div className="flex flex-col items-center lg:items-start lg:flex-row gap-3 lg:gap-10 w-10/12 mb-20 md:my-10 mx-auto">
        {/* Image List */}
        <div className="w-7/12">
          {isMobile ? (
            <ProductImages product={product} />
          ) : (
            <ImageCarousel productImages={productImages} />
          )}
        </div>
        {/* Image List */}
        <div className="flex flex-col gap-6 w-screen lg:w-2/6  px-5">
          <div>
            <div className="md:my-5">
              <div className="flex flex-row justify-between items-center ">
                <Typography variant="h3">{product.productName}</Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 100,
                  }}
                >
                  {product.productPrice}
                </Typography>
              </div>
              <div className="flex flex-row justify-between w-full">
                <span>⭐️⭐️⭐️⭐️⭐️</span>{" "}
                <span className=" text-lg">{`${reviewsCount(
                  100
                )} Reviews`}</span>
              </div>
              <div className="mt-5">
                <Button variant="contained" fullWidth>
                  Add To Cart
                </Button>
                <Typography sx={{ marginTop: 2 }}>Get It By </Typography>
                <Stack spacing={2} className="mt-5">
                  <Typography variant="h4">Product Overview</Typography>
                  <Divider />
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    {product.productDescription}
                  </Typography>
                </Stack>
              </div>
            </div>
          </div>
          <div>
            {/* Accordians */}
            <Stack spacing={2} maxWidth={600}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5">Product Details</Typography>
                </AccordionSummary>
                <Divider variant="middle" />
                <AccordionDetails>
                  <p>{product.productDescription}</p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5">Caring & Cleaning</Typography>
                </AccordionSummary>
                <Divider variant="middle" />
                <AccordionDetails>
                  <p>{product.productDescription}</p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5">Shipping & Returns</Typography>
                </AccordionSummary>
                <Divider variant="middle" />
                <AccordionDetails>
                  <p>{product.productDescription}</p>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
