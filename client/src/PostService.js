import axios from 'axios';

const url = 'https://zi949gj70c.execute-api.us-east-1.amazonaws.com/posts/posts/%7Bproxy+%7D';
//const url = 'http://ec2-3-89-125-248.compute-1.amazonaws.com:5000/api/active'

class PostService {
    //Get Posts
    static getPosts() {
        return new Promise (async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data.posts;
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
    
    //Create Post
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }

    //Delete Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;