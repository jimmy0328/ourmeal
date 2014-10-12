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
  $scope.storeName = "真好吃便當";
  $scope.store_tel = "07-1234567";
  $scope.menu_list = [
    {id:1,name: "雞腿便當",price:"75",recommand: true},
    {id:2,name: "豬肉便當",price:"65"},
    {id:3,name: "炒飯",price:"55"}
  ];
  $scope.order = function(obj){
    alert("你確定要訂購"+obj.name+"嗎?");
  }
})
//本月消費
.controller('ConsumerCtrl', function($scope) {

})
//歷史訂購記錄
.controller('HistoryCtrl', function($scope) {

});
