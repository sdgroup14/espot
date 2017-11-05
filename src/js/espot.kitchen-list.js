(function() {
  'use strict';

  angular
    .module('espot.kitchen-list', [
      'ui.router',
      'ngAnimate'
    ])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('KitchenListCtrl', KitchenListCtrl);

  KitchenListCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http', '$cookies', '$state', '$transitions'];

  function KitchenListCtrl($scope, $rootScope, $timeout, $http, $cookies, $state, $transitions) {
    $rootScope.pageTitle = "ТИП КУХНИ";





    $('body').on('click', '.kitchen-category-item', function() {
      $cookies.put("cookiesKitchenCategoryTitle", $(this).find('.kitchen-category-item-name').text());
      $cookies.put("cookiesKitchenResultId", $(this).attr('data-kitchen-id'));
    });



    $timeout(function() {
      $('.nav-1').addClass('nav-show');
      $('.nav-2').removeClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');

    }, 100);

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
      method: 'get',
      url: 'https://api.icreations.agency/kitchen'
    }).then(function(response) {
      $scope.dataKitchen = response.data;
      console.log($scope.dataKitchen);
    }, function(error) {
      console.log('Ошибка:' + error);
    });

    $scope.getTimes = function(n) {
      return new Array(n);
    };





  };

  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('kitchen-list', {
        url: '/kitchen-list',
        parent: 'kitchen',
        templateUrl: '../views/pages/kitchen-list.html',
        controller: KitchenListCtrl,

        // params: {reload: false}
      })
  };
})();