import { initializeApp } from "firebase/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgC2IQT_1dbRrxExIuyexPIo_REsjDOgI",
    authDomain: "login-signup-9ad90.firebaseapp.com",
    projectId: "login-signup-9ad90",
    storageBucket: "login-signup-9ad90.appspot.com",
    messagingSenderId: "1033388960840",
    appId: "1:1033388960840:web:4301c5fe27cf64ae02fc7d",
};

const fire = initializeApp(firebaseConfig);

export default fire;
