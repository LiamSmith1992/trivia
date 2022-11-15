import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";





function _drawQuestions() {
  let questions = appState.questions
  let template = ''
  questions.forEach(q => template += q.QuestionsTemplate)
  setHTML('questions', template)
}






export class QuestionsController {

  constructor() {
    appState.on('questions', _drawQuestions)
    this.getQuestions()
  }

  async getQuestions() {
    console.log('getting Questions')
    await questionsService.getQuestions()
    console.log('got the questions')
  }

  checkAnswer(answer, id) {
    console.log(answer)
    let question = appState.questions.find(q => q.id == id)
    console.log(question);
    if (answer == question.correct_answer) {
      window.alert('yooouuurrrr RIGHT')
    } else { window.alert('brain so smooth') }
  }

  async getFiveQuestions() {
    try {
      await questionsService.getFiveQuestions()
    } catch (error) {
      Pop.error(error.message)
    }
  }


}