angular
	.module('ngCribs')
	.controller('cribsController',function($scope,cribsFactory){

		$scope.cribs ;

		 cribsFactory.getCribs().success(function(data){
		 	$scope.cribs =data;

		 }).error(function(error){
		 	console.log(error);
		 });

		 $scope.sayHello =function(){
		 	console.log("Hello!");
		 }
		
	});