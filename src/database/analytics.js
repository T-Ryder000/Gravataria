import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyClTBfFx5RGW0L06bXhzWk9RCHh6SfMCkU",
  authDomain: "gravataria-king.firebaseapp.com",
  projectId: "gravataria-king",
  storageBucket: "gravataria-king.appspot.com",
  messagingSenderId: "916156570864",
  appId: "1:916156570864:web:56223118f5dfc339103635",
  measurementId: "G-J4QKRWMSL4"
};

const app = initializeApp(firebaseConfig);

// Verifica se Analytics é suportado antes de inicializar
isSupported().then(supported => {
  if (supported) {
    const analytics = getAnalytics(app);
    console.log("Analytics inicializado com sucesso.");
  } else {
    console.log("Analytics não é suportado neste ambiente.");
  }
});
