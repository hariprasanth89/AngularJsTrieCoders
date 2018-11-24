var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/candidate", {
        templateUrl : "view/candidate.html",
        controller : "candidateCtrl"
    })
    .when("/activities", {
        templateUrl : "view/activities.html",
        controller : "activitiesCtrl"
    });
});

