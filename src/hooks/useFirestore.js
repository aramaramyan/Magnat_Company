import {
  doc,
  setDoc,
  updateDoc,
  increment,
  onSnapshot,
  collection,
  arrayUnion,
  arrayRemove,
  deleteField,
  getFirestore,
} from "firebase/firestore";
import firebaseApp from "../firebase";
import getStorage from "../helpers/getStorage";
import getObjFromArr from "../helpers/getObjFromArr";

const db = getFirestore(firebaseApp);

export default function useFirestore() {
  const addUserData = async (userID, fullName, email, signUpDate) => {
    try {
      return await setDoc(doc(db, "users", userID), {
        fullName,
        email,
        userID,
        image: null,
        signUpDate,
        cards: [],
        likes: [],
        history: [],
        dislikes: [],
        favorites: [],
        currentCard: {id: 0, name: "", numbers: ""},
      })
    } catch (err) {
      alert(err.message);
    }
  };

  const subscribeToUser = (setUser) => {
    return onSnapshot(doc(db, "users", getStorage("userID")), (doc) => {
      setUser(doc.data());
    });
  };

  const pushDataToFavorites = async (data) => {
    await updateDoc(doc(db, "users", getStorage("userID")), {
      favorites: arrayUnion(data)
    });
  };

  const popDataToFavorites = async (data) => {
    await updateDoc(doc(db, "users", getStorage("userID")), {
      favorites: arrayRemove(data)
    });
  };

  const addComment = async(path, productID, data, allReviews={}) => {
    await updateDoc(doc(db, path , productID), {
      reviews: {
        ...allReviews,
        [data.id]: data
      }
    });
  };

  const incrementProductStars = async (path, hookahID, number) => {
    await updateDoc(doc(db, path, hookahID), {
      stars: increment(number)
    });
  };

  const updateUserData = async (key, value) => {
    await updateDoc(doc(db, "users", getStorage("userID")), {
      [key]: value
    });
  };

  const subscribeToCollection = (path, setData) => {
    return onSnapshot(collection(db, path), snapshot => {
      const data = [];
      snapshot.docs.forEach(doc => {
        data.push(doc.data());
      });
      setData(data);
    }, error => {
      alert(error);
    });
  };

  const subscribeToProduct = (path, productID, setState) => {
    return onSnapshot(doc(db, path, productID), (doc) => {
      setState(doc.data());
    });
  };

  const likeComment = async (path, productID, commentID) => {
    await updateDoc(doc(db, "users", getStorage("userID")), {
      likes: arrayUnion(commentID)
    });

    await updateDoc(doc(db, path, productID), {
      ["reviews." + commentID + ".likes"]: increment(1)
    });
  };

  const dislikeComment = async (path, productID, commentID) => {
    await updateDoc(doc(db, "users", getStorage("userID")), {
      dislikes: arrayUnion(commentID)
    });

    await updateDoc(doc(db, path, productID), {
      ["reviews." + commentID + ".dislikes"]: increment(1)
    });
  };

  const removeLike = async (path, productID, commentID) => {
    await updateDoc(doc(db, "users", getStorage("userID")), {
      likes: arrayRemove(commentID)
    });

    await updateDoc(doc(db, path, productID), {
      ["reviews." + commentID + ".likes"]: increment(-1)
    });
  };

  const removeDislike = async (path, productID, commentID) => {
    await updateDoc(doc(db, "users", getStorage("userID")), {
      dislikes: arrayRemove(commentID)
    });

    await updateDoc(doc(db, path, productID), {
      ["reviews." + commentID + ".dislikes"]: increment(-1)
    });
  };

  const addCard = async(data, allCards) => {
    await updateDoc(doc(db, "users", getStorage("userID")), {
      cards: {
        ...allCards,
        [data.id]: data
      }
    });
  };

  const removeCard = async(cardId, allCards) => {
    const arr = allCards.filter(card => card.id !== cardId);
    const obj = getObjFromArr(arr);
    await updateDoc(doc(db, "users", getStorage("userID")), {
      cards: obj
    });
  };

  const setCurrentCard = async (data) => {
    await updateDoc(doc(db, "users", getStorage("userID")), {
      currentCard: data
    });
  };

  const addToHistory = async (data) => {
    await updateDoc(doc(db, "users", getStorage("userID")), {
      history: arrayUnion(data)
    });
  }

  return {
    addCard,
    removeLike,
    addComment,
    removeCard,
    likeComment,
    addUserData,
    addToHistory,
    removeDislike,
    updateUserData,
    dislikeComment,
    setCurrentCard,
    subscribeToUser,
    subscribeToProduct,
    popDataToFavorites,
    pushDataToFavorites,
    incrementProductStars,
    subscribeToCollection
  };
}