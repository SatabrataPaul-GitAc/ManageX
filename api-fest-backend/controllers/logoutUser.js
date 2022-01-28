const models = require('../model/model');
const Users = models.userModel;
const HTTPError = require('../HTTPError');

const logoutUser = (req,res) => {
    try{
        const email = req.header("email");
        if(!email) res.status(400).json({statusCode: 400, message: "User not logged in"});
        Users.findOne({email: email}, (err, user)=>{
            if(err) res.status(400).json({statusCode: 400, message: "Error fetching"});
            if(!user) res.status(400).json({statusCode: 400, message: "User not found"});
            if(user.isLoggedIn==false){
                res.status(400).json({statusCode: 400, message: "User not logged in"});
            }
            else{
                user.isLoggedIn=false;
                user.save();
                res.status(200).json({statusCode: 200, message: "User Logged out Successfully"});

            }
        });
    }
    catch(err){
        res.status(err.statuscode | 400).json({statusCode: 400, message: err.message});
    }
}

module.exports=logoutUser;