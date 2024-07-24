import { readDatabase } from "../utils";

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase("./database.csv");
      let responseText = "This is the list of our students\n";

      const fields = Object.keys(students).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      fields.forEach((field) => {
        const names = students[field].join(", ");
        responseText += `Number of students in ${field}: ${students[field].length}. List: ${names}\n`;
      });

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send("Cannot load the database");
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== "CS" && major !== "SWE") {
      res.status(500).send("Major parameter must be CS or SWE");
      return;
    }

    try {
      const students = await readDatabase("./database.csv");
      const names = students[major].join(", ");
      res.status(200).send(`List: ${names}`);
    } catch (error) {
      res.status(500).send("Cannot load the database");
    }
  }
}

export default StudentsController;
