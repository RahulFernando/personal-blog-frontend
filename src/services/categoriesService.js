import http from '../helpers/httpHelper';

const httpRequests = {
    getCategories: () => http.get('/categories'),
    postCategory: (data) => http.post('/categories', data),
}

export default httpRequests;