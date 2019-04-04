import axios from 'axios';
//import { API } from  'aws-amplify'

//class PostService {
//    state = { posts: [] }
    //Get Posts
 //   static getPosts() {
 //       return new Promise (async (resolve, reject) => {
   //         try {
    //            const data = await API.get('zentalityApi', '/v1')
     //           this.setState({ posts: data.posts})
      //          resolve(
       //             this.state.posts.map(post => ({
        //                post,
         //               createdAt: new Date(post.createdAt)
          //          }))
           //     );
            //} catch (err) {
              //  reject(err);
            //}
        //});
    //}
    
    //Create Post
   // static insertPost(text) {
     //   return axios.post(url, {
       //     text
        //});
    //}

    //Delete Post
    //static deletePost(id) {
      //  return axios.delete(`${url}${id}`);
    //}
//}
const url = 'http://ec2-3-89-125-248.compute-1.amazonaws.com:5000/api/posts';

class PostService {
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