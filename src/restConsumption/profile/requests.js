import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}/`;

const profileRequests = {
    viewProfile: (_, { id }) => 
        generalRequest(`${URL}${id}`, 'GET'),

    updateProfile: (_, { id, profile }) => 
        generalRequest(`${URL}${id}`, 'PATCH', profile),

}

export default profileRequests;