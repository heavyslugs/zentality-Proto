import axios from 'axios';

const url = 'http://ec2-3-89-125-248.compute-1.amazonaws.com:5000/api/sleep/';

class PostSleepService {

    //Create Post for Button Click
    static insertHoursSlept(value) {
        return axios.post(url, {
            value
        });
    }
}

export default PostSleepService;