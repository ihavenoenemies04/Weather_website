



















let questionn = document.querySelector(".question")
let answerButtons = document.querySelectorAll(".answers")


class Question { 
    constructor(question, ans1, ans2, correct_answer, ans4, ans5){
        this.question = question
        this.correct = correct
        this.answers = [
            ans1,
            ans2,
            this.correct,
            ans4,
            ans5,
        ]
    }
    display () {
        questionn.innerHTML = this.question


        for(let i = 0; i < this.answers.length; i += 1){
            answerButtons[i].innerHTML = this.answers[i]
        }
    }
}


let questions_list = [
new Question("m87", "lc 1101", "alcyoneus", "lc 1011", "mw"),
new Question("100 000 000 000 000", "30 000 000", "800 000 000", "2000", "500 000"),
new Question("1", "2", "3", "4", "5")
]

let total_answers_given = 0


























