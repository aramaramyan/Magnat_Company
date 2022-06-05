import getStorage from "./getStorage";
import setStorage from "./setStorage";

export default function addProductToBasket(data) {
  if(getStorage("basket")) {
    const prev = JSON.parse(getStorage("basket"));
    setStorage("basket", JSON.stringify([...prev, data]));
    return prev;
  } else {
    setStorage("basket", JSON.stringify([data]));
    return [data];
  }
}