const models = require('../model/model.js');
const Users = models.userModel;
const bcrypt = require('bcryptjs');
const HTTPError = require('../HTTPError.js');

const hashPassword = function generateHash(password){
    try{
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password,salt);
        return hashedPassword;
    }
    catch(err){
        console.log(err);
    }
}

const createUser = (req,res) => {
    try{
        const name = req.body.name;
        const email = req.body.email;
        let password = req.body.password;

        if(!email) throw new HTTPError(400, "Email not found");
        if(!password) throw new HTTPError(400, "Password not found");

        Users.findOne({email: email}, (err,user)=>{
            if(user) res.status(400).json({statusCode: 400,message: "User already exists"});
            else{
                password=hashPassword(password);
                
                const newUser = new Users({
                    name,
                    email,
                    password
                });

                newUser.save((err)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.status(200).json({statusCode: 200, message: "User Registered Successfully", userEmail: newUser.email});
                    }
                });
            }
        });
    }
    catch(err){
        return res.status(err.statusCode | 400).json({statusCode: err.statusCode, message: err.message});
    }
};

module.exports = createUser;