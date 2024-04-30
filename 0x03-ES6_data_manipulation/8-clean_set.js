export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const setArray = [...set];
  return setArray.filter((str) => str.startsWith(startString))
    .map((str) => str.substr(startString.length))
    .join('-');
}
