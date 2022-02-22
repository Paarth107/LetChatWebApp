var firebaseConfig = {
    apiKey: "AIzaSyAJvN4yq_L0qhuGa7Qlfx-DH99C6VckmtA",
    authDomain: "kwitterproject-b76df.firebaseapp.com",
    databaseURL: "https://kwitterproject-b76df-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-b76df",
    storageBucket: "kwitterproject-b76df.appspot.com",
    messagingSenderId: "465455375377",
    appId: "1:465455375377:web:863478cfff00a7612ffdb0"
  };    

firebase.initializeApp(firebaseConfig);

function addUser(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("user_name", username);
    window.location= "Kwitter_room.html";
};

document.getElementById("username2").innerHTML= "Welcome" + username + "!"

function addRoom(){
    room_name= document.getElementById("lol").value;
    firebase.database().ref("/").child(room_name).update({
     purpose: "adding room name"
    });
    localStorage.setItem("room_name" , room_name);
    window.location="kwitter_page.html";

    function getData(){ firebase.database().ref("/").on( 'value', function(snapshot) {document.getElementById("output").innerHTML=row;} );
         Room_names= childKey;
         console.log("Room name-" + Room_names);
         row="<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+ "</div><hr>";

         function redirectToRoomName(name)
         {
             console.log(name);
             localStorage.setItem("room_name", name);
             window.location="kwitter_page.html"
         }
         };
         
};
getData();


