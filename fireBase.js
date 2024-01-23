

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyABbmKL4Ao6YxlDEgkBKIcGJZt3_0AN0lA",
    authDomain: "coursadrarjs.firebaseapp.com",
    databaseURL: "https://coursadrarjs-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "coursadrarjs",
    storageBucket: "coursadrarjs.appspot.com",
    messagingSenderId: "169792350219",
    appId: "1:169792350219:web:f7bc2b45b28283db5b3f0e",
    measurementId: "G-7HYNWNZ0B0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

