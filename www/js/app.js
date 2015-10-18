var app = angular.module('quizApp', ['ngMaterial']);

app.controller('quizCtrl', ['$scope', "$mdMedia", function($scope, $mdMedia){

$scope.isSmallScreen = $mdMedia('sm');

$scope.Toggle = function(showID, hideID){
  if (showID === "#col1") {
    var hideEl = angular.element(document.querySelector('#col2'));
    hideEl.attr('hide-sm','');
    hideEl = angular.element(document.querySelector('#col3'));
    hideEl.attr('hide-sm','');
    hideEl = angular.element(document.querySelector('#col4'));
    hideEl.attr('hide-sm','');
    hideEl = angular.element(document.querySelector('#col5'));
    hideEl.attr('hide-sm','');
    hideEl = angular.element(document.querySelector('#col6'));
    hideEl.attr('hide-sm','');
  }
  var showEl = angular.element(document.querySelector(showID));
  showEl.removeAttr('hide-sm');
  var hideEl = angular.element(document.querySelector(hideID));
  hideEl.attr('hide-sm','');
}

  $scope.sideMenu = {
    "Main" : ["Books","Chapters","Topics","Questions"],
    "Quizes" : ["Books","Quizes","Questions"],
    "Schedule" : ["Group","Sub Group","Quizes"],
    "Quiz" : ["Quiz"],
    "switchBoard" : ["1","2","3","4","5"]
  }
}]);
