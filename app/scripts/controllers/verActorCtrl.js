    angular.module('angularSpa')
    .controller('VerActorCtrl.js', function($scope, actorsService, $routeParams){
        $scope.actor =[];
        function getActorsId(){
            actorsService.getActorsId($routeParams.actorId)
            .success(function(data){
                $scope.actor = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
        }
        getActorsId();
    });