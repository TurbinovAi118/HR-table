import axios from 'axios';

const POSTS_API_BASE_URL = "http://localhost:8011/api/posts";

class PostService {

    findAllPost(){
        return axios.get(POSTS_API_BASE_URL);
    }

    addNewPosts(pos){
        return axios.post(POSTS_API_BASE_URL, pos);
    }

    getPosts(id_pos){
        return axios.get(POSTS_API_BASE_URL + '/' + id_pos);
    }

    updatePosts(pos, id_pos){
        return axios.put(POSTS_API_BASE_URL + '/' + id_pos, pos);
    }

    deletePosts(id_pos){
        return axios.delete(POSTS_API_BASE_URL + '/' + id_pos);
    }
}



export default new PostService()