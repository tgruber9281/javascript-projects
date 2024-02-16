//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor (name, mass, scores) {
        this.name = name,
        this.mass = mass, 
        this.scores = scores
    }

    addScore(newScore) {
        this.scores.push(newScore)
    }

    average() {
        let totalScore = 0
        for (let i = 0; i < this.scores.length; i++) {
            totalScore += this.scores[i];
        }
        let averageScore = totalScore / this.scores.length;
        return Math.round(averageScore*10)/10
    }

    status() {
        let averageScore = this.average();
        if (averageScore >= 90) {
            return 'Accepted';
        } else if (averageScore >= 80) {
            return 'Reserve';
        } else if (averageScore >= 70) {
            return 'Probationary';
        } else {
            return 'Rejected'
        }
    }
}

let bubba = new CrewCandidate('Bubba Bear',135, [88,85,90]);
let merry = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
let gator = new CrewCandidate('Glad Gator', 225, [75,78,62]);

// console.log(bubba)
// console.log(merry)
// console.log(gator)

// bubba.addScore(83)
// console.log(bubba.scores)

// console.log(merry.average())

// console.log(`${bubba.name} earned an average test score of ${bubba.average()}% and has a status of ${bubba.status()}.`)
// console.log(`${merry.name} earned an average test score of ${merry.average()}% and has a status of ${merry.status()}.`)
// console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`)
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let i = 0
while (gator.status() !== "Accepted") {
    console.log(gator.average())
    gator.addScore(100)
    i++
}

console.log(gator.scores)
console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`)
console.log(`${gator.name} needed to score 90% on ${i} tests to make the ${gator.status()} status.`)
