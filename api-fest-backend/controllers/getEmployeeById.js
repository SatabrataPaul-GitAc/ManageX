const models = require('../model/model.js');
const Users = models.userModel;
const Employees = models.employeeModel;
// console.log(Employees);
const HTTPError = require('../HTTPError.js');


const getEmployeeById = (req,res) => {
    try{
        const email=req.header("email");
        if(!email) throw new HTTPError(400, "Header email not found");
        Users.findOne({email: email}, (err,user)=>{
            if(!user) res.status(400).json({statusCode: 400, message: "User not found! Please register!"});

            // console.log(user);

            if(user.isLoggedIn===false) res.status(400).json({statusCode: 400, message: "User not Logged in!"});
            // console.log(req.query.id);
            const id=req.query.employee_id;
            
            // console.log(id);
            Employees.findOne({employee_id: id},(err,data)=>{
                if(err){
                    console.log(err);
                }
               
                if(!data) res.status(400).json({statusCode: 400, message: "Employee does not exist"});

                res.status(200).json({statusCode: 200, message: "Employee Data Fetched successfully", data: data});
            })
        })
    }
    catch(err){
        return res.status(err.statusCode | 400).json({statusCode: err.statusCode, message: err.message});
    }
}

module.exports = getEmployeeById;