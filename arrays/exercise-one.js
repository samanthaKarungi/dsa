// Create a grades object that stores a set of student grades in an object. Provide a
// function for adding a grade and a function for displaying the student’s grade average.


class Grades {
  constructor (initialGrades) {
    if (!Array.isArray(initialGrades)) {
      throw new Error('grades must be an array');
    }

    this.grades = initialGrades;
  }


  addGrades (grade) {
    if (typeof grade !== 'number') {
      throw new Error('grade must be a number');
    }

    this.grades.push(grade);
  }


  calculateGradeSum () {
    return this.grades.reduce((acc, curr) => acc + curr , 0);
  }


  calculateGradeAverage () {
    return this.calculateGradeSum() / this.grades.length;
  }
}


const grades = new Grades([1, 1, 3, 4, 5]);

console.log(grades.calculateGradeSum());
console.log(grades.calculateGradeAverage());