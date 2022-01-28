const models = require('../model/model.js');
const Users = models.userModel;
const Employees = models.employeeModel;
// console.log(typeof Users);
const bcrypt = require('bcryptjs');
const HTTPError = require('../HTTPError.js');

const loginUser = (req,res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        if(!email) throw new HTTPError(400, "Email not found");
        if(!password) throw new HTTPError(400, "Password not found");

        Users.findOne({email: email}, (err,user)=>{
            if(err){
                console.log(err);
            }
            if(!user) res.statusCode(400).json({statusCode: 400, message: "User not registered!"});
            const valid = bcrypt.compareSync(password,user.password);
            if(valid){
                user.isLoggedIn=true;
                user.save();
                res.statusCode(200).json({statusCode: 200, message: "User Logged in Successfully", user: user});
                
            }
        });
    }
    catch(err){
        res.statusCode(err.statuscode | 400).json({statusCode: 400, message: err.message});
    }
}

module.exports = loginUser;