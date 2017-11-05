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
   // $('.kitchen-page-result-wrapper').hide();
// $('.kitchen-page-result-wrapper').hide();
// $rootScope.$on('$locationChangeStart', function (event, toState, toParams, fromState, fromParams) {

//          $state.current = toState;   // if you need the target Url
//           $state.current = fromState;// If you need the current URL
// console.log($state.current.name);//It should show value now

//     });
// console.log($state.current);//It should show value now
// console.log('э123');//It should show value now

  // $scope.reloadState = function(){
  //   // $state.reload();
  //   // $('.kitchen-page-result-wrapper').show();
  //  }
       $timeout(function() {
      
      // $rootScope.pageTitle = "ТИП КУХНИ";
      $('.nav-1').addClass('nav-show');
      $('.nav-2').removeClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');
      
    }, 100);

 
        $scope.takePlaceId = function(item) {
      $cookies.put("cookiesCafeId", item.currentTarget.getAttribute("data-place-id"));
      $('.back-btn-general').attr('href', '#!/kitchen/kitchen-result');
    };


//   $transitions.onStart({from:'kitchen-result'}, function(){
//     $('.kitchen-page-result-wrapper').show();
// });

   // $('.kitchen-page-btn').on('click', function(){
    
//     $transitions.onStart({}, function(){
//     // console.log('2')
// });
   // });

    //    $rootScope.$on('$locationChangeSuccess', function() {
    //     if($rootScope.previousLocation == $location.path()) {
    //         console.log("Back Button Pressed");
    //     }
    //     $rootScope.previousLocation = $rootScope.actualLocation;
    //     $rootScope.actualLocation = $location.path();
    // });


    $rootScope.$on('$locationChangeSuccess', function(evt) {
        // $('.kitchen-page-result-wrapper').hide();
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
        controller: KitchenResultCtrl,
        
        // params: {reload: false}
      })
  };
})();