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
            if(!user) res.status(400).json({status: "error", message: "User not registered!"});
            const valid = bcrypt.compareSync(password,user.password);
            if(valid){
                user.isLoggedIn=true;
                user.save();
                res.status(200).json({status: 200, message: "User Logged in Successfully"});
                
            }
        });
    }
    catch(err){
        console.log(err);
    }
}

module.exports = loginUser;