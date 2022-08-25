// import { initializeApp, firebase } from "firebase/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCgC2IQT_1dbRrxExIuyexPIo_REsjDOgI",
    authDomain: "login-signup-9ad90.firebaseapp.com",
    projectId: "login-signup-9ad90",
    storageBucket: "login-signup-9ad90.appspot.com",
    messagingSenderId: "1033388960840",
    appId: "1:1033388960840:web:4301c5fe27cf64ae02fc7d",
};
let fire;
fire = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
// if (!firebase.apps.length) {
//     fire = initializeApp({ firebaseConfig });
// } else {
// fire = firebase.app(); // if already initialized, use that one
// }

export default fire;
