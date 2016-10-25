angular.module('twitterService', [])
  .factory('Twitter', ['$http', ($http) => {
    return {
      get: () => {
        return $http.get('/');
      },
      getTweets: (handle) => {
        return $http.post('/tweets/', handle);
      }
    }
  }]);
