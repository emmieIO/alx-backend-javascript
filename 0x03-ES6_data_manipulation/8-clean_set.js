export default function cleanSet(set, startString) {
  if (startString.length === 0 || startString == '') {
    return '';
  }
  const setArray = [...set];
  return setArray.filter((str) => (str !== undefined ? str.startsWith(startString) : ''))
    .map((str) => (str !== undefined ? str.substr(startString.length) : ''))
    .join('-');
}
