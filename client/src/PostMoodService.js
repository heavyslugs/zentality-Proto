import axios from 'axios';

const url = 'http://ec2-3-89-125-248.compute-1.amazonaws.com:5000/api//mood/';

class PostMoodService {

    //Create Post for Button Click
    static insertButtonInput(value) {
        return axios.post(url, {
            value
        });
    }
}

export default PostMoodService;