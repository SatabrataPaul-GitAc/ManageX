const models = require('../model/model');
const Users = models.userModel;
const Employees = models.employeeModel;
const HTTPError = require('../HTTPError');

const addEmployee = (req,res) => {
    try {
        const email = req.header("email");

        if(!email) throw new HTTPError(400, "Header email not found");


        const empid = req.body.employee_id;
        const name = req.body.employee_name;
        const salary = req.body.employee_salary;
        const age = req.body.employee_age;
        if(!empid) throw new HTTPError(400, "id not found");
        if(!salary) throw new HTTPError(400, "salary not found");
        // console.log(id);
        // console.log(salary);


        Users.findOne({email: email}, (err, user)=>{
            if(!user) res.status(400).json({statusCode: 400, message: "User not found!"});

            if(user.isLoggedIn===false) res.status(400).json({statusCode: 400, message: "User not Logged in!"});
            Employees.findOne({employee_id: empid}, (err,employee)=>{
                if(employee) res.status(400).json({statusCode: 400, message: "Employee already exits"});
                else{
                    const newEmployee = new Employees({
                        employee_id: empid,
                        employee_name: name,
                        employee_salary: salary,
                        employee_age: age
                    });

                    newEmployee.save((err)=>{
                        if(err){
                            // console.log(err);
                            res.status(400).json({statusCode: 400, message: err});
                        }
                        else{
                            res.status(200).json({statusCode: 200, message: "Employee Data created successfully"});
                        }
                    })
                }
            })
        })
    } catch (err) {
        return res.status(err.statusCode | 400).json({statusCode: err.statusCode, message: err.message});
    }
}

module.exports = addEmployee;