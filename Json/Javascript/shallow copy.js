let person1 = { name: "Du Thanh Duoc", skill: { coding: "Javascript" } }
//shallow copy
let person2 = { ...person1 }
person2.skill = "Java"
console.log(person1.skill)
console.log(person2.skill)