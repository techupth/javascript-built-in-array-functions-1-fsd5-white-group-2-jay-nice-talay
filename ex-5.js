const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

// const test = students.reduce((accumulate, currentValue) => accumulate + currentValue.score, 0);
// console.log(test)

function getAverageStudentScore(students) {
  // Start coding here
  return students.reduce((accumulate, currentValue) => accumulate + currentValue.score, 0) / students.length;
}

console.log(getAverageStudentScore(students)); // Output: 87.5
