import getStorage from "./getStorage";
import setStorage from "./setStorage";

export default function removeProductFromBasket(productID) {
  const basket = JSON.parse(getStorage("basket"));
  const result = basket.filter(item => item.id !== productID);
  setStorage("basket", JSON.stringify(result));
  return result;
}