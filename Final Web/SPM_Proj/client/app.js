var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/home.html',
			controller:'spmController'
		})
		.when('/spm', {
			templateUrl:'templates/home.html',
			controller:'spmController'
		})
		.when('/spm/module1', {
			templateUrl:'templates/module1.html',
			controller:'spmController'
		})
		.when('/spm/module2', {
			templateUrl:'templates/module2.html',
			controller:'spmController'
		})
		.when('/spm/module3', {
			templateUrl:'templates/module3.html',
			controller:'spmController'
		})
		.when('/spm/getEmployee', {
			templateUrl:'templates/getEmployee.html',
			controller:'spmController'
		})
		.when('/spm/displayEmployees', {
			templateUrl:'templates/displayEmployees.html',
			controller:'spmController'
		})
		.when('/spm/:id/viewEmployee', {
			templateUrl:'templates/viewEmployee.html',
			controller:'spmController'
		})
		.when('/spm/:id/editEmployee', {
			templateUrl:'templates/editEmployee.html',
			controller:'spmController'
		})
		.when('/spm/getProject', {
			templateUrl:'templates/getProject.html',
			controller:'spmController'
		})
		.when('/spm/availableProjects', {
			templateUrl:'templates/availableProjects.html',
			controller:'spmController'
		})
		.when('/spm/:id/viewProject', {
			templateUrl:'templates/viewProject.html',
			controller:'spmController'
		})
		.when('/spm/:id/editProject', {
			templateUrl:'templates/editProject.html',
			controller:'spmController'
		})
		.when('/spm/:id/alloc', {
			templateUrl:'templates/alloc.html',
			controller:'spmController'
		})
		.when('/spm/:id/assignment', {
			templateUrl:'templates/assignment.html',
			controller:'spmController'
		})
		.when('/spm/:id/assignfrontEnd', {
			templateUrl:'templates/assignFrontEnd.html',
			controller:'spmController'
		})
		.when('/spm/:id/assignBackEnd', {
			templateUrl:'templates/assignBackEnd.html',
			controller:'spmController'
		})
		.when('/logout', {
			templateUrl:'templates/login.html',
			controller:'spmController'
		});

});
