import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebase";

const auth = getAuth(firebaseApp);

const signUp = async (email, password, setFullName, setEmail, setPassword) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
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
      case ("auth/internal-error"): {
        setPassword(prev => {
          return {
            ...prev,
            error: "Invalid email"
          };
        });
        break;
      }
      case ("auth/weak-password"): {
        setPassword(prev => {
          return {
            ...prev,
            error: "Password must be over 6 chars"
          };
        });
        break;
      }
      case ("auth/email-already-in-use"): {
        setPassword(prev => {
          return {
            ...prev,
            error: "Email already in use"
          };
        });
        break;
      }
    }
  }
}

export default signUp;