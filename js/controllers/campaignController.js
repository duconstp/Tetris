angular.module('angularApp.controllers')
    .controller('CampaignCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    "use strict";
    var i, j;
    $scope.campaign = $routeParams.name || "arcade";
    $scope.maps = [];
    switch ($scope.campaign) {
        case 'puzzle':
            for (i = 1; i < 3; i += 1) {
                $scope.maps.push('campaign/puzzle/puzzle_' + i);
            }
            break;
        case 'timelimit':
            for (i = 1; i < 3; i += 1) {
                $scope.maps.push('campaign/timeLimit/timelimit_' + i);
            }
            break;
        case 'tetris':
            for (i = 1; i < 7; i += 1) {
                for (j = 1; j < 11; j += 1) {
                    $scope.maps.push('campaign/tetrisAttack/' + i + '/ta_' + i + '_' + j);
                }
            }
            break;
        default:
            for (i = 1; i < 4; i += 1) {
                $scope.maps.push('campaign/arcade/arcade_' + i);
            }
            break;
    }

}]);