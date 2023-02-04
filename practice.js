var firebaseConfig ={
    apiKey: "AIzaSyBBhSjPnmMF1kbHuIVNDYtG1fuhTJutrgc",
    authDomain: "kwittre-project.firebaseapp.com",
    projectId: "kwittre-project",
    storageBucket: "kwittre-project.appspot.com",
    messagingSenderId: "342909460628",
    appId: "1:342909460628:web:0f5d210f5ce7032f7c5481",
    measurementId: "G-X3HEG24P9G"
  };
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome   " + user_name + "!" ;

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding room name"
    });
    localStorage.setItem("room_name" , room_name);
    window.location="kwitter_page.html";
}
function addUser()
{
    user_name = document.getAnimationsElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
}

function getData(){ firebase.database().ref("/").on('value' , function(snapshot) {document.getElementById("output").innerHTML})
 Group_name = childkey;
}
getData()