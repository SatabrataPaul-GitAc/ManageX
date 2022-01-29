const HTTPError = require('../HTTPError');
const models = require('../model/model')
const Users = models.userModel;
const Employees = models.employeeModel;

const delEmployee = (req,res) => {
    try {
        const email = req.header("email");
        
        if(!email) throw new HTTPError(400,"Header email not found");

        Users.findOne({email: email}, (err, user)=>{
            if(!user) res.status(400).json({statusCode: 400, message: "User not found"});

            if(user.isLoggedIn===false) res.status(400).json({statusCode: 400, message: "User not Logged in"});

            const id=req.query.employee_id;

            // console.log(id);

            Employees.findOne({employee_id: id}, (err,data)=>{
                // console.log(data);
                if(err){
                    console.log(err);
                }
                if(!data) res.status(400).json({statusCode: 400, message: "Employee doesn't exist"});
                data.remove();
                res.status(200).json({statusCode: 200, message: "Employee deleted successfully"});
            })
        })
    } catch (err) {
        return res.status(err.statusCode | 400).json({statusCode: err.statusCode, message: err.message});
    }
}

module.exports = delEmployee;