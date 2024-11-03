// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js ";


import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApDujcl_hDT94xUVTwXWr8O5h_sLjZpQ0",
    authDomain: "login-form-2d361.firebaseapp.com",
    projectId: "login-form-2d361",
    storageBucket: "login-form-2d361.firebasestorage.app",
    messagingSenderId: "758671717231",
    appId: "1:758671717231:web:479c148286a5e9c040ae9a",
    measurementId: "G-DSDHBJNKC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// inputt
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
// submiy button
const submit = document.getElementById('submit').value;
// submit.addEventListener("click", function (event)){
//     event.preventDefault
// }




function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("errorMessage");

    // Check if username has valid characters
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
        errorMessage.textContent = "Username can only contain letters, numbers, and underscores.";
        return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    // Check password length and complexity
    if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        errorMessage.textContent = "Password must be at least 8 characters long and contain an uppercase letter and a number.";
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return false;
    }

    // Clear error message on successful validation
    errorMessage.textContent = "";
    alert("Form submitted successfully!");

    return true;  // This would send the form data if attached to a backend
}








