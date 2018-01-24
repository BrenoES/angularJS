angular.module('planos')
    .controller('PlanosController',['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        var self = this;
        self.sku = $routeParams.Plataform_sku;
        $http.get('http://private-59658d-celulardireto2017.apiary-mock.com/planos/'+ $routeParams.sku).then(function (response) {
            $scope.planos = response.data.planos;
        });
    }])
    .directive('planosTemplate', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/planos/planos.template.html'
        }
    })