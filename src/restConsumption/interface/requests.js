import { generalRequest, getRequest } from '../../utilities';
import { url, port } from './server';

const URL = `http://${url}:${port}`;

const requests = {
    consumeCheckEmail: (_,{ email }) =>
        generalRequest(`${URL}/consume/${email}`, 'GET'),
    consumeGetMessages: (_,{ email,n }) =>
        generalRequest(`${URL}/consume/${email}/${n}`, 'GET')
};

export default requests;