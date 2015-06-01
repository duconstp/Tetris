angular.module('angularApp.controllers')
    .controller('ScoresCtrl', ['$scope', '$http','userAccount', function ($scope, $http, userAccount) {
        "use strict";
        $scope.isActive = function (viewLocation) {
            return viewLocation === $scope.type;
        };
        $scope.activate = function (type) {
            $scope.type = name;
            $scope.getScores(type);
        };

        $scope.isUser = function(n){
            return n === userAccount.login;
        };
        $scope.getScores = function (type) {
            $http.get("http://sylvain.luthana.be/tetrisApi.php?get&map=" + type).success(function (data) {
                $scope.scoreGridData = data;
                console.log(data);
            }).error(function (e) {
                console.log(e);
            });
        };
        $scope.activate("classic");
        $scope.scoreTypes = [
            {type: "classic", name: "Classic"},
            {type: "ultralarge", name: "Wide"},
            {type: "sandbox", name: "Sandbox"},
            {type: "ultralargecoop", name: "Coop"}
        ];
    }]);
