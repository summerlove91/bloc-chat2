(function() {
   
    function ModalCtrl(Room, $scope, $uibModalInstance) {
         $scope.cancel = function () {
             console.log("cancel room")
             $uibModalInstance.dismiss('cancel');
         };
         
         $scope.create = function () {
             Room.add(this.newRoom);
             $uibModalInstance.close();
         };
     }

angular
    .module('chatApp')
    .controller('ModalCtrl', ['Room', '$scope', '$uibModalInstance', '$cookies', ModalCtrl]);
})()