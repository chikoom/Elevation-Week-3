
class Person {
  constructor(name, startYear){
    this.name = name
    this.startYear = startYear
  }
}

class Teacher extends Person {
  constructor(name, startYear, salary){
    super(name, startYear)
    this._salary = salary
  }
  giveGrade(student, courseName, grade){
    student.receiveGrade(courseName,grade)
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


const s1 = new Student("Ronda", 2017)
const t1 = new Teacher("Cassandra", 2002, 40000)

t1.giveGrade(s1, "Algebra II", 82)
const firstGrade = s1.grades[0]

console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
