import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}`;

const searchRequests = {
    searchTwiddit: (_, { text }) => 
        generalRequest(`${URL}/${entryPoint.twiddit}/findByText/${text}`, 'GET'),

    // updateProfile: (_, { id, profile }) => 
    //     generalRequest(`${URL}${id}`, 'PATCH', profile),

}

export default searchRequests;