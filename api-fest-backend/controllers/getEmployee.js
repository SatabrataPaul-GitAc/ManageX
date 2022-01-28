const models = require('../model/model.js');
const Users = models.userModel;
const Employees = models.employeeModel;
// console.log(Employees);
const HTTPError = require('../HTTPError.js');


const getEmployee = (req,res) => {
    try{
        const email=req.header("email");
        if(!email) throw new HTTPError(400, "Header email not found");
        Users.findOne({email: email}, (err,user)=>{
            // console.log(user);
            if(err) res.status(400).json({statusCode: 200, message: "User not found! Please register!"});
            if(user.isLoggedIn===false) res.status(400).json({statusCode: 200, message: "User not Logged in!"});
            else{
            Employees.find({}, (err,data)=>{
                // console.log(typeof data);
                if(err) res.status(400).json({statusCode: 400, message: "Employee data not fetched"});
                res.status(200).json({statusCode: 200, message: "Employee Data Fetched successfully", data: data});
            })}
        })
    }
    catch(err){
        return res.status(err.statusCode | 400).json({statusCode: 400, message: err.message});
    }
}

module.exports = getEmployee;