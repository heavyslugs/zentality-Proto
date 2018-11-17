import axios from 'axios';

const url = 'http://localhost:5000/api/mood/';

class PostMoodService {
    //Get Posts
    static getPosts() {
        return new Promise (async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch (err) {
                reject(err);
            }
        });
    }

    //Create Post for Button Click
    static insertButtonInput(value) {
        return axios.post(url, {
            value
        });
    }
}

export default PostMoodService;