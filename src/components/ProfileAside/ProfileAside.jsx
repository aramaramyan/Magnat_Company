import {useState} from "react";
import useFireStorage from "../../hooks/useFireStorage";
import mailIcon from "./../../icons/mail.svg";
import pencilIcon from "./../../icons/pencil.svg"
import "./ProfileAside.css";
import getUserNameFirstLetter from "../../helpers/getUserNameFirstLetter/getUserNameFirstLetter";

export default function ProfileAside({user}) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState("");
  const {uploadFile} = useFireStorage();

  function handleFile(evt) {
    if (evt.target.files[0]) {
      setFile(evt.target.files[0]);
    }
  }

  function handleSubmit() {
    uploadFile(file, setFile, setLoading);
    setFile(null);
  }

  return (
    <div className="ProfileAside">
      <div className="avatar-upload">
        <div className="avatar-edit">
          <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" onChange={handleFile}/>
          <label htmlFor="imageUpload">
            <img src={pencilIcon} alt="Pencil Icon" draggable={false}/>
          </label>
        </div>
        <div className="avatar-preview">
          {user.image ? <img src={user.image} alt="User Image" draggable={false}/> :
            <p>{getUserNameFirstLetter(user.fullName)}</p>}
        </div>
      </div>
      <div className="img_loading_wrapper">
        {loading && (
          <div className="loading_progress">
            <p>{loading}</p>
          </div>
        )}
        {file && (
          <div className="submit_image" onClick={handleSubmit}>
            <p>Submit image</p>
          </div>
        )}
      </div>
      <div className="item">
        <img src={mailIcon} alt="Mail Icon" className="icon24"/>
        <p>{user.email}</p>
      </div>
      <div className="item">
        <p>Since</p>
        <p>{user.signUpDate}</p>
      </div>
    </div>
  );
}