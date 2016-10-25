angular.module('twitterController', [])
  .controller('mainController', ['$scope', '$http', 'Twitter', ($scope, $http, Twitter) => {
    $scope.twitterHandle = "";

    Twitter.get()
      .success(() => {
        $scope.tweets = [];
      });

    $scope.search = () => {
      if ($scope.twitterHandle.data != undefined) {
        Twitter.getTweets($scope.twitterHandle)
          .success((data) => {
            $scope.tweets = JSON.parse(data);
            console.log(JSON.parse(data));
        });
      }
    }

  }]);
