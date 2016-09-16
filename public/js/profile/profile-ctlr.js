(function () {

    var app = angular.module('resumeApp');

    app.controller("ProfileController", ["$scope", "ProfileService", function ($scope, profileService) {

        $scope.model = {};


        $scope.init = function () {
            profileService.fetchProfile().then(onProfileLoad);
        }
        
        function onProfileLoad(response) {
            $scope.model = response;
        }

    }]);

} ());
