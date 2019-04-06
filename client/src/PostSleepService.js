import axios from 'axios';

const url = 'https://fqjjnkik27.execute-api.us-east-1.amazonaws.com/sleep/sleep';

class PostSleepService {

    //Create Post for Button Click
    static insertHoursSlept(value) {
        return axios.post(url, {
            value
        });
    }
}

export default PostSleepService;