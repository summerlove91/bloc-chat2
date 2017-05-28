(function () {
  function Room($firebaseArray) {
      console.log("factory working")
    
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
    Room.all = rooms;
//    rooms.$add({name: "test"})
    
    Room.add = function(room) {
        rooms.$add({name: "room #" + index})
     };
 
    
    return Room;
  }

  angular
    .module('chatApp')
    .factory('Room', ['$firebaseArray', Room]);
})();