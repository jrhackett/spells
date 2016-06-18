/**
 * Created by jacob on 6/15/2016.
 */
var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/spells", {
            templateUrl: "spells/partials/spells-partial.html",
            controller: "SpellListController"
        })
        .when("/my-spellbook", {
            templateUrl: "spells/partials/spells-partial.html",
            controller: "SpellBookController"
        })
        .otherwise({
            redirectTo: "/spells"
        });

    $locationProvider.html5Mode(true);
});

//navbar controller
myApp.controller("NavBarController", function($scope) {
    $scope.brand = "Spells";
    $scope.first = "Level";
    $scope.second = "School";
    $scope.third = "Class";
});

//spell list controller
myApp.controller("SpellListController", function($scope, $http) {
    $http.get('spells/resources/spells.json').then(function(response) {
        $scope.spells = response.data;
    });

    $scope.handleButtonClick = function(name) {
        jQuery("#" + name + " .spell-details").slideToggle();
        var button = $jq("#" + name + " div:nth-of-type(1) button");
        button.text() === "Show" ? button.text("Hide") : button.text("Show");
    }
});

myApp.controller("SpellBookController", function($scope) {

});