var app = angular.module('myApp', []).controller('myCtrl', function ($scope) {

    $scope.names = [{ firstname: "Bimal", lastname: "Parajuli" },
    { firstname: "Julia", lastname: "Chen" }
    ]


    this.submitName = function () {
        this.names.push({ firstname: this.object.firstname, lastname: this.object.lastname });

    }
    $scope.list = [];
    $scope.text = 'hello';
    $scope.submitText = function () {
        if ($scope.text) {
            $scope.list.push(this.text);
            $scope.text = '';
        }
    };


});
