import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebaseApp from "../firebase";
import useFirestore from "./useFirestore";

const storage = getStorage(firebaseApp);

export default function useFireStorage() {
  const {updateUserData} = useFirestore();

  const uploadFile = (file, setFile, setLoading) => {
    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setLoading('Upload is ' + Math.trunc(progress) + '% done');
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          updateUserData("image", downloadURL);
        })
        setLoading("Image is uploaded")
        const timeoutId = setTimeout(() => {
          setLoading("");
          clearTimeout(timeoutId)
        }, 2000);
      }
    );
  };

  return {
    uploadFile
  };

}