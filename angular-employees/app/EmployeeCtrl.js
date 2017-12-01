var app = angular.module("EmployeeMgmt", [])


app.controller("EmployeeCtrl", function ($scope, $http) {
    
getEmployees = () => {
    $http
    .get("https://employees-dem.firebaseio.com/.json")
    .then(
        function(firebaseObjectOfObjects) {

            $scope.employees = Object.keys(firebaseObjectOfObjects.data.employees)
            .map(key => {
                firebaseObjectOfObjects.data.employees[key].id = key
                return firebaseObjectOfObjects.data.employees[key]
            })

            console.log($scope.employees)

        })
}
    
    $scope.murderEmployee = function(employee) {
        console.log(employee)
        $http
        .delete(`https://employees-dem.firebaseio.com/employees/${employee.id}/.json`)
        .then( function () {
            getEmployees()
        })
    }

    $scope.fireEmployee = function(employee) {
        employee.employmentEnd = Date.now()

        $http
        .put(`https://employees-dem.firebaseio.com/employees/${employee.id}/.json`,
        employee).then(function () {
            getEmployees()
        })
    }

    $scope.createEmployee = function (firstName, lastName) {

        let newEmployee = {

            "firstName": firstName,
            "lastName": lastName,
            "employmentStart": Date.now(),
            "employmentEnd": 0
        }

        $http
        .post(`https://employees-dem.firebaseio.com/employees/.json`,
        newEmployee
        ).then( () => {
            $scope.firstName = ""

            $scope.lastName = ""

            getEmployees()
        })
        
    } 

getEmployees()

})



