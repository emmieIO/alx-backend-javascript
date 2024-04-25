/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    // Type checking and error handling
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (
      !Array.isArray(students)
      || students.some((student) => typeof student !== 'string')
    ) {
      throw new TypeError('Students must be an array of strings');
    }

    // Store attributes with underscore prefix
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  set students(newStudents) {
    if (
      !Array.isArray(newStudents)
      || newStudents.some((newStudent) => typeof newStudent !== 'string')
    ) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
