import {v4} from "uuid";

export default function getID() {
  return v4().split("-")[0];
}