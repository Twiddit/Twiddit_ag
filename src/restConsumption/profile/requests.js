import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}/`;
const URLNotifications = `http://${url}:${port}/notifications/`;

const profileRequests = {
    viewProfile: (_, { id }) => 
        generalRequest(`${URL}${id}`, 'GET'),

    viewNotifications: (_, { id }) => 
        generalRequest(`${URLNotifications}${id}`, 'GET'),

    updateProfile: (_, { id, profile }) => 
        generalRequest(`${URL}${id}`, 'PATCH', profile),

}

export default profileRequests;