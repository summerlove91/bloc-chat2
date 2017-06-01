(function() {
    function MainCtrl($scope, Room, Message, $uibModal) {
        $scope.rooms = Room.all;
        console.log($scope.rooms)
        $scope.currentRoom = null;
        $scope.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
        
        $scope.setCurrentRoom = function(room){
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
        }
    }

    angular
        .module('chatApp')
        .controller('MainCtrl', ['$scope', 'Room', 'Message', '$uibModal', MainCtrl]);
})();