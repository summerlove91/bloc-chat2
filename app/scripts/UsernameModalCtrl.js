(function (){
 
    function UsernameModalCtrl($scope, $uibModalInstance, $cookies){
        $scope.setUsername = function(){
            $cookies.put('blocChatCurrentUser', $scope.username);
            $uibModalInstance.close();
            console.log("username created!!")
        };
        
    }
    
angular
    .module('chatApp')
    .controller('UsernameModalCtrl', ['$scope', '$uibModalInstance', '$cookies', UsernameModalCtrl]);
})()