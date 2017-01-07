(function(){

  "use strict";

  angular.module('ruler')
        .controller('persosCtrl', persosCtrl)
        .directive('loading', ['$http', function ($http) {
            return {
              restrict: 'A',
              link: function (scope, element, attrs) {
                scope.isLoading = function () {
                  return $http.pendingRequests.length > 0;
                };
                scope.$watch(scope.isLoading, function (value) {
                  if (value) {
                    element.removeClass('ng-hide');
                  } else {
                    element.addClass('ng-hide');
                  }
                });
              }
            };
        }])
        .filter('selectById', function(){
          return function(input, id){

            var out = [];

              angular.forEach(input, function(user){
                if(id.includes(user.id)){
                  out.push(user);
                }
              });


            return out;
          };
        });

  function persosCtrl($scope, $http){

    console.log("Scope Chargée");

    $scope.customGender = true;

    if (sessionStorage.getItem("ssCompare") === null) {
      $scope.persoSelected = [];
    } else {
      $scope.persoSelected  = JSON.parse(sessionStorage.getItem("ssCompare"));
    }


    $http.get("dist/datas/data.json").
          success(function(data, status) {
            console.log('JSON Gen : ', data);
          	$scope.persos = data;
            if ($.inArray(9999, $scope.persoSelected) !== -1)
            {
              $scope.persos.push(JSON.parse(sessionStorage.getItem("ssCustom")));
            }
            $scope.tabAutoComplete = [];
            for (var i = 0; i < $scope.persos.length; i++) {
              $scope.tabAutoComplete.push($scope.persos[i].firstname + " " + $scope.persos[i].lastname);
            }
          });

    $scope.ngModelOptionsSelected = function(value) {
      if (arguments.length) {
        _selected = value;
      } else {
        return _selected;
      }
    };

    $scope.modelOptions = {
      debounce: {
        default: 500,
        blur: 250
      },
      getterSetter: true
    };

    $scope.addPerso = function(){

      var idArray = $scope.tabAutoComplete.indexOf($scope.selected);

      if (idArray !== -1 && $scope.persoSelected.indexOf(idArray) === -1) {
        $scope.persoSelected.push(idArray);
      }

      $scope.selected = "";

      sessionStorage.setItem("ssCompare",JSON.stringify($scope.persoSelected));

    };

    $scope.addCustomPerso = function(isValid){

      if (isValid) {

        var index = $scope.persos.findIndex(function(item, i){
          return item.id === 9999;
        });

        var size = 175;
        if (parseInt($scope.customSize) >= 80 && parseInt($scope.customSize) <= 225)
        {
            size = parseInt($scope.customSize);
        }


        var customAvatar = {
          "id": 9999,
          "firstname": "",
          "lastname": $scope.customFirstName,
          "gender": !$scope.customGender,
          "pictureUrl": "blank.png",
          "size": size
        };

        if (index !== -1)
        {
          $scope.persos.splice(index, 1);
        }

        $scope.persos.push(customAvatar);
        $scope.persoSelected.push(9999);

        $scope.customSize = "";
        $scope.customFirstName = "";
        $scope.customGender = true;

        console.log($scope.persos);
        console.log($scope.persoSelected);

        sessionStorage.setItem("ssCompare",JSON.stringify($scope.persoSelected));
        sessionStorage.setItem("ssCustom",JSON.stringify(customAvatar));
      }

    };

    $scope.deletePerso = function(id){

      var index = $scope.persoSelected.indexOf(id);
      $scope.persoSelected.splice(index, 1);

      sessionStorage.setItem("ssCompare",JSON.stringify($scope.persoSelected));

    };

  }

}());
