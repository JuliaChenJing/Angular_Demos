var app = angular.module('myApp', []).controller('myCtrl', function ($scope) {

    $scope.names = [{ firstname: "Bimal", lastname: "Parajuli" },
    { firstname: "Julia", lastname: "Chen" }]


    this.submitButton = function () {
        this.names.push({ firstname: this.object.firstname, lastname: this.object.lastname });
        console("clicked");
    }
});
