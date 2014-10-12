angular.module('starter.controllers', [])

//會員登入
.controller('LoginCtrl', function($scope) {
  $scope.username = "Jimmy";
  $scope.password = "";

  $scope.login =function(){
    //TODO 使用$http POST
    alert("Login");

  }

})

//今日訂餐
.controller('OrderCtrl', function($scope) {

})
//本月消費
.controller('ConsumerCtrl', function($scope) {

})
//歷史訂購記錄
.controller('HistoryCtrl', function($scope) {

});
