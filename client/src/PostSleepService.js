import axios from 'axios';

const url = 'http://localhost:5000/api/sleep/';

class PostSleepService {

    //Create Post for Button Click
    static insertHoursSlept(value) {
        return axios.post(url, {
            value
        });
    }
}

export default PostSleepService;