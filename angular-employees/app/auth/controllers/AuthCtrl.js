app.controller("AuthCtrl", function($scope, $location, AuthFactory) {
    $scope.auth = {}
  
    $scope.loginUser = function (credentials) {
        AuthFactory.authenticate(credentials).then(function (didLogin) {
            $scope.login = {}
            $scope.register = {}
            $location.url('app/employees/partials/list')
        })
    }

    $scope.logoutUser = function(){
        AuthFactory.logout()
        $location.url('app/auth/partials/auth')
    }

    $scope.registerUser = function(registerNewUser) {
      AuthFactory.registerWithEmail(registerNewUser).then(function(didRegister) {
        console.log(didRegister)
      })
    }
  })