angular.module('resumeApp').factory("ProfileService", function ($http) {

    function fetchProfile() {
        return $http.get("/api/profile").then(function(response){
            return response.data;
        });
    }

    return {
        fetchProfile: fetchProfile
    }
});