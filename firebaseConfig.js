// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcpJdgKJOcPA-PXQo3axWAVxSx18i4dIE",
    authDomain: "sandrinho-lanches.firebaseapp.com",
    projectId: "sandrinho-lanches",
    storageBucket: "sandrinho-lanches.appspot.com",
    messagingSenderId: "793861711932",
    appId: "1:793861711932:web:766b65c350dba0c2857b39",
    measurementId: "G-BELSBX8FFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);