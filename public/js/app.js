(function () {
    var app = angular.module('resumeApp', ['ngRoute']);

    app.config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '/views/profile-view.html',
                controller: 'ProfileController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
} ());


