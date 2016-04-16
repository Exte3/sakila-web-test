angular.module('angularSpa')
    .service('actorsService', function($http){
        var urlBase= 'http://sakila-fingeso.rhcloud.com/service/actors/';
        this.getActors = function(){
            return $http.get(urlBase);
        };

        this.getActorsId = function(actorId){
            return $http.get(urlBase+actorId);
        };

        this.addActor = function(fName,lName){
            var request = $http({
            method: 'post',
            url: 'http://sakila-fingeso.rhcloud.com/service/actors/',
            data: {
                    "firstName": fName,
                    "lastName": lName,
                    },
            headers: {'Content-Type': 'application/json'
                    }
            });
            return ( request);
        };
    });
