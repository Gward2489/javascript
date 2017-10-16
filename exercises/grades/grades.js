const scores = [82, 71, 62, 95, 55, 98, 69, 85, 78, 84, 64, 58, 87, 60, 93, 43, 81, 76]
let highScore = scores[0]
let lowScore = scores[0]

const grades = {
    "A": 0,
    "B": 0,
    "C": 0,
    "D": 0,
    "F": 0
}

for (let i = 0; i < scores.length; i++) {
    if (scores[i] <= 60) {
        grades.F += 1
    } else if (scores[i] > 60 && scores[i] <= 70) {
        grades.D += 1
    } else if (scores[i] > 70 && scores[i] <= 80) {
        grades.C += 1
    } else if (scores[i] > 80 && scores[i] <= 90) {
        grades.B += 1
    } else if (scores[i] > 90 && scores[i] <= 100) {
        grades.A += 1
    }
}

for (grade in grades) {
    console.log("There are " + grades[grade] + " " + grade + "'s")
}

for (let i = 0; i < scores.length; i++) {
     if (highScore < scores[i]) {
         highScore = scores[i]
     }
}

console.log("The high score is " + highScore)

for (let i = 0; i < scores.length; i++) {
    if (lowScore > scores[i]) {
        lowScore = scores[i]
    }
}

console.log("the low score is " + lowScore)

let currentGradeCount = grades.A
let commonGrade = 0
for (grade in grades) {
    if (grades[grade] >= currentGradeCount) {
        currentGradeCount = grades[grade]
        commonGrade = grade
    }
}
console.log("the most common grades were " + commonGrade + "'s")

let newGradeCount = grades.A
let leastGrade = 0
for (grade in grades) {
    if (grades[grade] <= newGradeCount) {
        newGradeCount = grades[grade]
        leastGrade = grade
    }
}
console.log("the least common grades were " + leastGrade + "'s")
