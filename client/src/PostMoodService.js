import axios from 'axios';

const url = 'https://jycb6ryba4.execute-api.us-east-1.amazonaws.com/mood/mood';

class PostMoodService {

    //Create Post for Button Click
    static insertButtonInput(value) {
        return axios.post(url, {
            value
        });
    }
}

export default PostMoodService;