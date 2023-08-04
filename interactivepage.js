var firebaseConfig = {
    apiKey: "AIzaSyCfRyloxAkP8bZU1mipSuPPx1ZSR8jxESE",
    authDomain: "timeify-d2de1.firebaseapp.com",
    databaseURL: "https://timeify-d2de1-default-rtdb.firebaseio.com",
    projectId: "timeify-d2de1",
    storageBucket: "timeify-d2de1.appspot.com",
    messagingSenderId: "864690456776",
    appId: "1:864690456776:web:28bc7135250878f5d07dfd",
    measurementId: "G-K95N8FRNM1"
};

firebase.initializeApp(firebaseConfig);



function get() {
    yearInput = document.getElementById("yearInput").value;

    firebase.database().ref(yearInput).child("Event").on('value', (kvp) => {
        console.log(kvp.val());
        document.getElementById("info").innerHTML=kvp.val();
    });

}