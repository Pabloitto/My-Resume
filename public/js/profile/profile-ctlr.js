(function () {
  var app = angular.module("resumeApp");

  app.controller("ProfileController", [
    "$scope",
    "ProfileService",
    function ($scope, profileService) {
      $scope.model = {};

      $scope.init = function () {
        profileService.fetchProfile().then(onProfileLoad);
      };

      $scope.download = function () {
        var fileName = "file_name.pdf";
        var a = document.createElement("a");
        document.body.appendChild(a);
        profileService.downloadResume().then((result) => {
          var file = new Blob([result.data], { type: "application/pdf" });
          var fileURL = window.URL.createObjectURL(file);
          a.href = fileURL;
          a.download = fileName;
          a.click();
        });
      };

      function onProfileLoad(response) {
        $scope.model = response;
      }
    },
  ]);
})();
