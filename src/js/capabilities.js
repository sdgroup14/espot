(function() {
  'use strict';

  angular
    .module('icreations.capabilities', ['ngRoute', 'ngAnimate'])
    .config(['$routeProvider', config])
    .controller('CapabilitiesCtrl', CapabilitiesCtrl);

  CapabilitiesCtrl.$inject = ['$scope', '$rootScope', '$timeout'];

  function CapabilitiesCtrl($scope, $rootScope, $timeout) {
    $rootScope.CurrentPath = 'capabilities';
    $rootScope.title = 'iCreations - Capabilities';

    $rootScope.$on("$routeChangeSuccess", function() {
      $('html, body').stop().animate({ scrollTop: 0 }, 150);
    });
    // $scope.anim = "r-animate-to-left";

    $rootScope.$on('$routeChangeStart',
      function(event, next, current) {

        $rootScope.loadder = true;
        $('#loader').attr('src', '../img/loader.svg');

      });

    $rootScope.$on('$routeChangeSuccess',
      function(event, next, current) {
                if (states.indexOf(current.$$route.controller) < states.indexOf(next.$$route.controller)) {
          $rootScope.back = false;
        } else {
          $rootScope.back = true;
        }
        $rootScope.loadder = false;
        $('#loader').attr('src', '');
      });

  };


  function config($routeProvider) {
    $routeProvider.
    when('/capabilities', {
      templateUrl: '../views/content/capabilities.html',
      controller: 'CapabilitiesCtrl'
    });

  };
})();