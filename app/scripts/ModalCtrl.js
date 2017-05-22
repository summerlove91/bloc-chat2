angular.module('chatApp').controller('ModalCtrl', function ($uibModal, $document, $scope){
    $scope.open = function (size) {
        
        var modal = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: '/templates/modal.html'
            scope: $scope
        });
        
        $scope.modalInstance = modal;
        return modal.result
    };
    
    $scope.modalPopupTrigger = function() {
        $scope.modalPopup()
          .then(function(data) {
            $scope.handleSuccess(data);
          })
          .then(null, function(reason) {
            $scope.handleDismiss(reason);
          });
      };
    
    $scope.yes = function(){
        $scope.modalInstance.close('Room Created!')
    };
    $scope.no = function(){
        $scope.modalInstance.dismiss('No Room is Created!')
    }
    
})