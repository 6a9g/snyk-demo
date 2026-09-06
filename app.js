const _ = require("lodash");

const students = [
  { name: "Ahmed", grade: 85 },
  { name: "Sara", grade: 95 },
  { name: "Omar", grade: 78 }
];

const rankedStudents = _.orderBy(
  students,
  ["grade"],
  ["desc"]
);

console.log("Students ranked by grade:");
console.table(rankedStudents);
