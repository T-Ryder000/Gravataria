// const admin = require("firebase-admin");

// // Inicializar o Firebase com a chave de serviço
// var serviceAccount = {

// };

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://gravataria-king.firebaseio.com" // URL correto do banco Firestore
// });

// // Inicializar o Firestore
// const db = admin.firestore();

// // Acessar a coleção de produtos
// const productsCollection = db.collection('products');  // Certifique-se de que o nome da coleção está correto

// module.exports = {db, admin, productsCollection};


const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');


const firebaseConfig = {
  apiKey: "AIzaSyClTBfFx5RGW0L06bXhzWk9RCHh6SfMCkU",
  authDomain: "gravataria-king.firebaseapp.com",
  projectId: "gravataria-king",
  storageBucket: "gravataria-king.firebasestorage.app",
  messagingSenderId: "916156570864",
  appId: "1:916156570864:web:56223118f5dfc339103635",
  measurementId: "G-J4QKRWMSL4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;
