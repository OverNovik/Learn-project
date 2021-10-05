import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-quiz-366f8-default-rtdb.europe-west1.firebasedatabase.app/'
})