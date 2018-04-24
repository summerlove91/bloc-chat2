(function() {
    function MainCtrl($scope, Room, Message, $uibModal, $cookies) {
        $scope.rooms = Room.all;
        console.log($scope.rooms)
        $scope.currentRoom = null;
        $scope.currentUser = $cookies.get('blocChatCurrentUser');
        $scope.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal',
                backdrop: 'true'
            });
        }

        $scope.setCurrentRoom = function(room){
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
        }

        $scope.sendMessage = function () {
            $scope.newMessage.roomId = $scope.currentRoom.$id;
            $scope.newMessage.username = $scope.currentUser;
            Message.send($scope.newMessage);
        }
    }

    angular
        .module('chatApp')
        .controller('MainCtrl', ['$scope', 'Room', 'Message', '$uibModal', '$cookies', MainCtrl]);
})();
