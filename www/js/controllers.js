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
  $scope.total_sum = "280";
  $scope.order_list = [
    {id:1,order_date:"2014/10/11",store: "正忠便當",name: "排骨飯",price:"65"},
    {id:2,order_date:"2014/10/9",store: "味佳便當",name: "排骨飯",price:"70"},
    {id:3,order_date:"2014/10/5",store: "真好吃便當",name: "雞腿便飯",price:"85"},
    {id:4,order_date:"2014/10/1",store: "阿福",name: "牛肉湯麵",price:"60"}
  ];

})
//歷史訂購記錄
.controller('HistoryCtrl', function($scope,$state) {
  $scope.history_list = [
    {id:1,order_date:"2014/10",price:"320"},
    {id:2,order_date:"2014/9",price:"520"},
    {id:3,order_date:"2014/8",price:"470"},
    {id:4,order_date:"2014/7",price:"650"}
  ];

})
//歷史訂購明細記錄
.controller('HistoryDetailCtrl', function($scope) {
$scope.total_sum = "280";
  $scope.order_list = [
    {id:1,order_date:"2014/10/11",store: "正忠便當",name: "排骨飯",price:"65"},
    {id:2,order_date:"2014/10/9",store: "味佳便當",name: "排骨飯",price:"70"},
    {id:3,order_date:"2014/10/5",store: "真好吃便當",name: "雞腿便飯",price:"85"},
    {id:4,order_date:"2014/10/1",store: "阿福",name: "牛肉湯麵",price:"60"}
  ];
});
