export default function getSortedArrFromObj(obj) {
  const arr = [];

  for(let key in obj) {
    if(key) {
      arr.push(obj[key]);
    }
  }

  arr.sort((a, b) => a.id - b.id);

  return arr;
}