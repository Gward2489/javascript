const app = angular.module("EmployeeApp", ["ngRoute"])


angular.module("EmployeeApp").config(function ($routeProvider) {
    /**
     * Configure all Angular application routes here
     */
    $routeProvider
        .when("/employees/list", {
            templateUrl: "app/employees/partials/list.html",
            controller: "EmployeeListCtrl"
        })
        .when('/employees/new', {
            templateUrl: 'app/employees/partials/create.html',
            controller: 'EmployeeCreateCtrl'
        })
        .when('/employees/detail/:employeeId', {
            templateUrl: 'app/employees/partials/detail.html',
            controller: 'EmployeeDetailCtrl'
        })
        .when('/employees/bodyCount', {
            templateUrl: 'app/employees/partials/bodyCount.html',
            controller: 'EmployeeBodyCountCtrl'
        })
        .otherwise('/employees/list')
})

