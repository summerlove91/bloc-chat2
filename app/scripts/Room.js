(function() {
  function Room($firebaseArray) {
      console.log("factory working")
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      console.log(rooms)
    Room.all = rooms;
    
    Room.add = function(rooms){
        // make room object however you want
        Room.all.$add(rooms)
//        Double check this part is adds to rooms
    }  
      
    $scope.workingRooms = rooms;
    return Room;
  }

  angular
    .module('chatApp')
    .factory('Room', ['$firebaseArray', Room]);
});
