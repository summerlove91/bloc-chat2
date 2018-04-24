(function (){

    function UsernameModalCtrl($scope, $cookies, $location){
        $scope.setUsername = function(){
            $cookies.put('blocChatCurrentUser', $scope.username);
            $location.path('/main.html');
            // $scope.$state.go('/main');
            // $uibModalInstance.close();
            console.log("username created!!")
        };
    }

angular
    .module('chatApp')
    .controller('UsernameModalCtrl', ['$scope', '$uibModalInstance', '$cookies', '$location', UsernameModalCtrl]);
})()
