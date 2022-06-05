import getStorage from "../../helpers/getStorage";
import bagPNG from "./../../icons/bag.png";
import trashIcon from "./../../icons/trash.svg";
import "./AddButton.css";

export default function AddButton({id, add, remove}) {
  const basketArr = JSON.parse(getStorage("basket")) || [];
  const added = basketArr.filter(item => item.id === id);

  return !!added.length? (
    <div className="AddedButton" onClick={() => remove(id)}>
      <p>REMOVE<br/></p>
      <img src={trashIcon} alt="Trash Icon" className="icon24"/>
    </div>
  ) : (
    <div className="AddButton" onClick={add}>
      <p>ADD TO</p>
      <img src={bagPNG} alt="Bag Icon" className="icon32"/>
    </div>
  );
}