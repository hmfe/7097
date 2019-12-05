angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function(todoData) {
				
				return $http.post('/api/todoss',todoData);
			},
			create : function(todoData) {
				return $http.post('/api/create', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		}
	}]).
	factory('Keywords', ['$http',function($http) {
		return {
			
			get : function() {
				return $http.get('/api/todos');
			}
			
		}
	}]);;