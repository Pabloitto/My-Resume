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
        const fileName = `RESUME_JP_${new Date().getTime()}`;
        const a = document.createElement("a");
        document.body.appendChild(a);
        profileService.downloadResume(fileName).then((result) => {
          const file = new Blob([result.data], { type: "application/pdf" });
          const fileURL = window.URL.createObjectURL(file);
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
