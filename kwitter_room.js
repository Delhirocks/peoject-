function addUser() {
    user_name = document.getElementById("user_name").Value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names  +"</div><hr>";
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;

        });
    });
}
getData();