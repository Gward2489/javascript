angular.module("EmployeeApp")
.factory("AuthFactory", function($http, $timeout, $location, $route) {
    let currentUserData = null


    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            currentUserData = user

            if ($location.url() !== "/employees/list") {
                $timeout(function () {
                    $location.url("/employees/list")
                }, 100)
            } else {
                $route.reload()
            }


        } else {
            currentUserData = null
            console.log("User is not authenticated")
            $timeout(function () {
                $location.url("/auth")
            }, 500)
        }
    })


    return Object.create(null, {
        isAuthenticated: {
            value: () => {
                return firebase.auth().currentUser ? true : false
            }
        },
        getUser: {
            value: () => {
                return firebase.auth().currentUser
            }
        },
        logout: {
            value: () => {
                firebase.auth().signOut()
            }
        },
        authenticate: {
            value: credentials => {
                return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            }
        },
        registerWithEmail: {
            value: user => {
                return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            }
        }
    })
})