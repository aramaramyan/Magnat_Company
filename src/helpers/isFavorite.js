export default function isFavorite(arr, current) {
  const result = arr.filter(item => item === current);
  return !!result.length;
}