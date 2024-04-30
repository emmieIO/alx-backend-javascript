export default function cleanSet(set, startString) {
  if (startString === undefined || startString === '') {
    return '';
  }
  const setArray = [...set];
  return setArray.filter((str) => (str !== undefined ? str.startsWith(startString) : ''))
    .map((str) => (str !== undefined ? str.substr(startString.length) : ''))
    .join('-');
}
