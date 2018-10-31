myApp.controller('spmController', function($scope,$route,$routeParams,$http){

	// $scope.postTempData = function(){
	// 	$http.post('/api/spm/', $scope.temp).then(function(response){
	// 		window.location.href = '#/spm/module2';
	// 	});
	// };
	//
	// $scope.getTempData = function(){
	// 	$http.get('/api/spm/').then(function(response){
	//
	// 		$scope.tempr = response.data;
	// 	});
	// };



	$scope.postProjectData = function(){
		$http.post('/api/project/', $scope.project).then(function(response){
			alert("Project Added Sucessfully");
			//	window.location.href = '/';
		});
	};

	$scope.putProjectData = function(){

			var id = $routeParams.id;
		$http.put('/api/project/'+id, $scope.project).then(function(response){
			alert("Project Updated Sucessfully");
			//	window.location.href = '/';
		});
	};


			$scope.getProjectData = function(){
				$http.get('/api/project/').then(function(response){

					$scope.projects = response.data;
				});
			}

			$scope.deleteProject = function(id){
				var id = id;
				var r = confirm("Are you sure you want to delete the project ...?")

				if(r == true){
				$http.delete('/api/project/'+ id).then(function(response){
					window.location.href = '#/spm/availableProjects';
				});}
			};


					$scope.showProjectData = function(){
						var id = $routeParams.id;
						$http.get('/api/project/'+ id).then(function(response){
							$scope.project = response.data;
						});
					};



		$scope.postEmployeeData = function(){
			$http.post('/api/employee/', $scope.employee).then(function(response){
				alert("Employee Added Sucessfully");
			//	window.location.href = '/';
			});
		};




		$scope.getEmployeeData = function(){
						$http.get('/api/employee/').then(function(response){
							$scope.employees = response.data;
						});
			}

			$scope.getFrontEndEmpData = function(){var id = $routeParams.id;
							$http.get('/api/front-endEmp/'+ id).then(function(response){
								$scope.employees = response.data;
							});
				}



							$scope.getBackEndEmpData = function(){var id = $routeParams.id;
											$http.get('/api/Back-endEmp/'+ id).then(function(response){
												$scope.emps = response.data;
											});
								}


					$scope.deleteEmploye = function(id){
						var id = id;
							var r = confirm("Are you sure you want to delete the Employee ...?")

						if(r == true){
						$http.delete('/api/employee/'+ id).then(function(response){

								window.location.href = '#/spm/displayEmployees';

						});	}
					};

		$scope.showEmployeeData = function(){
			var id = $routeParams.id;
 		  $http.get('/api/employee/'+ id).then(function(response){
				$scope.employee = response.data;
			});
		};



			$scope.putEmployeeData = function(){
				var id = $routeParams.id;
				$http.put('/api/employee/'+ id , $scope.employee).then(function(response){
					//$scope.employee = response.data;
					//window.location.href = '/';
					$route.reload();
				});
			};

			$scope.assignEmpBack = function(emp_id){
				var p_id = $routeParams.id;
				var r = confirm("Click OK to Proceed ...?")

				if(r == true){
					$http.post('/api/assignBack/'+p_id+'/'+emp_id).then(function(response){
						//$scope.employee = response.data;
						//window.location.href = '/';

						if(response.data == -1){
								alert("Employee is already added with the same project");
						}
						if(response.data == 0){
								alert("Employee is already handling 3 Active projects");
						}
						if(response.data == 1){
								alert("Employee Added to project Sucessfully..!");
						}

						$route.reload();

										});
							}
			}

			$scope.assignEmpFront = function(emp_id){
				var p_id = $routeParams.id;

					var r = confirm("Click OK to Proceed ...?")

				if(r == true){
					$http.post('/api/assignFront/'+p_id+'/'+emp_id).then(function(response){
						//$scope.employee = response.data;
						//window.location.href = '/';

						if(response.data == -1){
								alert("Employee is already added with the same project");
						}
						if(response.data == 0){
								alert("Employee is already handling 3 Active projects");
						}
						if(response.data == 1){
								alert("Employee Added to project Sucessfully..!");
						}
						$route.reload();
					});
				}
			}

			//showing assigned project employees
					$scope.showAssignedEmpData = function(){
						var id = $routeParams.id;
			 		  $http.get('/api/ShowBackAssignEmp/'+ id).then(function(response){
							$scope.showasign = response.data;
						});
					};


					$scope.getAssignProject = function(){var id = $routeParams.id;
						$http.get('/api/getAssign/'+ id).then(function(response){
							$scope.assignProj = response.data;
							// alert($scope.assignProj);
						});
					}

						$scope.getAssignEmployeeProj = function(){var id = $routeParams.id;
							$http.get('/api/getAssignEmp/'+ id).then(function(response){
								$scope.assignEmp = response.data;
								// alert($scope.assignProj);
							});
					}

					$scope.getTotalWorkEmp = function(){var id = $routeParams.id;
						$http.get('/api/getTotalWorkEmp/'+ id).then(function(response){
							$scope.getTotalWorkEmp = response.data;
							//alert(response.data);
							// alert($scope.assignProj);
						});
				}


});
