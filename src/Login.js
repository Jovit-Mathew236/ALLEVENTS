import { Firebase } from "./firebase/config";
import './stylesheets/login.css';
const Login = () => {
    const firebase = Firebase;
    var provider = new firebase.auth.GoogleAuthProvider()
    return (
        <div className='login_page'>
            <div className="g-btn-div">
                <button className="g-btn" onClick={() => {
                    firebase.auth().signInWithPopup(provider).then((result) => {
                        console.log("success", result);
                        // firebase.firestore().collection('user').doc(result.user.email).get().then((doc) => {
                            // if (doc.exists) {
                            //     console.log(doc.data());
                            // } else {
                                firebase.firestore().collection('user').doc(result.user.email).update({
                                    profilePic: result.user.photoURL ? result.user.photoURL : "https://raw.githubusercontent.com/Jovit-Mathew236/Mellow/master/src/images/avathar.webp",
                                }).then(() => {
                                    // window.location.reload();
                                })
                            // }
                        // })
                    }).catch((error) => {
                        var errorMessage = error.message;
                        console.log(errorMessage);
                    });
                }}><p className='g-logo'></p>Continue with Google</button>
            </div>
        </div>
    )
}

export default Login