import getStorage from "./getStorage";
import setStorage from "./setStorage";

export default function incrementDecrement(productID, number) {
  const data = JSON.parse(getStorage("basket"));

  const result = data.map(item => {
    if(item.id === productID) {
      return {
        ...item,
        count: item.count + number
      }
    }
    return item;
  });

  setStorage("basket", JSON.stringify(result));
  return result;
}