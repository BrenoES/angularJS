angular.module('plataforma')
    .controller('PlataformaController', function ($scope, $http) {

        $http.get('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas').then(function (response) {
            $scope.plataformas = response.data.plataformas;
        });
    })
    .directive('plataformaTemplate', function () {
        return {
            restrict: 'AE',
            templateUrl: 'app/plataforma/plataforma.template.html'
        }
    })