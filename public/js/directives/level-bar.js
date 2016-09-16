angular.module('resumeApp').directive("levelBar", function () {

    return {
        restrict: 'E',
        templateUrl:  '/views/level-bar-view.html',
        scope: {
            level: '=level'
        },
        link: function (scope, element, attrs) {
            var itemWidth = scope.level + "%";
            
            $(element).animate({
                width: itemWidth
            }, 800);
        }
    };
});