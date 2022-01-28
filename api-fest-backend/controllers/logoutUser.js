const models = require('../model/model');
const Users = models.userModel;
const HTTPError = require('../HTTPError');

const logoutUser = (req,res) => {
    try{
        const email = req.header("email");
        if(!email) res.statusCode(400).json({statusCode: 400, message: "User not logged in"});
        Users.findOne({email: email}, (err, user)=>{
            if(err) res.statusCode(400).json({statusCode: 400, message: "Error fetching"});
            if(!user) res.statusCode(400).json({statusCode: 400, message: "User not found"});
            if(user.isLoggedIn==false){
                res.statusCode(400).json({statusCode: 400, message: "User not logged in"});
            }
            else{
                user.isLoggedIn=false;
                user.save();
                res.statusCode(200).json({statusCode: 200, message: "User Logged out Successfully"});

            }
        });
    }
    catch(err){
        res.statusCode(err.statuscode | 400).json({statusCode: 400, message: err.message});
    }
}

module.exports=logoutUser;