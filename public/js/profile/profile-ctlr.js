(function () {
  var app = angular.module("resumeApp");

  app.controller("ProfileController", [
    "$scope",
    "$window",
    "ProfileService",
    function ($scope, $window, profileService) {
      $scope.model = {};

      $scope.init = function () {
        profileService.fetchProfile().then(onProfileLoad);
      };

      $scope.download = function () {
        const fileName = `RESUME_JP_${new Date().getTime()}`;
        const windowRef = $window.open('', 'blank');
        profileService.downloadResume(fileName).then((result) => {
          const file = new Blob([result.data], { type: "application/pdf" });
          windowRef.location.href = $window.URL.createObjectURL(file);
        });
      };

      function onProfileLoad(response) {
        $scope.model = response;
      }
    },
  ]);
})();
