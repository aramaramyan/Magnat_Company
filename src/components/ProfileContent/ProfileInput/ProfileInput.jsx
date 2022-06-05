import {useRef, useState} from "react";
import useFirestore from "../../../hooks/useFirestore";
import saveIcon from "./../../../icons/save.svg";
import editIcon from "./../../../icons/edit.svg";
import "./ProfileInput.css";
import nameValidation from "../../../helpers/nameValidation/nameValidation";

export default function ProfileInput({value = ""}) {
  const [state, setState] = useState(value);
  const [isReadonly, setIsReadonly] = useState(true);
  const [error, setError] = useState(false);
  const input = useRef(null);
  const { updateUserData } = useFirestore();

  function handleInput(evt) {
    input.current.focus();
    setState(evt.target.value);
  }

  function edit() {
    input.current.focus();
    setIsReadonly(!isReadonly);
  }

  function save() {
    state && setIsReadonly(!isReadonly);
    if(nameValidation(state)) {
      updateUserData("fullName", state);
    } else {

    }
  }

  return (
    <div className="ProfileInput">
      <input
        ref={input}
        type="text"
        value={state}
        onChange={handleInput}
        readOnly={isReadonly}
        placeholder="Please fill input"
      />
      {isReadonly ? (
        <div className="edit_name" onClick={edit}>
          <img src={editIcon} alt="Edit Icon"/>
          <p>Edit name</p>
        </div>
      ) : (
        <div className="save_name" onClick={save}>
          <img src={saveIcon} alt="Save Icon"/>
          <p>Save</p>
        </div>
      )}
    </div>
  );
}