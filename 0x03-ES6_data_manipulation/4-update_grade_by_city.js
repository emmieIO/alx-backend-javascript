import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const studentsByCity = getStudentsByLocation(getListStudents, city);
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
