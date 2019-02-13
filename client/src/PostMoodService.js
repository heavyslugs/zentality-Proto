import axios from 'axios';

const url = 'http://localhost:5000/api/mood/';

class PostMoodService {

    //Create Post for Button Click
    static insertButtonInput(value) {
        return axios.post(url, {
            value
        });
    }
}

export default PostMoodService;