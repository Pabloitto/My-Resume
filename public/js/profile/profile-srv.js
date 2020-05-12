angular.module('resumeApp').factory("ProfileService", function ($http, $window) {

    function fetchProfile() {
        return $http.get("/api/profile").then(function(response){
            return response.data;
        });
    }

    function downloadResume(fileName) {
      return $http.post("/api/pdf/download", {
        fileName,
        url: $window.location.href
      }, { responseType: 'arraybuffer' }).then(function(response){
          return response;
      });
  }

    return {
        fetchProfile,
        downloadResume
    }
});