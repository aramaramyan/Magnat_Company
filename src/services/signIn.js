import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import setStorage from "../helpers/setStorage";
import app from "./../firebase";

const auth = getAuth(app);

const signIn = (email, password, setEmail, setPassword, navigate) => {
  signInWithEmailAndPassword(auth, email, password).then((res) => {
    setStorage("userID", res.user.uid);
    navigate("/");
  }).catch(err => {
    switch (err.code) {
      case ("auth/invalid-email"): {
        setEmail(prev => {
          return {
            ...prev,
            error: "Invalid email"
          };
        });
        break;
      }
      case ("auth/wrong-password"): {
        setPassword(prev => {
          return {
            ...prev,
            error: "Wrong Password"
          };
        });
        break;
      }
      case ("auth/user-not-found"): {
        setPassword(prev => {
          return {
            ...prev,
            error: "User not found"
          };
        });
        break;
      }
    }
  });
}

export default signIn;