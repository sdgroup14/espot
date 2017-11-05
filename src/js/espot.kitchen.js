(function() {
  'use strict';

  angular
    .module('espot.kitchen', [
      'ui.router',
      'ngAnimate'
    ])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('KitchenCtrl', KitchenCtrl);

  KitchenCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http', '$cookies', '$state', '$transitions'];

  function KitchenCtrl($scope, $rootScope, $timeout, $http, $cookies, $state, $transitions) {
    
    // $rootScope.pageTitle = "ТИП КУХНИ";
    // // $('.kitchen-page-result-wrapper').show();
    // $scope.reloadState1 = function() {
    //   // $state.reload();
    //   $('.kitchen-page-result-wrapper').hide();
    // }

    // console.log($state.current);


 //   $rootScope.$on("$locationChangeStart", function (event, toState, toParams, fromState, fromParams) 
 // {

 //    if (toState.name === $rootScope.previousState )
 //       { 
 //          // u can any 1 or all of below 3 statements
 //         // event.preventDefault();  // to Disable the event
 //         // $state.go('someDefaultState'); //As some popular banking sites are using 
 //         console.log("Back button Clicked");

 //       }
 // else
 //      $rootScope.previousState= fromState.name;
 //   });

   //   $rootScope.$on("$locationChangeSuccess", function (event, toState, toParams, fromState, fromParams) 
   // {

   //      $rootScope.previousStatus = fromState.name;
   //      if() {
          
   //      }
   //  });


    // $('body').on('click', '.kitchen-category-item', function() {
    //   $cookies.put("cookiesKitchenCategoryTitle", $(this).find('.kitchen-category-item-name').text());
    //   $cookies.put("cookiesKitchenResultId", $(this).attr('data-kitchen-id'));
    // });


//     $transitions.onStart({}, function(){
//     // console.log('1')
// });

//     $timeout(function() {
//       $('.nav-1').addClass('nav-show');
//       $('.nav-2').removeClass('nav-show');
//       $('.logo').addClass('start-page-logo');
//       $('.page-title').addClass('active');

//     }, 100);

//     $rootScope.$on('$locationChangeSuccess', function(evt) {
//       $timeout(function() {
//         $('.nav-1').addClass('nav-show');
//         $('.nav-2').removeClass('nav-show');
//         $('.logo').addClass('start-page-logo');
//         $('.page-title').addClass('active');
//         // $cookies.put("cookiesKitchenResultId", '');

//       }, 100);
//     });




    // $scope.dataKitchen = [];

    // $http({
    //   method: 'get',
    //   url: 'https://api.icreations.agency/kitchen'
    // }).then(function(response) {
    //   $scope.dataKitchen = response.data;
    //   console.log($scope.dataKitchen);
    // }, function(error) {
    //   console.log('Ошибка:' + error);
    // });

    // $scope.getTimes = function(n) {
    //   return new Array(n);
    // };


  

  };

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('kitchen', {
        url: '/kitchen',
        templateUrl: '../views/pages/kitchen.html',
        controller: KitchenCtrl,
        redirectTo: 'kitchen-list'
        // params: {reload: false}
      })
  };
})();