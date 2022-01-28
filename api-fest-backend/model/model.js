const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userSchema = new Schema({
	name: {
		type: String,
		default: "User"
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
		type: Boolean,
		default: false
	}	
});

const employeeSchema = new Schema({
	employee_id: {
		type: String,
		required: true
	},
	employee_name: {
		type: String
	},
	employee_salary: {
		type: String,
		required: true,
		default: 10000
	},
	employee_age: {
		type: String
	}
});

const userModel = mongoose.model("userdata",userSchema);
const employeeModel = mongoose.model("employeedata", employeeSchema);

module.exports = {userModel, employeeModel};