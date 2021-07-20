// Unique Firebase Object
var firebaseConfig = {
    apiKey: "AIzaSyAIG_z-0SymhWECtVYElwP0J7IPEEPa9Wk",
    authDomain: "new7-e6e8a.firebaseapp.com",
    projectId: "new7-e6e8a",
    storageBucket: "new7-e6e8a.appspot.com",
    messagingSenderId: "776905314883",
    appId: "1:776905314883:web:361188dee54e86e8d7baf6",
    measurementId: "G-FVHJ26TB50"
  };

// Initialize Firebase Server
firebase.initializeApp(firebaseConfig);
  firebase.analytics();
var firestore = firebase.firestore()

// Variable to access database collection
const db = firestore.collection("formData")

// Get submit form
let submitButton = document.getElementById('submit')

// Create event listener to allow form submission
submitButton.addEventListener("click", (e) => {
    //prevent default form submisssion
    e.preventDefault()

    // Get form values
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let message = document.getElementById('message').value

    // save form data to Firebase
    db.doc().set({
        name: name,
        email: email,
        phone: phone,
        message: message
    }).then( () => {
        console.log("Data saved")
    }).catch((error) => {
        console.log(error)
    })
})
