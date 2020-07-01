
class Person {
  constructor(name, startYear){
    this.name = name
    this.startYear = startYear
    this.courses = []
  }
  addCourse(course) {
    this.courses.push(course)
  }
}

/*
Override the addCourse method and courses attribute in the Teacher class.

Instead of courses being an array, it should be an object
The object should track the amount of times the teacher adds the course
Instead of addCourse pushing to an array (which now doesn't exist), it should update the course count in courses
*/


class Teacher extends Person {
  constructor(name, startYear, salary){
    super(name, startYear)
    this.salary = salary
    this.courses = {}
  }
  giveGrade(student, courseName, grade){
    student.receiveGrade(courseName,grade)
  }
  addCourse(courseName){
    this.courses[courseName] = (this.courses[courseName])? ++this.courses[courseName] : 1
  }
}

class Student extends Person {
  constructor(name, startYear){
    super(name, startYear)
    this.grades = []
  }
  receiveGrade(courseName, grade){
    this.grades.push({
      course:courseName,
      grade:grade
    })
  }
}


const t1 = new Teacher("Cassandra", 2002, 40000)
t1.addCourse("Algebra II")
t1.addCourse("Algebra II")
t1.addCourse("Trigonometry")
console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}