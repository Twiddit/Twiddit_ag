import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}`;

const searchRequests = {
    searchTwiddit: (_, { text }) => 
        generalRequest(`${URL}/${entryPoint.twiddit}/findByText/${text}`, 'GET'),

    searchUser: (_, { text }) => 
        generalRequest(`${URL}/${entryPoint.user}/findByText/${text}`, 'GET'),

}

export default searchRequests;