(function() {
  'use strict';

  angular
    .module('espot.search', [
      'ui.router',
      'ngCookies',
      'ngAnimate'
    ])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('SearchCtrl', SearchCtrl)

  SearchCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http', '$state', '$cookies'];

  function SearchCtrl($scope, $rootScope, $timeout, $http, $state, $cookies) {
        $rootScope.$on('$viewContentLoading',
      function(event, viewConfig) {
        $('.spinner').fadeIn(1);
      });


    $scope.$on('$viewContentLoaded',
      function(event) {
        $('.spinner').fadeOut(1);
      });
    // $rootScope.$on('$viewContentLoading',
    //   function(event, viewConfig) {
    //     $('.spinner').fadeIn(1);
    //   });



    // $scope.$on('$viewContentLoaded',
    //   function(event) {
    //     $('.spinner').fadeOut(100);
    //   });

    $scope.takePlaceId = function(item) {
      $cookies.put("cookiesCafeId", item.currentTarget.getAttribute("data-place-id"));
      $cookies.put("backLinkHref", '#!/' + $state.current.name);
    };

    $timeout(function() {
      $rootScope.pageTitle = "search";
      $('.nav-2').removeClass('nav-show');
      $('.nav-1').addClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');
    }, 100);

    $rootScope.$on('$locationChangeSuccess', function(evt) {
      $timeout(function() {
        $('.nav-2').removeClass('nav-show');
        $('.nav-1').addClass('nav-show');
        $('.logo').addClass('start-page-logo');
        $('.page-title').addClass('active');
      }, 100);
    });

// $scope.dataSearch1 = [];
//     function makeRequest() {
//         var url = 'https://api.icreations.agency/search',
//             request = new XMLHttpRequest()
        
//         request.open('get', url)
        
//         // Handle the response
//         request.onload = function() {
//            $scope.dataSearch1 = JSON.parse(request.response);
//            console.log($scope.dataSearch1);
//            console.re.log($scope.dataSearch1);
//         }
        
//         // Handle errors
//         request.onerror = function(error) {
//           console.log('Error', error);
//           console.re.log('Error', error);
//           // console.re.log('Error', JSON.stringify(error));
//         }
        
//         // Make the request
//         request.send()
//     }

//     makeRequest()


// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.icreations.agency/search", true);
// xhr.onload = function (e) {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       // console.log(xhr.responseText);

//       console.re.log(JSON.parse(xhr.responseText));
//       console.re.log('yes');
//     } else {
//       console.re.log(xhr.statusText);
//       console.re.log(xhr.statusText);
//       console.re.log('no');
//     }
//   }
// };
// xhr.onerror = function (e) {
//   console.error(xhr.statusText);
//   console.re.log(xhr.statusText);
//   console.re.log('1');
//   console.re.log(console.error(xhr.statusText));
// };
// xhr.send(null);




    $scope.dataSearch = [];



    $http({
      method: 'get',
      url: 'https://api.icreations.agency/search',
      header: "Access-Control-Allow-Origin: *"
      
    }).then(function(response) {
      $scope.dataSearch = response.data;
      $scope.starsNum = $scope.dataSearch.placeRate;
      console.log(response.data);
      // console.re.log(response.data);
      $scope.getStarsCafeArr = Array;
    }, function(error) {
      console.log(error);

      // console.re.log('Error', error);
    });

    $scope.getTimes = function(n) {
      return new Array(n);
    };

    $scope.propertyName = 'placePrice';
    $scope.propertyName = 'placeRate';
    $scope.propertyName = 'placeDistance';
    $scope.reverse = !true;
    // $scope.friends = friends;

    $scope.sortBy = function(propertyName) {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
      // $('.sort-btn').removeClass('active');
    };

    $('.sort-btn').on('click', function() {
      $('.sort-btn').removeClass('active');
      $(this).addClass('active');
    });

  };

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: '../views/pages/search.html',
        controller: SearchCtrl
      })
  };
})();