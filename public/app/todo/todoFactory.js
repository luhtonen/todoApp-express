'use strict';

angular.module('todo')
  .factory('Todos', ['$resource', function($resource) {
    return $resource('/todos/:id', null, {
      'update': { method: 'PUT' },
      'get': { method: 'GET'},
      'save': { method: 'POST'},
      'query': { method: 'GET', isArray: true},
      'remove': { method: 'DELETE'}
    });
  }]);