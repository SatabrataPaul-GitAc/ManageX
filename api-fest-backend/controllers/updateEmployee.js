const HTTPError = require('../HTTPError');
const models = require('../model/model');
const Users = models.userModel;
const Employees = models.employeeModel;


const updateEmployee = (req,res) => {
    try {
        const email = req.header("email");
        if(!email) throw new HTTPError(400, "Header Email not found");
        Users.findOne({email:email}, (err,user)=>{
            if(!user) res.status(400).json({statusCode:400, message: "User Not Found"});
            if(user.isLoggedIn===false) res.status(400).json({statusCode:400, message: "User Not Logged In"});
            else{
                const id = req.query.employee_id;
                Employees.findOne({employee_id: id}, (err,data)=>{
                    if(err){
                        console.log(err);
                    }

                    if(!data) res.status(400).json({statusCode: 400, message: "Employee does not exist"});
                    
                    // console.log(data);
                    const nemployee_name = req.body.employee_name;
                    const nemployee_salary = req.body.employee_salary;
                    const nemployee_age = req.body.employee_age;

                    if(nemployee_name){
                        data.employee_name=nemployee_name
                    }
                    if(nemployee_salary){
                        data.employee_salary=nemployee_salary
                    }
                    if(nemployee_age){
                        data.employee_age=nemployee_age
                    }

                    data.save();
                    res.status(200).json({statusCode: 200, message: "Employee Data Changed Successfully"});
                })
            }
        })
    } catch (err) {
        res.status(err.statuscode | 400).json({statusCode: 400, message: err.message});
    }
}

module.exports = updateEmployee;