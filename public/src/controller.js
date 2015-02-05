var app=angular.module('ContactsApp');
app.controller('ListController',function($scope,contact,$location){
	$scope.contacts=contact.query();

	$scope.show=function(id){
		$location.url('/contact/'+id);
	}
});
app.controller('NewController',function($scope,contact,$location){
	$scope.contact=new contact({
		firstname:['','text'],
		lastname:['','text'],
		email:['','email'],
		homephone:['','tel'],
		cellphone:['','text'],
		birthday:['','date'],
		website:['','url'],
		address:['','text'],
	});
	$scope.save=function(){
		$scope.contact.$save();
		$location.url('/contacts');
	};

});