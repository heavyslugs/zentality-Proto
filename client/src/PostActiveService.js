import axios from 'axios';

const url = 'http://ec2-3-89-125-248.compute-1.amazonaws.com:5000/api/active/';

class PostActiveService {

    //Create Post for Button Click
    static insertActiveRating(value) {
        return axios.post(url, {
            value
        });
    }
}

export default PostActiveService;