import { appState } from "../AppState.js";
import { Question } from "../Models/Questions.js";







class QuestionsService {

  async getQuestions() {
    const response = await axios.get('https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple')
    console.log('house data', response.data);
    appState.questions = response.data.results.map(qd => new Question(qd))
  }


  async getFiveQuestions() {
    const response = await axios.get('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
    console.log(response.data);
    appState.questions = response.data.results.map(qd => new Question(qd))
  }



}











export const questionsService = new QuestionsService()