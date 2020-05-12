angular.module('resumeApp').factory("ProfileService", function ($http, $window) {

    function fetchProfile() {
        return $http.get("/api/profile").then(function(response){
            return response.data;
        });
    }

    function downloadResume() {
      return $http.post("/api/pdf/download", {
        fileName: 'RESUME_JP_20200511',
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