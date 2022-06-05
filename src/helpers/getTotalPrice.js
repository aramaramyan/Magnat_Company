import getStorage from "./getStorage";

export default function getTotalPrice() {
  if(getStorage("basket")) {
    return JSON.parse(getStorage("basket")).reduce((aggr, val) => aggr += (val.price * val.count), 0);
  }
}