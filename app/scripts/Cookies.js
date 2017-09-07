(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        $uibModal.open({
            templateUrl: '/templates/usermodal.html',
            size: 'sm',
            controller: 'UsernameModalCtrl as usermodal' 
        });
    }
  }

  angular
    .module('chatApp')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();