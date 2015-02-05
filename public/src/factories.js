var app=angular.module('ContactsApp');
app.factory('contact',function($resource){
	return $resource('/api/contact/:id',{id:'@id'},{'update':{method:'PUT'}} );
});