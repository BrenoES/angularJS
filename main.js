(function() {
'use strict';

    angular
        .module('Wooza', [])
        .controller('MainController', MainController);

    MainController.$inject = ['$interval', 'MainService'];

    function MainController($interval, MainService) {
        var vm = this;
        vm.msg = false;
        
        MainService.getStrings().then(function(response){
            var index = 0;
            vm.msgs = response.msgs            

            if (vm.msgs) {
                vm.timer  = $interval(function(){
                    vm.msg = Base64.decode(vm.msgs[index]);

                    if (index < vm.msgs.length-1) {
                        index++;
                    } else {
                        index = 0;
                    }
                }, 10);
            }
        });
    }
})();
