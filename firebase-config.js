// =====================================================================
// CONFIGURACIÓN DE FIREBASE - Liga Premier de Acapulco
// =====================================================================
// Este archivo se usa en index.html, admin.html y arbitro.html.
// Sube este archivo junto con los 3 .html a la misma carpeta en GitHub,
// para que los <script src="firebase-config.js"> lo encuentren.
// =====================================================================

const firebaseConfig = {
  apiKey: "AIzaSyDG07c_D4qtCJXap9J1ppU8xLk3IdWYOXo",
  authDomain: "liga-premier-acapulco.firebaseapp.com",
  databaseURL: "https://liga-premier-acapulco-default-rtdb.firebaseio.com",
  projectId: "liga-premier-acapulco",
  storageBucket: "liga-premier-acapulco.firebasestorage.app",
  messagingSenderId: "426642299369",
  appId: "1:426642299369:web:b3486f21982fd5f3515378"
};

firebase.initializeApp(firebaseConfig);
