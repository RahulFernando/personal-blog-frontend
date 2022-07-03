import http from '../helpers/httpHelper';

const httpRequests = {
    postSignUp: (data) => http.post('/users', data),
    postSignIn: (data) => http.post('/users/sign-in', data),
}

export default httpRequests;