var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require("mongoose");
//var JSAlert = require("js-alert");
mongoose.connect('mongodb://localhost/db_spm');

var project = mongoose.model('project', mongoose.Schema({
	projectId : String,
	projectTitle : String,
	forntEndTeam : Number,
	BackEndTeam : Number,
	hours : Number,
	days : Number,
	frontEndSkills : [],
	BackEndSkills : [],
	projectDes:String
}));

var employee = mongoose.model('employee', mongoose.Schema({
	//essn : String,
	emp_name : String,
	//gender : String,
	//designation : String,
	//core_type : String,
	//frontEndSkills :[],
	//BackEndSkills : [],
	contact:String,
	email:String,
	lan : String,
	lat : String
}));

var assignment = mongoose.model('assignment', mongoose.Schema({
	p_id : String,
	emp_id : String
}));



app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());


app.post('/api/project',function(req,res){

 var FSkills = [];
 var BSkills = [];

 function setFrontSkill(flag, skill){
 	if(flag == true)
 		FSkills.push(skill)
 }

 function setBackSkill(flag, skill){
	if(flag == true)
		BSkills.push(skill)
 }

 //Setting frontEndSkills
 setFrontSkill(req.body.HTML, "HTML");
 setFrontSkill(req.body.CSS, "CSS");
 setFrontSkill(req.body.BootStrap, "BootStrap");
 setFrontSkill(req.body.Angular, "Angular");
 setFrontSkill(req.body.React, "React");

 //Setting BackEnd Skills
 setBackSkill(req.body.java, "Java");
 setBackSkill(req.body.Python, "Python");
 setBackSkill(req.body.NodeJs, "NodeJs");
 setBackSkill(req.body.MongoDB, "MongoDB");
 setBackSkill(req.body.MYSQL, "MYSQL");
 setBackSkill(req.body.SQL_Lite, "SQL_Lite");

//console.log(BSkills);

	var query = {
		projectId : req.body.projectId,
		projectTitle : req.body.projectTitle,
		forntEndTeam : req.body.forntEndTeam,
		BackEndTeam : req.body.BackEndTeam,
		hours : req.body.hours,
		days : req.body.days,
		frontEndSkills : FSkills,
		BackEndSkills : BSkills,
		projectDes:req.body.projectDes
	}

	project.create(query, function(err,pro){						//working fine
		//console.log(req.body);
		if(err)
			res.send(err)
		res.json(pro)
	});
});


app.put('/api/project/:id',function(req,res){

 var FSkills = [];
 var BSkills = [];

 function setFrontSkill(flag, skill){
 	if(flag == true)
 		FSkills.push(skill)
 }

 function setBackSkill(flag, skill){
	if(flag == true)
		BSkills.push(skill)
 }

 //Setting frontEndSkills
 setFrontSkill(req.body.HTML, "HTML");
 setFrontSkill(req.body.CSS, "CSS");
 setFrontSkill(req.body.BootStrap, "BootStrap");
 setFrontSkill(req.body.Angular, "Angular");
 setFrontSkill(req.body.React, "React");

 //Setting BackEnd Skills
 setBackSkill(req.body.java, "Java");
 setBackSkill(req.body.Python, "Python");
 setBackSkill(req.body.NodeJs, "NodeJs");
 setBackSkill(req.body.MongoDB, "MongoDB");
 setBackSkill(req.body.MYSQL, "MYSQL");
 setBackSkill(req.body.SQL_Lite, "SQL_Lite");

//console.log(BSkills);

	var query = {
		projectId : req.body.projectId,
		projectTitle : req.body.projectTitle,
		forntEndTeam : req.body.forntEndTeam,
		BackEndTeam : req.body.BackEndTeam,
		hours : req.body.hours,
		days : req.body.days,
		frontEndSkills : FSkills,
		BackEndSkills : BSkills,
		projectDes:req.body.projectDes
	}

	project.findOneAndUpdate({ _id:req.params.id}, query, function(err,pro){						//working fine
		//console.log(req.body);
		if(err)
			res.send(err)
		res.json(pro)
	});
});



app.get('/api/project', function(req, res){
	project.find(function(err, pro){
		if(err)
			res.send(err);
		res.json(pro);
	});
});


app.get('/api/project/:id', function(req, res){
	project.findOne({_id:req.params.id}, function(err, pro){
		if(err)
			res.send(err);
		res.json(pro);
	});
});

app.delete('/api/project/:id', function(req, res){
	project.findOneAndRemove({_id:req.params.id}, function(err, pro){
		if(err)
			res.send(err);
	});

	try{
		assignment.Remove({_id:req.params.id}, function(err, pro){
			if(err)
				res.send(err);
		});
	}
	catch(e){

	}

});



app.get('/api/employee', function(req, res){
	employee.find(function(err, employee){
		if(err)
			res.send(err);
		res.json(employee);
	});
});


app.post('/api/employee',function(req,res){

	var FSkills = [];
	var BSkills = [];

	function setFrontSkill(flag, skill){
	 if(flag == true)
		 FSkills.push(skill)
	}

	function setBackSkill(flag, skill){
	 if(flag == true)
		 BSkills.push(skill)
	}

	//Setting frontEndSkills
	setFrontSkill(req.body.HTML, "HTML");
	setFrontSkill(req.body.CSS, "CSS");
	setFrontSkill(req.body.BootStrap, "BootStrap");
	setFrontSkill(req.body.Angular, "Angular");
	setFrontSkill(req.body.React, "React");

	//Setting BackEnd Skills
	setBackSkill(req.body.java, "Java");
	setBackSkill(req.body.Python, "Python");
	setBackSkill(req.body.NodeJs, "NodeJs");
	setBackSkill(req.body.MongoDB, "MongoDB");
	setBackSkill(req.body.MYSQL, "MYSQL");
	setBackSkill(req.body.SQL_Lite, "SQL_Lite");


		var query = {
			//essn : req.body.essn,
			emp_name : req.body.emp_name,
			//gender : req.body.gender,
			//designation : req.body.designation,
			//core_type : req.body.core_type,
			//frontEndSkills : FSkills,
			//BackEndSkills : BSkills,
			contact:req.body.contact,
			email:req.body.email,
			lan : req.body.lan,
			lat : req.body.lat
		}

console.log(query);


	employee.create(query, function(err,pro){					//working fine
		//console.log(req.body);
		if(err)
			res.send(err)
		res.json(pro)
		});
});


app.get('/api/employee/:id', function(req, res){
	employee.findOne({_id:req.params.id}, function(err, emp){
		if(err)
			res.send(err);
		res.json(emp);
	});
});

app.delete('/api/employee/:id', function(req, res){
	employee.findOneAndRemove({_id:req.params.id}, function(err, emp){
		if(err)
			res.send(err);
	});
	try{
		assignment.Remove({emp_id:req.params.id}, function(err, assign){
			if(err)
				res.send(err);

			});
	}
	catch(e){

	}

});

app.put('/api/employee/:id', function(req, res){
	var FSkills = [];
	var BSkills = [];

	function setFrontSkill(flag, skill){
	 if(flag == true)
		 FSkills.push(skill)
	}

	function setBackSkill(flag, skill){
	 if(flag == true)
		 BSkills.push(skill)
	}

	//Setting frontEndSkills
	setFrontSkill(req.body.HTML, "HTML");
	setFrontSkill(req.body.CSS, "CSS");
	setFrontSkill(req.body.BootStrap, "BootStrap");
	setFrontSkill(req.body.Angular, "Angular");
	setFrontSkill(req.body.React, "React");

	//Setting BackEnd Skills
	setBackSkill(req.body.java, "Java");
	setBackSkill(req.body.Python, "Python");
	setBackSkill(req.body.NodeJs, "NodeJs");
	setBackSkill(req.body.MongoDB, "MongoDB");
	setBackSkill(req.body.MYSQL, "MYSQL");
	setBackSkill(req.body.SQL_Lite, "SQL_Lite");


		var query = {
			essn : req.body.essn,
			emp_name : req.body.emp_name,
			gender : req.body.gender,
			designation : req.body.designation,
			core_type : req.body.core_type,
			frontEndSkills : FSkills,
			BackEndSkills : BSkills,
			contact:req.body.contact,
			email:req.body.email
		}

console.log(query);

	employee.findOneAndUpdate({_id:req.params.id}, query, function(err,emp){					//working fine
		//console.log(req.body);
		if(err)
			res.send(err)
		res.json(emp)
		});
});


//getting fron-end and BackEnd Developers data

app.get('/api/front-endEmp/:id', function(req, res){
{$and:[{emp_id:req.params.emp_id},{p_id:req.params.id}]}

	employee.find({core_type:"Front-end Designer"}, function(err, employee){
		if(err)
			res.send(err);
		res.json(employee);
	});
});

app.get('/api/Back-endEmp/:id', function(req, res){

employee.find({core_type:"Back-end Developer"}, function(err, employee){

		if(err)
			res.send(err);
		res.json(employee);
	});
});

//assigning project to employee

app.post('/api/assignBack/:id/:emp_id', function(req, res){

	var query = {
		emp_id:req.params.emp_id,
		p_id:req.params.id
	}
	//console.log(query);

	assignment.count({emp_id:req.params.emp_id}, function(err, count){
		console.log(count);

		if(count == 3){
			console.log("Employee is already handling 3 Active projects");
			res.json(0);
		}
	else{

			assignment.count({$and:[{emp_id:req.params.emp_id},{p_id:req.params.id}]}, function(err, count){
				console.log(count);

				if(count == 0){
					assignment.create(query, function(err, employee){
					if(err)
						res.send(err);
						console.log("Employee Added to project Sucessfully..!");
					res.json(1);
				});
			}
			else{
				JSAlert.alert("warning....!");
				console.log("Employee is already added with the same project");
				res.json(-1);
			}

			});
		}
	});
});




app.post('/api/assignFront/:id/:emp_id', function(req, res){

	var query = {
		emp_id:req.params.emp_id,
		p_id:req.params.id
	}
	//console.log(query);
	assignment.count({emp_id:req.params.emp_id}, function(err, count){
		console.log(count);

		if(count == 3){
			console.log("Employee is already handling 3 Active projects");
			res.json(0);
		}
	else{
	assignment.count({$and:[{emp_id:req.params.emp_id},{p_id:req.params.id}]}, function(err, count){
		console.log(count);

		if(count == 0){
			assignment.create(query, function(err, employee){
			if(err)
				res.send(err);
				console.log("Employee Added to project Sucessfully..!");

			res.json(1);
		});
	}
	else{
		JSAlert.alert("warning....!");
		console.log("Employee is already added with the same project");
		res.json(-1);

	}

	});
}
});

});
//show project assgined employees


app.get('/api/getAssign/:id', function(req, res){


	assignment.find({p_id:req.params.id}, function(err, emp){
		if(err)
			res.send(err);
			//console.log(emp);
			var x = {};
			var z ={}
			var y = [];
			x = JSON.parse(JSON.stringify(emp));
			var temp = "";
			//console.log(x);
			//console.log(x[1].emp_id);
			var i, count;
			count = 0;
			for(i = 0;i<x.length;i++){
				try{
									employee.find({_id:x[i].emp_id}, function(err, empdetail){
										if(err)
											res.send(err);
											// console.log(JSON.parse(JSON.stringify(empdetail)));
											var a = JSON.parse(JSON.stringify(empdetail));
										//	console.log(JSON.stringify(a[0]));
											y.push(JSON.stringify(a[0].emp_name));
											//console.log("Take a break");

												if(count == x.length-1){
													console.log(y);
													console.log(typeof(y));
													res.json(y);
												}
												count++;
									});

								}
								catch(e){

								}
			}
		// res.json(empdetails);
	});
});



//show project assgined employees


app.get('/api/getAssignEmp/:id', function(req, res){

	assignment.find({emp_id:req.params.id}, function(err, emp){
		if(err)
			res.send(err);
			//console.log(emp);
			var x = {};
			var z ={}
			var y = [];
			x = JSON.parse(JSON.stringify(emp));
			var temp = "";
			console.log(x);
			console.log(x[0].p_id);
			var i, count;
			count = 0;

			for(i = 0;i<x.length;i++){
				try{
									project.find({_id:x[i].p_id}, function(err, empdetail){
										if(err)
											res.send(err);
											// console.log(JSON.parse(JSON.stringify(empdetail)));
											var a = JSON.parse(JSON.stringify(empdetail));
											console.log(JSON.stringify(a[0]));
											try{y.push(JSON.stringify(a[0].projectTitle));
											}
											catch(e){

											}
											console.log("Take a break");

												if(count == x.length-1){
													console.log(y);
													console.log(typeof(y));
													res.json(y);
												}
												count++;
									});

								}
								catch(e){

								}
			}

		// res.json(empdetails);
	});
});


app.get('/api/getTotalWorkEmp/:id', function(req, res){

	assignment.find({emp_id:req.params.id}, function(err, emp){
		if(err)
			res.send(err);
			//console.log(emp);
			var x = {};
			var z ={}
			var y = [];
			x = JSON.parse(JSON.stringify(emp));
			var temp = "";
			console.log(x);
			console.log(x[0].p_id);
			var i, count;
			count = 0;
			var totalHours=0;
			var totalDays = 0;
			for(i = 0;i<x.length;i++){
				try{
									project.find({_id:x[i].p_id}, function(err, empdetail){
										if(err)
											res.send(err);
											// console.log(JSON.parse(JSON.stringify(empdetail)));
											var a = JSON.parse(JSON.stringify(empdetail));
											console.log(JSON.stringify(a[0]));
											try{
												y.push(JSON.stringify(a[0].projectTitle));
												console.log(a[0].hours);
												totalHours += a[0].hours;
												totalDays += a[0].days;
											}
											catch(e){

											}
											console.log("Take a break");

												if(count == x.length-1){
													console.log(y);
													console.log(typeof(y));
													var avgWork = totalHours/totalDays
										      console.log("Average Working Hours Per Day :: "+avgWork);
													res.json(avgWork);
												}
												count++;
									});

								}
								catch(e){

								}
			}
		// res.json(empdetails);
	});
});


app.get('/api/ShowBackAssignEmp/:id', function(req, res){

//	console.log(req.params.id);

	// assignment.count({p_id:req.params.id}, function(err, count){
	// 	if(err)
	// 		res.send(err);
	// 		console.log(count);
	// 		//console.log(emp);
	// });
	//
	// assignment.find({p_id:req.params.id}, function(err, emp){
	// 	var x={};
	// 	var y={};
	// 	if(err)
	// 		res.send(err);
	// 		 x = JSON.parse(JSON.stringify(emp));
	//
	// 		console.log(x);
	//
	// 		employee.find({_id:x.emp_id}, function(err, empdetail){
	// 			if(err)
	// 				res.send(err);
	// 			res.json(empdetail);
	// 		});
	// //console.log(emp);
	// });





});




var server = app.listen(3001, function(){
	console.log("Server Running on port "+server.address().port);
});
