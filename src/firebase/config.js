import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import 'firebase/compat/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6b3FDFQVjJnh9pWyAqdkoDUpqMnsKQbM",
    authDomain: "asthra7-5533a.firebaseapp.com",
    projectId: "asthra7-5533a",
    storageBucket: "asthra7-5533a.appspot.com",
    messagingSenderId: "1068571170367",
    appId: "1:1068571170367:web:8d1cb16d3d629d7006ca8a",
    measurementId: "G-ZFQJ1Z4EP9"
};

// const firebaseConfig = {
//     apiKey: "AIzaSyA6QNNPgQo900PJuejFAVbigSpc6WELFrE",
//     authDomain: "test-65521.firebaseapp.com",
//     projectId: "test-65521",
//     storageBucket: "test-65521.appspot.com",
//     messagingSenderId: "982809727726",
//     appId: "1:982809727726:web:6f81a79d2e444ae4ef59ff",
//     measurementId: "G-4QKWDKKRX2"
// };

// const firebaseConfig = {
//     apiKey: "AIzaSyDbVEM8iEwW1Z7cXkGdHpcSfTD_U9B5RaA",
//     authDomain: "new-test-3cb87.firebaseapp.com",
//     projectId: "new-test-3cb87",
//     storageBucket: "new-test-3cb87.appspot.com",
//     messagingSenderId: "195659080412",
//     appId: "1:195659080412:web:8dc2690e5ca35caf120a19",
//     measurementId: "G-L93N4GVFR2"
// };
// const firebaseConfig = {
//     apiKey: "AIzaSyAoO59S7kcUTrfWq15Ui3oT9ULyvUJbCIU",
//     authDomain: "new-test2-79839.firebaseapp.com",
//     projectId: "new-test2-79839",
//     storageBucket: "new-test2-79839.appspot.com",
//     messagingSenderId: "656244988709",
//     appId: "1:656244988709:web:2ce3c2857857bf4fa098cc",
//     measurementId: "G-09Z9HCDJP3"
// };

// const firebaseConfig = {
//     apiKey: "AIzaSyAQyn5YnOmnKoaKbwiCK8qHvxUObCEZEk4",
//     authDomain: "new-test3-114bb.firebaseapp.com",
//     projectId: "new-test3-114bb",
//     storageBucket: "new-test3-114bb.appspot.com",
//     messagingSenderId: "818598652190",
//     appId: "1:818598652190:web:e600df9fdbd19f0ada410f",
//     measurementId: "G-F0PVDWWJTZ"
// };


export default firebase.initializeApp(firebaseConfig)
export { firebase as Firebase }