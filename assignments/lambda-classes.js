// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes)
        this.specialty = attributes.specialty
        this.favLanguage = attributes.favLanguage
        this.catchPhrase = attributes.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student,subject) {
        // Code for MVP
        // return `${student.name} receives a perfect score on ${subject}`

        // Stretch goal
        let blessRng = Math.round(Math.random() * (20 - (-20)) + -20)
        student.grade = student.grade + blessRng
        return `${student.name} receives ${blessRng} points on ${subject}. Grade is now ${student.grade}.`
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes)
        this.previousBackground = attributes.previousBackground
        this.className = attributes.className
        this.favSubjects = attributes.favSubjects
        this.grade = attributes.grade
    }
    listsSubjects() {
        //Shows favorite subjects on one line
        //return this.favSubjects.join(' ')

        //Shows favorite subjects on separate lines (list)
        return this.favSubjects.join('\n')
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    graduate() {
        if (this.grade >= 70) {
            return `Congratulations! With a score of ${this.grade}, you've graduated from Lambda School!`
        }
        return `You're not ready yet to fly on your own with a score of ${this.grade}.`
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes)
        this.gradClassName = attributes.gradClassName
        this.favInstructor = attributes.favInstructor
    }
    standUp(slack) {
        return `${this.name} announces to ${slack}, @channel standy times!`
    }
    debugsCode(student,subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}


const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

const arvin = new Student({
    name: 'Arvin',
    age: 26,
    location: 'New Jersey',
    previousBackground: 'PT Tech',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 70,
});
const isaiah = new Student({
    name: 'Isaiah',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 95,
});
const kevin = new Student({
    name: "Kevin",
    age: 28,
    location: "California",
    previousBackground: "Table Games Dealer",
    className: "WEB21",
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 90,
});
const nisa = new Student({
    name: 'Nisa',
    age: 25,
    location: 'Ohio',
    previousBackground: 'Debt Collector',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 85,
});
const joscelyn = new Student({
    name: "Joscelyn",
    age: 29,
    location: "California",
    previousBackground: "English teacher",
    className: 'Web21',
    favSubjects: ["Computer Science", "Philosophy", "English"],
    grade: 80,
});

const marguel = new ProjectManager({
    name: 'Marguel',
    age: 'Maybe 26',
    gradClassName: 'WEBPT2',
    favInstructor: 'Me?',
    location: 'California',
    specialty: 'React',
    favLanguage: 'JavaScript, Python, Elm etc.',
    catchPhrase: "Practice Flex Zombies !!!",
});
const brandon = new ProjectManager({
    name: 'Brandon',
    age: '34',
    gradClassName: 'WEB18',
    favInstructor: 'Professor Lambda',
    location: 'Maine',
    specialty: 'Redux',
    favLanguage: 'JavaScript, C++, Python.',
    catchPhrase: "You shall not pass!",
});
const mary = new ProjectManager({
    name: 'Mary',
    age: '24',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'New York',
    specialty: 'Express and Node.js',
    favLanguage: 'Javascript',
    catchPhrase: "That looks AWESOME",
});
const christian = new ProjectManager({
    name: 'Christian',
    age: '32',
    gradClassName: 'WEB18',
    favInstructor: 'Every Instructor in Lambda',
    location: 'Seattle, WA',
    specialty: 'Data Structures & Algorithms',
    favLanguage: 'JavaScript',
    catchPhrase: "Dont forget your daily commit.",
});
const pat = new ProjectManager({
    name: 'Pat',
    age: '38',
    gradClassName: 'WEB18',
    favInstructor: 'Brett Madrid',
    location: 'Petaluma, Ca',
    specialty: 'Empathetic to the struggle of Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lets google that together.'
});
const darren = new ProjectManager({
    name: 'Darren',
    age: '25',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'North Carolina',
    specialty: 'React',
    favLanguage: 'Javascript',
    catchPhrase: 'Gang. Gang.',
});
const austin = new ProjectManager({
    name: 'Austin',
    age: '23',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'Somewhere',
    specialty: 'Java',
    favLanguage: 'Java',
    catchPhrase: ":eggplant:",
});

// console.log(arvin.speak())
// console.log(isaiah.previousBackground)
// console.log(isaiah.age)
// console.log(kevin.className)
// console.log(nisa.favSubjects)
// console.log(nisa.listsSubjects())
// console.log(joscelyn.PRAssignment('JS-IV'))
// console.log(joscelyn.sprintChallenge('Javascript'))
// console.log(marguel.gradClassName)
// console.log(brandon.favInstructor)
// console.log(mary.standUp('Web21'))
// console.log(christian.catchPhrase)
// console.log(pat.specialty)
// console.log(darren.demo('JS'))
// console.log(pat.grade(isaiah, 'HTML'))
// console.log(christian.debugsCode(kevin, 'JS-IV'))
// console.log(dan.specialty)
// console.log(dan.favLanguage)
// console.log(dan.catchPhrase)
// console.log(dan.demo('React'))
console.log(dan.grade(arvin, 'Redux'))
console.log(arvin.graduate())