import React, { useContext, useEffect, useState } from "react";
import {
  Paper,
  TextField,
  Box,
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Drawer,
  
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";
import { GlobalContext } from "../contexts/GlobalContext";
import Logo from "../assets/Asset-1-01.png";
import { useMediaQuery } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navigation = () => {
  const { userInfo, setuserId, userId, cart, setCartItems, cartItems } = useContext(GlobalContext);
  const isMobile = useMediaQuery("(min-width:600px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setuserId(localStorage.getItem("userId"));
    
  }, []);

  const cartCount = (cart) => {
    
    if (cart.length < 0) {
      return false
    }

  }


  

  return (
    <div>
      {isMobile ? (
        <div className="flex flex-row w-full mx-auto ">
          <Paper elevation={2} className="w-full">
            <div className="flex flex-row justify-around items-center">
              <div>
                <Link to="/">
                  <img
                    src={Logo}
                    alt=""
                    style={{ height: 100, marginBottom: 2 }}
                  />
                </Link>
              </div>
              <div className="flex justify-evenly w-4/12">
                <Link to="/Collections">All Products</Link>
                <Link to="/Products/Dogs">Dog Essentials</Link>
                <Link to="/Products/Cats">Cat Essentials</Link>
              </div>
              <div className="flex flex-row">
                {userId ? (
                  <div className="flex flex-row gap-3 ">
                    <Logout />
                    <Button variant="contained" sx={{paddingX: 5}}>
                      <Link to={`/admin`}>Profile</Link>
                    </Button>
                  </div>
                ) : (
                  
                  <Button variant="contained">
                    <Link to="/login">Login</Link>
                  </Button>

                )}
                {
                  cartCount != false ?
                  <Link to='/cart'><Button variant="contained" startIcon={<ShoppingCartIcon />} sx={{marginLeft: 1}}>Cart {cart.length}</Button></Link> : 
                  <Button variant="contained" disabled startIcon={<ShoppingCartIcon />} sx={{marginLeft: 1}}>Cart {cart.length}</Button>
                }
              </div>
            </div>
          </Paper>
        </div>
      ) : (
        <div>
          <Paper position="static" >
            <Toolbar className="flex flex-row justify-around">
              <IconButton
                id="basic-button"
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {" "}
                <MenuIcon />
              </IconButton>
              <Drawer
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}

              >
                <Box className="mx-10">
                  <Link to="/">
                    <MenuItem onClick={handleClose}>
                      <img
                        src={Logo}
                        alt=""
                        style={{ height: 100, objectFit: "cover" }}
                      />
                    </MenuItem>
                  </Link>
                  <MenuItem onClick={handleClose}>
                    <Link to="/Collections">
                      <Typography variant="h6">All Products</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/Products/Dogs">
                      <Typography variant="h6">Dog Essentials</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/Products/Cats">
                      <Typography variant="h6">Cat Essentials</Typography>
                    </Link>
                  </MenuItem>
                  {userId ? (
                    <div className="flex flex-row justify-center items-center gap-1 w-full">
                        <MenuItem onClick={handleClose}>
                    <Link to="/admin">
                      <Typography variant="h6">Admin</Typography>
                    </Link>
                  </MenuItem>
                      <Logout />
                    </div>
                  ) : (
                    <div className="flex flex-row items-center gap-1">
                    <Button variant="contained">
                      <Link to="/login" className="text-white">
                        Login
                      </Link>
                    </Button>
                    <Button variant="contained">
                    <Link to="/register" className="text-white">
                      Start Selling
                    </Link>
                  </Button>
                  </div>
                  )}
                </Box>
              </Drawer>

              <Link to="/">
                    <MenuItem onClick={handleClose}>
                      <img
                        src={Logo}
                        alt=""
                        style={{ height: 50, objectFit: "cover" }}
                      />
                    </MenuItem>
                  </Link>
              {userId ? (
                <div className="flex flex-row items-center gap-1">
                  <Logout />
                </div>
              ) : (
                <Button variant="contained">
                  <Link to="/login" className="text-white">
                    Login
                  </Link>
                </Button>
              )}
            </Toolbar>
          </Paper>
        </div>
      )}
    </div>
  );
};

export default Navigation;
