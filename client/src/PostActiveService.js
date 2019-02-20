import axios from 'axios';

const url = 'http://localhost:5000/api/active/';

class PostActiveService {

    //Create Post for Button Click
    static insertActiveRating(value) {
        return axios.post(url, {
            value
        });
    }
}

export default PostActiveService;