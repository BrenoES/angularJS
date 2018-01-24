angular.module('formulario')
    .controller('FormularioController',function($scope,$routeParams){
        var self= this;
        self.plano = $routeParams.planoSKU;
        $scope.submeter = function(){
            console.log(self.plano.valueOf());
            console.log($scope.nome);
            console.log($scope.email);
            console.log($scope.telefone);
            console.log($scope.cpf);
            $scope.nome = '';
            $scope.email = '';
            $scope.telefone = '';
            $scope.cpf = '';
           
        };
    })
    .directive('formularioTemplate',function () {
        return {
            restrict: 'E',
            templateUrl: 'app/formulario/formulario.template.html'
        }
    })