import fs from "fs";

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const students = {};
      const lines = data.split("\n");

      for (const line of lines) {
        if (line.trim() === "") continue;
        const [firstname, field] = line.split(",");
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }

      resolve(students);
    });
  });
};
