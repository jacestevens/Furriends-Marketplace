require("dotenv").config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));


// configuring the server to accept and update cookies
app.use(cookieParser())

require('./config/mongoose.config');


require('./routes/product.routes')(app);
require('./routes/user.routes')(app);





app.listen(8000, ()=>console.log("You are connected at port 8000"));