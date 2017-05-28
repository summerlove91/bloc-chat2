(function() {
    function MainCtrl($scope, Room, $uibModal) {
        $scope.rooms = Room.all;
        console.log($scope.rooms)
        $scope.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
    }

    angular
        .module('chatApp')
        .controller('MainCtrl', ['$scope', 'Room', '$uibModal', MainCtrl]);
})();