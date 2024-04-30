export default function cleanSet(set, startString) {
  const filteredValues = [...set].filter((str) => str.startsWith(startString));
  const cleanedValues = filteredValues.map((str) => str.substr(startString.length));
  return cleanedValues.join('-');
}
