import { generalRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}`;

const requests = {
    login: (_, { loginBody }) =>
        generalRequest(`${URL}/login`, 'POST', loginBody),

    register: (_, { registerBody }) =>
        generalRequest(`${URL}/signup`, 'POST', registerBody),

    password: (_, { passwordChangeBody }) =>
        generalRequest(`${URL}/change_password`, 'POST', passwordChangeBody),

    validate: (_, { token }) => 
        generalRequest(`${URL}/validate`, 'POST', token),
    logout: (_, { token }) => 
        generalRequest(`${URL}/logout`, 'POST', token)
    
};

export default requests;