angular
.module("EmployeeApp")
.controller("EmployeeBodyCountCtrl", function ($scope, EmployeeFactory) {
    
    $scope.employees = []

    EmployeeFactory.getBodies().then(data => {
        $scope.employees = data
    })
})