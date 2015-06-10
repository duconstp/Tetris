
angular.module('angularApp.factories')
    .factory('api', ['$http', function apiFactory($http) {
        "use strict";
        var root = "http://whenwillyoulose.com:1337/wwylApi/";
        function Api() {}
        Api.prototype.addScore = function(userId, score, map){
            return $http.post(root+'scores', {score: score, user: userId, map:map});
        };
        Api.prototype.getScores = function(map){
            return $http.get(root+'scores/'+map);
        };
        Api.prototype.updateUser = function(id, hash, data, name, password){
            if(id < 0){
                throw "not registered";
            }

            return $http.put(root+'users/'+id+'/'+hash,{data: data, name: name, password: password});
        };
        Api.prototype.createUser = function(name, password){
            return $http.post(root+'users', {userName: name, password: password});
        };
        Api.prototype.loadUser = function(name, password){
            return $http.post(root+'users/validate', {name: name, password: password});
        };
        Api.prototype.loadUserId = function(userId, hash){
            return $http.get(root+'users/'+userId+'/'+hash);
        };
        return new Api();
    }]);