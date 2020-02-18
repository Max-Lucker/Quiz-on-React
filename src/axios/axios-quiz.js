import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-d33b4.firebaseio.com/'
})