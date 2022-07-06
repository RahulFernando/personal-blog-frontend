import http from '../helpers/httpHelper';

const httpRequests = {
    getCategories: () => http.get('/categories'),
}

export default httpRequests;