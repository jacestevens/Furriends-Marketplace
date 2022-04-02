import "../styles/Hero.css";
import React, { useContext } from "react";
import { Typography, Button, Paper, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import { useMediaQuery } from "@mui/material";

const Hero = () => {
  const { userId } = useContext(GlobalContext);
  const isMobile = useMediaQuery("(min-width:720px)");

  return (
    <div
      className={isMobile ? "hero__background flex" : "hero__mobile__bg flex"}
    >
      {isMobile ? (
        <div className=" w-screen flex justify-end items-center">
          <div className="w-6/12 h-3/6 pr-28 flex flex-col gap-10">
            <div>
              <Typography variant="h2" sx={{ fontWeight: 600 }}>
                Furriend's Marketplace
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "1.5rem",
                }}
              >
                The Marketplace Furr All Your Fur-baby's Needs
              </Typography>
            </div>
            <Link to="/Collections" className="w-full"><Button variant="contained" fullWidth size="large">
              <span className="font-extrabold my-1 text-xl">Shop Now</span>
            </Button></Link>
          </div>
        </div>
      ) : (
        <div className="hero-background-overlay w-screen flex flex-col justify-end items-center">
          <div className="flex flex-col gap-2 w-11/12 mb-10">
            <div className="text-center">
              <Typography variant="h4" sx={{ fontWeight: 600, color: "white" }}>
                Furriend's Marketplace
              </Typography>
              <Typography
                variant="p"
                sx={{ color: "white", fontWeight: "bold", color: "white" }}
              >
                The Marketplace Furr All Your Fur-baby's Needs
              </Typography>
            </div>
            <Link to={'/Collections'}>
            <Button variant="contained" size="large" fullWidth>
              <span className="font-extrabold">Shop Now</span>
            </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Section For Buttons */}
    </div>
  );
};
// Just missing animation
export default Hero;
