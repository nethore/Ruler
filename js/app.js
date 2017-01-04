(function(){

  "use strict";

  angular.module('ruler', ['ui.bootstrap', 'ui.bootstrap.typeahead'])
        .controller('persosCtrl', persosCtrl)
        .controller('addCtrl', addCtrl)
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
        })
        .factory('UsersMgmt', function($rootScope) {
          return {
            propagation: function(users) {
              $rootScope.$broadcast('TransfertUsers', users);
            },
            propagationFiltres: function(nomModel, valeurModele) {
              $rootScope.$broadcast(nomModel, valeurModele);
            }
          };

        });

  function persosCtrl($scope, $http, UsersMgmt){

    console.log("Scope Chargée");

    $scope.customGender = true;

    $scope.persoSelected = [];

    $http.get("dist/datas/data.json").
          success(function(data, status) {
            console.log('JSON Gen : ', data);
          	$scope.persos = data;
            $scope.tabAutoComplete = [];
            for (var i = 0; i < $scope.persos.length; i++) {
              $scope.tabAutoComplete.push($scope.persos[i].firstname + " " + $scope.persos[i].lastname);
            }
            console.log($scope.tabAutoComplete);
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
          "picture": "blank.png",
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
      }

    };

    $scope.deletePerso = function(id){

      var index = $scope.persoSelected.indexOf(id);
      $scope.persoSelected.splice(index, 1);

      console.log($scope.persoSelected);
    };

  }

  function addCtrl($scope, UsersMgmt){


  }


}());
