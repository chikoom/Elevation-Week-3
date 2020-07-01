let people = [
  { salary: 1300, goodPerformance: false },
  { salary: 1500, goodPerformance: true },
  { salary: 1200, goodPerformance: true },
  { salary: 1700, goodPerformance: false },
  { salary: 1600, goodPerformance: true },
]

console.log(people)

const giveRaise = (person) => person.salary += (person.goodPerformance)? 300 : 0

people.forEach(giveRaise)

console.log(people)


