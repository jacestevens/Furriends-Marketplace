const mongoose = require("mongoose");

//Set up Mongoose, a Library for MongoDB, our database and configure Mongo connection.

const dbName = "Woof";


//If a DB by this name does NOT exist before running the first time, then this will create it!
mongoose.connect(`mongodb://localhost/${dbName}`,{
      // Note: The useNewUrlParser and useUnifiedTopology are options we pass to handle deprecation warnings in our terminal.
    useNewUrlParser: true,
    useunifiedTopology: true
})
    .then(()=>{
        console.log("You are connected to the database called " + dbName)
    })
    .catch((err)=>{
        console.log("There was an error connection to the database called: " + dbName );
        console.log(err);
    })