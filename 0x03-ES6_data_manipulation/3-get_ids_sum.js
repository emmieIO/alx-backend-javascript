export default function getStudentIdsSum(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  const initValue = 0;
  const sum = getListStudents.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, initValue,
  );

  return sum;
}
