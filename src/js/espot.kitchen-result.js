(function() {
  'use strict';

  angular
    .module('espot.kitchen-result', [
      'ui.router',
      'ngAnimate'
    ])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('KitchenResultCtrl', KitchenResultCtrl);

  KitchenResultCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http', '$cookies', '$state', '$transitions'];

  function KitchenResultCtrl($scope, $rootScope, $timeout, $http, $cookies, $state, $transitions) {
    $rootScope.pageTitle = $cookies.get("cookiesKitchenCategoryTitle");

    $timeout(function() {
      $('.nav-1').addClass('nav-show');
      $('.nav-2').removeClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');

    }, 100);

    $scope.takePlaceId = function(item) {
      $cookies.put("cookiesCafeId", item.currentTarget.getAttribute("data-place-id"));
      $cookies.put("backLinkHref", '#!/kitchen/kitchen-result');
    };

    $rootScope.$on('$locationChangeSuccess', function(evt) {
      $timeout(function() {
        $('.nav-1').addClass('nav-show');
        $('.nav-2').removeClass('nav-show');
        $('.logo').addClass('start-page-logo');
        $('.page-title').addClass('active');

      }, 100);
    });

    $scope.dataKitchen = [];

    $http({
      method: 'post',
      data: '{"id":' + $cookies.get("cookiesKitchenResultId") + '}',
      url: 'https://api.icreations.agency/cafekitchen'
    }).then(function(response) {
      $scope.dataKitchenSearch = response.data;
      console.log($scope.dataKitchenSearch);
      $scope.getStarsCafeArr = Array;
      $scope.starsNum = +response.data.placeRate;


    }, function(error) {
      console.log(error);
    });

  };

  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('kitchen-result', {
        url: '/kitchen-result',
        parent: 'kitchen',
        templateUrl: '../views/pages/kitchen-result.html',
        controller: KitchenResultCtrl
      })
  };
})();