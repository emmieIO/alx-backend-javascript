export default function hasValuesFromArray(set, array) {
  return array.every((idx) => set.has(idx));
}
