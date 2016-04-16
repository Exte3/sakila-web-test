(function(){
    angular.module('angularSpa')
    .controller('PubActorCtrl', function($scope, $http, $location, actorsService){
        $scope.addActor = function (){
            actorsService.addActor($scope.newFirstName, $scope.newLastName)
           
        .success(function(data){

            $location.path('/actors');
            $scope.status = 'Publicado Correctamente';
            alert("Publicado Correctamente");

            $location.path('/actors');

        })
        .error(function(error){
            $scope.status = 'Error al crear la publicación';
            alert("Error al crear la publicación");
            console.log(error);
        });

        }
    });
})();