angular.module('myApp', []).controller('namesCtrl', function ($scope) {
    $scope.objectarray =
        [{ firstname: "Julia", lastname: "Chen", email: "julia@gmail.com" },
        { firstname: "Bimal", lastname: "Parajuli", email: "bimal@gmail.com" }];

});