(function(){

  "use strict";

  angular.module('ruler')
        .controller('listCtrl', persosCtrl)
        .filter('selectByLtr', function(){
          return function(input, ltr){
            var out = [];

              angular.forEach(input, function(user){
                var lastLower = user.lastname.toLowerCase().substr(0,1);

                console.log(lastLower);
                if(lastLower == ltr){
                  out.push(user);
                }
              });

            return out;
          };
        });

  function persosCtrl($scope, $http, $routeParams){

    $http.get("http://localhost:8000/json").
          success(function(data, status) {
            console.log('JSON Gen : ', data);

            $scope.persos = data;
          });

    $scope.lettre = $routeParams.ltr || "a";
  }

}());
