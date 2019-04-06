import axios from 'axios';

const url = 'https://jyy9tytn6e.execute-api.us-east-1.amazonaws.com/active/active';

class PostActiveService {

    //Create Post for Button Click
    static insertActiveRating(value) {
        return axios.post(url, {
            value
        });
    }
}

export default PostActiveService;