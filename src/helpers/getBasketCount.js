import getStorage from "./getStorage";

export default function getBasketCount() {
  if(getStorage("basket")) {
    return JSON.parse(getStorage("basket")).length;
  }

  return 0;
}