import { generateId } from "../Utils/generateId.js"



export class Question {
  constructor(data) {
    this.id = generateId()
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.answers = data.incorrect_answers
    this.answers.push(this.correct_answer)
    this.answers.sort(() => Math.random() - .5)
    this.answers.sort(() => Math.random() - .5)
    this.answers.sort(() => Math.random() - .5)
    this.answers.sort(() => Math.random() - .5)
    this.answers.sort(() => Math.random() - .5)
    this.answers.sort(() => Math.random() - .5)
    this.answers.sort(() => Math.random() - .5)
    console.log(this);
  }




  get QuestionsTemplate() {
    return `
    <div class='col-3 card'>${this.question}</div>
    
    <div class='col-3'>
    <button onclick="app.questionsController.checkAnswer('${this.answers[0]}', '${this.id}')">${this.answers[0]}</button>
    <button onclick="app.questionsController.checkAnswer('${this.answers[1]}', '${this.id}')">${this.answers[1]}</button>
    <button onclick="app.questionsController.checkAnswer('${this.answers[2]}', '${this.id}')">${this.answers[2]}</button>
    <button onclick="app.questionsController.checkAnswer('${this.answers[3]}', '${this.id}')">${this.answers[3]}</button>
    </div>
    `
  }
}