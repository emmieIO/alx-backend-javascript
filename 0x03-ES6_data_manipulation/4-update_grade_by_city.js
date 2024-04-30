export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const studentsByCity = getListStudents.filter((std) => std.location === city);
  const updatedGrades = studentsByCity.map((std) => {
    const graded = newGrades.find((grade) => (std.id === grade.studentId));
    const updatedStd = { ...std };
    updatedStd.grade = graded
      ? updatedStd.grade = graded.grade
      : updatedStd.grade = 'N/A';
    return updatedStd;
  });
  return updatedGrades;
}
