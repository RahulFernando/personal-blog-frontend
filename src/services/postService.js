import http from '../helpers/httpHelper';

const httpHelper = {
    getPosts: (data) => http.get(`/posts?${data}`) 
}

export default httpHelper;