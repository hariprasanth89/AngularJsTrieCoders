app.controller("candidateCtrl", function ($scope) {
    $scope.msg = "Candidate";
    $scope.candidateLists = [
        {candidateId:"CD1",name:"Hari",mobileNo:1234567,mailId:"welcome@gmail.com"},
        {candidateId:"CD2",name:"tec",mobileNo:1234567,mailId:"welcome@gmail.com"},
        {candidateId:"CD3",name:"mani",mobileNo:1234567,mailId:"welcome@gmail.com"}
      ];
});