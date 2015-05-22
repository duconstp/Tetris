angular.module('angularApp.controllers', ['ui.bootstrap']);

var angularApp = angular.module('angularApp', [
    'ngRoute',
    'angularApp.controllers'
]);
angularApp.config(['$compileProvider', function ($compileProvider) {
    "use strict";
    $compileProvider.debugInfoEnabled(false);
}]);


angularApp.filter('ticToTime', function () {
    "use strict";
    return TimeFromTics;
});

angularApp.directive('ngEnter', ['$document', function ($document) {
    "use strict";
    return {
        scope: {
            ngEnter: "&"
        },
        link: function (scope, element, attrs) {
            var enterWatcher = function (event) {
                if (event.which === 13) {
                    scope.ngEnter();
                    $document.unbind("keydown keypress", enterWatcher);
                }
            };
            $document.bind("keydown keypress", enterWatcher);
        }
    };
}]);

angularApp.config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider.
                when('/scores', {
                    templateUrl: 'templates/scores.html',
                    controller: 'ScoresCtrl'
                }).
                when('/achievements', {
                    templateUrl: 'templates/achievements.html',
                    controller: 'AchievementsCtrl'
                }).
                when('/rules', {
                    templateUrl: 'templates/rules.html'
                }).
                when('/game', {
                    templateUrl: 'templates/game.html',
                    controller: 'GameCtrl'
                }).
                when('/campaign', {
                    templateUrl: 'templates/campaign.html',
                    controller: 'CampaignCtrl'
                }).
                when('/stats', {
                    templateUrl: 'templates/stats.html',
                    controller: 'StatCtrl'
                }).
                when('/', {
                    templateUrl: 'templates/scores.html',
                    controller: 'ScoresCtrl'
                });

            $locationProvider.html5Mode(false);
            $locationProvider.hashPrefix('!');
        }]
);
