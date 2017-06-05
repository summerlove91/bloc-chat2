(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    Message.all = messages;
      
    Message.getByRoomId = function(roomId) {
        var messagesForRoom = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        
        
        return messagesForRoom;

        };
      
    Message.send = function(newMessage) {
        messages.$add(newMessage);
        newMessage.content = null;
    };
    
    return Message;
    }
    
//    function Message.add takes in roomId, text, userId(later)
//        add this stuff alongside a createdAt timestamp
//        text could also just be grabbed from DOM element
//            maybe after storing text, clear the text input/string(later)
//    Hook it up to MainCtrl
//    Calling the function from html ng-directives
  

  angular
    .module ('chatApp')
    .factory('Message', ['$firebaseArray', Message]);
})();