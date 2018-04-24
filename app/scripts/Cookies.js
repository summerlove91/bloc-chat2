(function() {
  function BlocChatCookies($cookies, $uibModal, $location) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        $location.path('landing');
        // $uibModal.open({
        //     templateUrl: '/templates/usermodal.html',
        //     size: 'sm',
        //     controller: 'UsernameModalCtrl as usermodal'
        // });
    }
  }

  angular
    .module('chatApp')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
