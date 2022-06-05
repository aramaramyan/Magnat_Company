export default function getUserNameFirstLetter(name) {
  if(name) {
    return name.slice(0, 1).toUpperCase();
  }
}