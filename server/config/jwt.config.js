const jwt = require('jsonwebtoken');

module.exports = {

    authenticate(req, res, next){
        jwt.verify(
            req.cookies.userToken,
            process.env.JWT_SECRET,
            

            (err, payload) => {
                if(err){
                    res.status(401).json({verified: false})
                    console.log("there's an error in the verification jwt")
                }
                else{
                    console.log(payload);
                    next();
                }
            }
        );
    }
}