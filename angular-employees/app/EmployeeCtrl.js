var app = angular.module("EmployeeMgmt", [])


app.controller("EmployeeCtrl", function ($scope, $http) {
    
    
    $http
    .get("https://employees-dem.firebaseio.com/.json")
    .then(
        function(firebaseObjectOfObjects) {
            
            $scope.employees = firebaseObjectOfObjects.data.employees
            
        }
    )
    
    $scope.fireEmployee = function(employee) {
        employee.employmentEnd = Date.now()
    }

    $scope.createEmployee = function (firstName, lastName) {

        let newId = $scope.employees.length + 1

        let newEmployee = {
            "id": newId,
            "firstName": firstName,
            "lastName": lastName,
            "employementStart": Date.now(),
            "employmentEnd": null
        }

        $scope.employees.push(newEmployee)
        $scope.firstName = ""
        $scope.lastName = ""
    } 

  
})



