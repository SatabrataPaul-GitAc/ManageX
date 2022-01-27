const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userSchema = new Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	isLoggedIn: {
		type: String,
		default: false
	}	
});

const employeeSchema = new Schema({
	employee_id: {
		type: Number,
		required: true
	},
	employee_name: {
		type: String
	},
	employee_salary: {
		type: Number,
		required: true,
		default: 10000
	},
	employee_age: {
		type: Number
	}
});

const userModel = mongoose.model("userdatas",userSchema);
const employeeModel = mongoose.model("employeedatas", employeeSchema);

module.exports = {userModel, employeeModel};