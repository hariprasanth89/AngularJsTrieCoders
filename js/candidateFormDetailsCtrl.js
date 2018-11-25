app.controller("candidateFormDetailsCtrl", function ($scope) {
    $scope.msg = "candidateFormDetailsCtrl"
    $scope.candidateUserDetails = [];

    $scope.candidateList = {
        candidateId : '',
        candidateName:'',
        candidateMailId:'',
        candidateMobileNo:'',
        candidateSource:'',
        referredBy : '',
        qualification : '',
        passedOut : ''
    };

$scope.save = function(){    
$scope.candidateUserDetails.push($scope.candidateList); 
//$scope.candidateUserDetails = angular.copy($scope.candidateList);
}

});