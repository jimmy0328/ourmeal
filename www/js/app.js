// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    
    .state('tab.login', {//會員登入
      url: '/login',
      views: {
        'tab-login': {
          templateUrl: 'templates/tab-login.html',
          controller: 'LoginCtrl'
        }
      }
    })

   
    .state('tab.order', { //今日訂餐
      url: '/order',
      views: {
        'tab-order': {
          templateUrl: 'templates/tab-order.html',
          controller: 'OrderCtrl'
        }
      }
    })
    
    .state('tab.consumer', {//本月消費
      url: '/consumer',
      views: {
        'tab-consumer': {
          templateUrl: 'templates/tab-consumer.html',
          controller: 'ConsumerCtrl'
        }
      }
    })
     
    .state('tab.history', {//歷史訂購記錄
      url: '/history',
      views: {
        'tab-history': {
          templateUrl: 'templates/tab-history.html',
          controller: 'HistoryCtrl'
        }
      }
    })
    .state('tab.historyDetail', {//歷史訂購記錄
      url: '/history/:month',
      views: {
        'tab-history': {
          templateUrl: 'templates/history-detail.html',
          controller: 'HistoryDetailCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/login');

});

